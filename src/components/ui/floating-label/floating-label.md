# Floating Label — API Reference

Form control where the label floats above the input when the field has focus or a value. Pure CSS using `:placeholder-shown`. Works with `input`, `select`, and `textarea`. No JavaScript required.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | auto-generated | Input `id` (must match label `for`) |
| `type` | `string` | `'text'` | Input type |
| `label` | `string` | — | Label text (required) |
| `name` | `string` | — | Input `name` |
| `value` | `string` | — | Default value |
| `placeholder` | `string` | `' '` | Must be a space or non-empty for CSS float to work |
| `required` | `boolean` | `false` | Required validation |
| `disabled` | `boolean` | `false` | Disabled state |
| `tag` | `'input' \| 'select' \| 'textarea'` | `'input'` | Form control element type |
| `classes` | `string[]` | `[]` | Extra CSS classes on wrapper |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on the control |

Slot: `<option>` elements for `tag="select"`.

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `float_label_id` | `string\|null` | `null` | ID |
| `float_label_type` | `string` | `'text'` | Type |
| `float_label_label` | `string` | `''` | Label text |
| `float_label_name` | `string\|null` | `null` | Name |
| `float_label_value` | `string\|null` | `null` | Value |
| `float_label_placeholder` | `string` | `' '` | Placeholder (must be space) |
| `float_label_required` | `boolean` | `false` | Required |
| `float_label_disabled` | `boolean` | `false` | Disabled |
| `float_label_tag` | `string` | `'input'` | Tag: `input`, `select`, `textarea` |
| `float_label_options` | `string` | — | `<option>` HTML for select |
| `float_label_uc` | `string[]` | `[]` | Extra utility classes |
| `float_label_att` | `Attribute` | — | Drupal Attribute on the control |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--fl_label-c` | body_c at 60% opacity | Label default color |
| `--fl_label-c-f` | `var(--body_c)` | Label floated color |
| `--fl_label-f-s` | `1rem` | Label default font size |
| `--fl_label-f-s-f` | `0.75em` | Label floated font size |
| `--fl_p-b` | `1rem` | Input padding block |
| `--fl_p-i` | `0.75rem` | Input padding inline |
| `--fl_input-h` | `3.5rem` | Input height |

## How it works

The label floats when:
1. The input has `:focus`
2. The input has a value (`:not(:placeholder-shown)`)

**Critical**: the `placeholder` must always be set to at least a space character (`" "`). Without this, `:placeholder-shown` won't work and the label won't float when the field has a value.

## Accessibility

- The `<label>` is always present in the DOM and associated with the input via `for`/`id`.
- Screen readers announce the label correctly regardless of its visual position.
