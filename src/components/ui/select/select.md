# Select

Dropdown select. Overrides Drupal's `select.html.twig`. Supports optgroups and multiple selection.

## Props

| Name | Type | Default | Description |
|---|---|---|---|
| `options` | `SelectOption[]` | `[]` | Options array |
| `emptyOption` | `string \| null` | `null` | Placeholder option |
| `size` | `'sm' \| 'lg' \| null` | `null` | Visual size |
| `multiple` | `boolean` | `false` | Multiple selection |
| `name` | `string \| null` | `null` | Input name |
| `id` | `string \| null` | `null` | HTML id |
| `disabled` | `boolean` | `false` | Disabled |
| `invalid` | `boolean` | `false` | Sets `aria-invalid="true"` |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `object` | `{}` | Extra HTML attributes |

## CSS variables

| Variable | Default | Description |
|---|---|---|
| `--sel_c` | `var(--body_c)` | Text color |
| `--sel_bg` | `var(--body_bg)` | Background |
| `--sel_b-c` | `var(--b-c)` | Border color |
| `--sel_b-c_focus` | `var(--link_c)` | Focus border color |
| `--sel_p-b` | `var(--size_200)` | Padding block |
| `--sel_p-i` | `var(--size_300)` | Padding inline |
| `--sel_b-r` | `var(--b-r)` | Border radius |
| `--sel_icon` | SVG chevron | Dropdown arrow icon |

## Generated classes

- Base: `.c--select`
- Size: `.is--sm`, `.is--lg`
