---
name: block-generator
description: Generate Astro block components (compositions) in src/components/blocks/ from UI images. Use when asked to build a block, section, hero, feature row, pricing band, testimonial strip, CTA banner, or any composition combining multiple atomic components. Triggers on /block-generator with an attached image, or phrases like "create a hero block", "generate this section", "construiește un block hero", "fă acest section".
deprecated: "Replaced by joui-block-schema through joui-block-orchestrator (Phase 3 — 2026-05-18). This skill targets the old src/components/blocks/ Astro format. Use joui-block-orchestrator for packages/core/blocks/ 5-file format."
---

# block-generator

Transform UI images into Astro **block** components (compositions) in `src/components/blocks/`. Blocks consume atomic components from `src/components/ui/` and add layout — never restyle atomics.

## Scope

- Output: `.astro` + `.css` only, in `src/components/blocks/<kebab-name>/`
- Consumes existing atomics from `src/components/ui/` via import
- If an atomic is missing → delegate to `/component-generator` first, then continue
- NEVER modifies atomics, global tokens, or CSS variables outside the block

## Workflow

1. **Read the image** — identify zones (heading, body, media, CTA, list), hierarchy, layout type
2. **Inventory atomics needed** — for each visible element decide:
   - Native element (`h1-h6`, `p`, `ul`, `figure`) → use directly
   - Existing atomic in `src/components/ui/` → import
   - Missing atomic → delegate to `/component-generator`, wait for confirmation
3. **Search `src/components/blocks/` for ≥70% match** — if found, classify diffs (cat 1/2/3); else create new block
4. **Always ask user (cat 3) for layout decision** — which layout pattern (split / stack / asymmetric / grid / hero), alignment, container breakpoints
5. **Delegate generation** — call `ai-cg-astro` for `.astro`, `ai-cg-css` for `.css`. Pass explicit instruction: *"block layout-only — no theming, no colors, no typography"*
6. **Save decisions** to `.claude/memory/block-generator/decisions.md`. Promote repeated patterns to `rules.md`.

## Diff classification (when extending existing block)

| Category | Definition | Action |
|---|---|---|
| 1 — Trivial (CSS var) | only value change (gap, padding, max-width) | apply directly |
| 2 — Modifier | optional behavior, single switch (`has-divider`, `is-reversed`) | propose modifier class, apply |
| 3 — Structural | new prop with multiple variants (`layout`, `align`, `density`) | **ask user before applying** |

Naming: `is-{prop}-{value}` (drop `Type`), `is-{state}`, `has-{feature}`. Default value → no class.

## Rules — STRUCTURE

Every block has **exactly 2 root levels**:

```astro
<div class="feature-media">                <!-- root: container only -->
  <div class="feature-media-inner">        <!-- layout -->
    <slot />
  </div>
</div>
```

```css
.feature-media {
  container-type: inline-size;
  container-name: feature-media;
  /* NO layout properties on root */

  & > .feature-media-inner {
    display: grid;
    grid-template-columns: 1fr;

    @container feature-media (min-width: 48rem) {
      grid-template-columns: 1fr 1fr;
    }
  }
}
```

**Why two levels:** an element cannot match its own container query. The root declares the container; the inner reads from it.

**Exception:** blocks that don't need container queries (dividers, spacers, single-element blocks) may be single-level — but then must NOT declare `container-type` at all.

## Rules — CSS

- All selectors **nested with `&`**. Top-level chained selectors forbidden.
- Use `& > .child` (direct child combinator) — avoids accidentally matching nested blocks.
- Variants `&.is-*` / `&.has-*` nested under root.
- Container queries nested inside the layout selector, never top-level.
- See [references/responsive.md](references/responsive.md) for `@container` patterns.
- See [references/layout-patterns.md](references/layout-patterns.md) for grid/flex snippets.
- See [references/atomic-customization.md](references/atomic-customization.md) for overriding atomic styles.

## Rules — RESPONSIVE

- **`@container` only.** Never `@media` for layout.
- Mobile-first: base styles = stack/single-column. Container queries add columns progressively.
- Breakpoints in `rem`. Each block decides own breakpoints based on content.
- Allowed `@media` exceptions: **only `prefers-reduced-motion`** (a11y). Light/dark handled by `light-dark()` tokens — no `prefers-color-scheme`.
- Use `cqi`/`cqw` + `clamp()` for fluid spacing when natural.

## Rules — GRID vs FLEX

| Use Grid | Use Flex |
|---|---|
| 2D layouts (rows + cols) | 1D layouts (single axis) |
| Asymmetric columns (`60/40`, `1fr 2fr`) | Vertical stacks (heading + body + CTA) |
| Explicit `grid-template-areas` | Inline clusters (icon + label, button row) |
| Overlay via `grid-area` (one cell) | Wrapping chips/tags |
| Galleries with `auto-fit, minmax()` | Distribute space with `gap` |

**Default:** Grid for the block shell (zone arrangement), Flex inside each zone (element clusters).

## Rules — ATOMIC INTEGRATION

- Import: `import Button from '../../ui/button/Button.astro';` (relative path; project has no `@components` alias by default — verify before assuming)
- Customize atomics **only via public CSS variables**:
  ```css
  & > .feature-media-cta {
    --button_bg: var(--c_accent);  /* override public var */
  }
  ```
- NEVER restyle atomic classes (`.button`, `.card`) from inside a block.
- Pass content via slots (`<slot name="heading" />`, `<slot name="media" />`, `<slot name="cta" />`).

## Rules — PROPS

- Always include `classes?: string[]` and `attrs?: Record<string, unknown>`
- `attrs` spreads on **root** (`.{block-name}`), not on `-inner`
- Variant props emit `is-{prop}-{value}` (drop `Type` suffix)
- Boolean states: `is-{state}`. Boolean features: `has-{feature}`. Default value → no class.

## Rules — WHAT BLOCK CSS CAN/CAN'T SET

| Allowed (layout/spacing) | Forbidden on atomics (theming) |
|---|---|
| `display`, `grid-*`, `flex` | `color`, `background`, `border` (only via public-var override) |
| `gap`, `padding`, `margin` | `font-*`, `letter-spacing`, `line-height` |
| `max-width`, `min-height` | `box-shadow`, `text-shadow` |
| `container-*`, `place-*`, `align-*`, `justify-*` | Anything that re-skins the atomic |
| `aspect-ratio` | |

## Memory

- Path: `.claude/memory/block-generator/` (separate from `component-generator`)
- `decisions.md` — non-trivial structural decisions per block
- `rules.md` — repeated patterns promoted to rules

Decision entry format:

```
## YYYY-MM-DD — <block-name>
- **Difference:** <what was different>
- **Decision:** <prop / modifier / variable>
- **Rationale:** <why>
- **Implemented:** <key class/var changes>
```

## Report format to user

1. **Atomics inventory** — what's reused, what's missing (delegated to `/component-generator`)
2. **Match identified** — existing block name or "new block: `<name>`"
3. **Diff list** — each with category
4. **Layout questions** — cat 3 only (always asked for new blocks)
5. **Skills to be called** after confirmation

## Behavior

- Read memory at start (`decisions.md` + `rules.md`).
- Apply cat 1+2 directly. Ask only on cat 3.
- Never write code directly — delegate to `ai-cg-astro` / `ai-cg-css`.
- Language: match user input (RO / EN).
- Short responses. No end-of-turn summaries.
