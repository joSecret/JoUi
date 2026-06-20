---
name: joui-component
description: "Create new joui UI components following the project's established patterns. Use when asked to add a new component, build a new UI element, or extend the joui library. Covers the full file set: Astro component, Twig template, CSS (custom property architecture), Drupal SDC YAML, JS behavior, and all documentation files (.md, .astro.md, .drupal.md, .demo.mdx)."
deprecated: "Replaced by joui-component-schema through joui-component-orchestrator (Phase 3 — 2026-05-18). This skill targets the old src/components/ui/ Astro format. Use the new skills for packages/core/ 5-file format."
---

# joui Component Creator

## Component File Structure

Each component lives in `src/components/ui/{name}/`:

```
{name}/
├── {Name}.astro           Astro component (PascalCase filename)
├── {name}.css             Shared CSS (imported by Astro, auto-loaded by Drupal SDC)
├── {name}.twig            Drupal Twig template
├── {name}.js              Drupal behavior (only if JS is needed)
├── {name}.component.yml   Drupal SDC schema
├── {name}.md              Full API reference (props, CSS vars, accessibility)
├── {name}.astro.md        Astro-specific install + examples
├── {name}.drupal.md       Drupal-specific install + examples
├── {name}.demo.mdx        Docs site demo page (used by content collection)
└── thumbnail.svg          Simple SVG preview for the index page
```

## CSS Architecture

Read `references/css-pattern.md` before writing any CSS.

Quick rules:
- Public vars `--{pfx}_*` — consumers may override these
- Private vars `--_{pfx}_*` — internal only, never override externally
- Type modifier vars `--{pfx}-type_*` — set by modifier classes (e.g. `.{name}-outline`)
- State vars `--{pfx}-state_*` — set inside `:hover`, `:focus`, `:active` blocks
- Resolution chain: `--_{pfx}_x: var(--{pfx}-type_x, var(--{pfx}_x, fallback))`
- Actual CSS reads state first: `color: var(--{pfx}-state_c, var(--_{pfx}_c))`

Common property abbreviations:
`_c` color · `_bg` background · `_b-c` border-color · `_b-r` border-radius · `_f-s` font-size · `_l-h` line-height · `_p-b` padding-block · `_p-i` padding-inline · `_b-w` border-width · `_b-s` border-style · `_d` display · `_t` transition · `_w` width · `_h` height · `_g` gap · `_o-o` outline-offset · `_o-w` outline-width · `_o-c` outline-color

## Astro Component Pattern

```astro
---
import './{name}.css';

interface Props {
  color?: string | null;
  variant?: 'outline' | 'ghost' | null;
  classes?: string[];
  attrs?: Record<string, unknown>;
}

const { color = null, variant = null, classes = [], attrs = {} } = Astro.props;

const classList = [
  '{name}',
  color && `{name}-${color}`,
  variant && `{name}-${variant}`,
  ...classes,
].filter(Boolean);
---

<div class:list={classList} {...attrs}>
  <slot />
</div>
```

Rules:
- Always import CSS from the component file itself
- Use `class:list` for dynamic class building (never string concatenation)
- `classes` (string array) and `attrs` (object) are always the last two props — escape hatches
- Add JS only when CSS cannot handle the interaction; if needed, use `<script>` or a `.ts` file

## Drupal Prop Naming

All Drupal props are prefixed with the component name: `{name}_color`, `{name}_variant`, `{name}_uc` (utility classes), `{name}_att` (Drupal Attribute object).

When a prop would collide with an HTML attribute name (e.g. `type`), use `{name}_type` for the style variant instead of `{name}_variant`.

## Drupal JS Pattern

Only create `{name}.js` when the component needs DOM interaction. Always guard against double-attach:

```js
((Drupal) => {
  Drupal.behaviors.{name} = {
    attach(context) {
      context.querySelectorAll('.{name}[data-trigger]').forEach((el) => {
        if (el.hasAttribute('data-{name}-initialized')) return;
        el.setAttribute('data-{name}-initialized', 'true');
        el.addEventListener('click', () => { /* toggle logic */ });
      });
    },
  };
})(Drupal);
```

## demo.mdx Frontmatter

```mdx
---
title: {ComponentName}
description: One-line description
category: ui
preview: ./thumbnail.svg
---

import {ComponentName} from './{Name}.astro'
```

## Workflow

1. Read `references/css-pattern.md`
2. Write `{name}.css` — defines the component's CSS vocabulary
3. Write `{Name}.astro` — import CSS, map props to classes
4. Write `{name}.twig` — mirror Astro logic with Drupal naming
5. Write `{name}.component.yml` — SDC schema matching Twig props
6. Write `{name}.js` only if needed
7. Write `{name}.md`, `{name}.astro.md`, `{name}.drupal.md`
8. Write `{name}.demo.mdx` — import Astro component, showcase all variants
9. Create a minimal `thumbnail.svg`
