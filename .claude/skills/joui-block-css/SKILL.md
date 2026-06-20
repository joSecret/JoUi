---
name: joui-block-css
description: "Generate .css for a JoUI block following the CSS variable architecture. Use after joui-block-html. Input: block schema + HTML template. Output: packages/core/blocks/<name>/<name>.css"
---

# joui-block-css

Generate `.css` for a JoUI block. Block CSS owns layout and spacing; it must NOT target component internal classes.

## Input

- Path to the block's `.schema.json`
- Path to the block's `.html` template (already written by joui-block-html)

## Output

`packages/core/blocks/<name>/<name>.css`

## Workflow

1. **Read the joui-component-css reference** (`joui-component-css/references/css-variable-pattern.md`) — block CSS follows the same 3-layer variable architecture
2. **Read the schema** — identify layout variants (`.has-variant_*`), block-level props, and which components are referenced
3. **Read the HTML template** — extract all class names: root `.c--<block>`, sub-elements `.<block>-*`, variant modifier classes
4. **Write CSS with 3-layer architecture:**
   - Block owns LAYOUT: `display`, `grid-*`, `flex`, `gap`, `padding`, `max-width`, `container-type`
   - Block MAY set component public vars for layout context (e.g. `--btn_bg` inside a CTA wrapper)
   - Block MUST NOT target component internal classes
5. **Ensure no hardcoded values** — `validateCssTokens()` runs at build time and rejects hex, rgb(), oklch() literals

## Rules

- Root class selector is `.c--<block-name>` (e.g. `.c--hero`, `.c--features-grid`)
- Public vars use `--<block>_<prop>` (e.g. `--hero_bg`, `--hero_padding_y`)
- Private vars use `--_<block>_<prop>` (e.g. `--_hero_bg`)
- Blocks own LAYOUT: every layout property (display, grid, flex, gap, padding, max-width) belongs in block CSS
- Blocks MAY set component public vars for layout context:
  ```css
  .c--hero .hero-cta {
    --btn_p-i: var(--size_600); /* make CTA buttons wider in hero context */
  }
  ```
- Blocks MUST NOT target component internal classes — never write `.c--button`, `.card-title`, `.btn-icon`, etc. selectors in block CSS. Targeting component internal classes breaks encapsulation and will cause unintended side effects when components are updated.
- Every visual value is a CSS variable — no hardcoded hex, rgb(), or oklch() literals
- `validateCssTokens()` runs automatically on `pnpm --filter core build` — violations fail the build
- All variant and sub-element selectors must be nested inside the root class using `&` (CSS native nesting)

## What block CSS can and cannot set

| Allowed (layout/spacing) | Forbidden (component theming) |
|--------------------------|------------------------------|
| `display`, `grid-*`, `flex-*` | `.c--button` selector |
| `gap`, `padding`, `margin` | `.card-title` selector |
| `max-width`, `min-height` | Any component sub-element selector |
| `container-type`, `container-name` | `color`, `background` on component elements |
| `place-*`, `align-*`, `justify-*` | `font-*`, `letter-spacing` on component elements |
| Component public vars (`--btn_bg`) for layout context | Component private vars (`--_btn_bg`) — never override these |
