# Textarea

Multiline text input. Overrides Drupal's `textarea.html.twig`.

## Props

| Name | Type | Default | Description |
|---|---|---|---|
| `rows` | `number` | `3` | Visible row count |
| `resize` | `'none' \| 'horizontal' \| 'both' \| null` | `null` | Resize direction (default: vertical) |
| `placeholder` | `string \| null` | `null` | Placeholder text |
| `value` | `string \| null` | `null` | Initial value |
| `name` | `string \| null` | `null` | Input name |
| `id` | `string \| null` | `null` | HTML id |
| `disabled` | `boolean` | `false` | Disabled |
| `readonly` | `boolean` | `false` | Read-only (disables resize) |
| `invalid` | `boolean` | `false` | Sets `aria-invalid="true"` |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `object` | `{}` | Extra HTML attributes |

## CSS variables

| Variable | Default | Description |
|---|---|---|
| `--txta_c` | `var(--body_c)` | Text color |
| `--txta_bg` | `var(--body_bg)` | Background |
| `--txta_b-c` | `var(--b-c)` | Border color |
| `--txta_b-c_focus` | `var(--link_c)` | Focus border color |
| `--txta_resize` | `vertical` | Resize direction |
| `--txta_min-h` | `var(--size_1000)` | Min height |
| `--txta_p-b` | `var(--size_200)` | Padding block |
| `--txta_p-i` | `var(--size_300)` | Padding inline |

## Generated classes

- Base: `.c--textarea`
- Resize: `.is--no-resize`, `.is--h-resize`, `.is--both-resize`
