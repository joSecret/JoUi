---
name: joui-component-docs
description: "Generate .md documentation for a JoUI component from its schema. Use after joui-component-schema. Input: the component's .schema.json. Output: packages/core/components/<name>/<name>.md"
---

# joui-component-docs

Generate `.md` documentation for a JoUI component — the human-readable reference page used by the catalog site.

## Input

Path to the component's `.schema.json` file (e.g. `packages/core/components/chip/chip.schema.json`)

## Output

`packages/core/components/<name>/<name>.md`

## Workflow

1. **Read the schema** — extract all fields: name, description, props, slots, tokensUsed, a11y, dependencies
2. **Generate markdown** with all required sections listed below
3. **Verify completeness** — confirm every prop, slot, and CSS token from the schema appears in the documentation

## Rules

Required sections (in this order):

1. **`# ComponentName`** — title-cased component name as H1
2. **Description paragraph** — the schema's `description` field, expanded with a sentence or two of usage guidance
3. **`## Features`** — bullet list of key capabilities (derived from props and slots)
4. **`## Props`** — markdown table with columns: `Name | Type | Default | Description`
   - Include every prop from the schema
   - Default column shows the schema `default` value, or `—` if no default
   - Required props marked with `*` after the name
5. **`## Slots`** — markdown table with columns: `Name | Description`
   - Omit this section entirely if the component has no slots (`slots: {}`)
6. **`## CSS variables`** — markdown table with columns: `Variable | Default | Description`
   - List the component's public vars (`--<name>_*`) with their semantic token defaults
   - Omit if `tokensUsed` is empty
7. **`## Accessibility`** — bullet list from the schema's `a11y` field
8. **`## Dependencies`** — bullet list of dependency names
   - **Omit this section entirely** if `dependencies` is empty (which it always is for components)

## Example output structure

```markdown
# Chip

Small inline label element for tagging content with categories, statuses, or metadata.

## Features

- Color variants: primary, secondary, accent, success, warning, danger, info, light, dark
- Size variants: sm, md, lg
- Dismissible variant with close button
- Icon slot for leading icon

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| label * | string | — | Visible text content |
| color | string | — | Color variant |
| size | string | — | Size variant |
| dismissible | boolean | false | Whether the chip shows a close button |

## Slots

| Name | Description |
|------|-------------|
| icon | Optional icon rendered before the label |

## CSS variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--chip_c` | `var(--body_c)` | Text color |
| `--chip_bg` | `var(--body_bg)` | Background color |
| `--chip_b-r` | `var(--br)` | Border radius |

## Accessibility

- Keyboard focusable when interactive (dismissible)
- Color is not the only differentiator — text label is always present
- Dismissible chips include an accessible close button with aria-label

## Dependencies

(none — omit this section for components)
```
