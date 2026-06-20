# Check / Radio — API Reference

Styled checkbox, radio button, and toggle switch. All custom-styled via CSS `appearance: none` and background-image for the checked state. No JavaScript required.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'checkbox' \| 'radio' \| 'switch'` | `'checkbox'` | Input type |
| `id` | `string` | auto-generated | Input `id` (matches label `for`) |
| `name` | `string` | — | Input `name` attribute |
| `label` | `string` | — | Label text |
| `checked` | `boolean` | `false` | Checked by default |
| `disabled` | `boolean` | `false` | Disabled state |
| `inline` | `boolean` | `false` | Inline layout |
| `value` | `string` | — | Input `value` attribute |
| `required` | `boolean` | `false` | Required validation |
| `classes` | `string[]` | `[]` | Extra CSS classes on wrapper |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on input |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `check_type` | `string` | `'checkbox'` | Type |
| `check_id` | `string\|null` | `null` | ID |
| `check_name` | `string\|null` | `null` | Name |
| `check_label` | `string\|null` | `null` | Label text |
| `check_checked` | `boolean` | `false` | Checked |
| `check_disabled` | `boolean` | `false` | Disabled |
| `check_inline` | `boolean` | `false` | Inline |
| `check_value` | `string\|null` | `null` | Value |
| `check_required` | `boolean` | `false` | Required |
| `check_uc` | `string[]` | `[]` | Extra utility classes |
| `check_att` | `Attribute` | — | Drupal Attribute on the input |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--chk_input-s` | `1.25em` | Input size |
| `--chk_input-bg` | `var(--body_bg)` | Unchecked background |
| `--chk_input-b-c` | body_c at 50% opacity | Border color |
| `--chk_input-b-r` | `var(--b-r_md)` | Border radius (checkbox) |
| `--chk_active-bg` | `var(--c_primary_500)` | Checked background |
| `--chk_active-b-c` | `var(--c_primary_500)` | Checked border |

## Classes

| Class | Description |
|-------|-------------|
| `form-check` | Wrapper |
| `form-check-input` | The input element |
| `form-check-label` | The label element |
| `form-check-inline` | Inline layout modifier |
| `form-switch` | Pill-shaped toggle switch |

## Accessibility

- Always provide an `id` on the input and a matching `for` on the label.
- Switch type gets `role="switch"` automatically.
- Disabled inputs have `opacity: 0.5` and `pointer-events: none`.
