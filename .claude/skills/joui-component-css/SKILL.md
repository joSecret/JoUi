---
name: joui-component-css
description: "Generate .css for a JoUI component following the 3-layer CSS variable architecture. Use after joui-component-html. Input: component schema + HTML template. Output: packages/core/components/<name>/<name>.css"
---

# joui-component-css

Generate `.css` for a JoUI component following the 3-layer CSS variable architecture.

## Input

- Path to the component's `.schema.json`
- Path to the component's `.html` template (already written by joui-component-html)

## Output

`packages/core/components/<name>/<name>.css`

## Workflow

1. **Read `references/css-variable-pattern.md`** — understand the 3-layer architecture and variable naming conventions before writing any CSS
2. **Read the schema** — identify all props that produce CSS variants: color enum, size enum, type/style enum, boolean modifiers
3. **Read the HTML template** — extract all class names used (root `.c--<name>`, sub-elements `.<name>-*`, variant classes `.has-*`, state classes `.is-*`)
4. **Write CSS with 3-layer architecture:**
   - Layer 1: Public API vars `--<name>_<prop>` at root `.c--<name>` (consumers may override)
   - Layer 2: Private computed vars `--_<name>_<prop>` resolving type → public → token fallback
   - Layer 3: Rendered CSS properties reading from state vars with private fallback
5. **Ensure no hardcoded values** — every color, size, and spacing value must be a CSS variable reference; `validateCssTokens()` runs at build time and will reject any hex, rgb(), or raw oklch() literals

## Rules

- Root class selector is `.c--<name>` (never `.name` or just `name`)
- Public vars use `--<name>_<prop>` (e.g. `--chip_bg`, `--chip_c`)
- Private computed vars use `--_<name>_<prop>` (e.g. `--_chip_bg`)
- State override vars use `--<name>-state_<prop>` set inside `&:hover`, `&:focus-visible`, `&:active`
- Type/variant override vars use `--<name>-type_<prop>` set inside `&.has-type_<value>` selectors
- Color variants are selectors `&.has-color_<value>` that set the public vars `--<name>_c` and `--<name>_bg`
- Every visual value is a CSS variable — zero hardcoded hex, rgb(), or oklch() literals
- `validateCssTokens()` runs automatically on `pnpm --filter core build` and will fail the build on violations
- State variant selectors (`&:hover`, `&.has-*`) must be nested inside `.c--<name>` using `&` (never top-level)
- Sub-element styles (`.card-title`) must also be nested inside the root class

## References

- [references/css-variable-pattern.md](references/css-variable-pattern.md) — full 3-layer architecture with button.css as concrete reference
