# Input

Text input field. Overrides Drupal's `input.html.twig`.

## Props

| Name | Type | Default | Description |
|---|---|---|---|
| `type` | string | `'text'` | text, email, password, search, number, tel, url, date, time |
| `size` | `'sm' \| 'lg' \| null` | `null` | Visual size |
| `placeholder` | `string \| null` | `null` | Placeholder text |
| `value` | `string \| null` | `null` | Initial value |
| `name` | `string \| null` | `null` | Input name |
| `id` | `string \| null` | `null` | HTML id |
| `disabled` | `boolean` | `false` | Disabled state |
| `readonly` | `boolean` | `false` | Read-only state |
| `invalid` | `boolean` | `false` | Sets `aria-invalid="true"` |
| `required` | `boolean` | `false` | Required field |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `object` | `{}` | Extra HTML attributes |

## CSS variables

| Variable | Default | Description |
|---|---|---|
| `--inp_c` | `var(--body_c)` | Text color |
| `--inp_bg` | `var(--body_bg)` | Background |
| `--inp_b-c` | `var(--b-c)` | Border color |
| `--inp_b-c_focus` | `var(--link_c)` | Focus border color |
| `--inp_b-c_h` | auto | Hover border color |
| `--inp_b-c_invalid` | `var(--c_danger_500)` | Invalid border color |
| `--inp_p-b` | `var(--size_200)` | Padding block |
| `--inp_p-i` | `var(--size_300)` | Padding inline |
| `--inp_b-r` | `var(--b-r)` | Border radius |
| `--inp_f-s` | `var(--f-s_base)` | Font size |

## Generated classes

- Base: `.c--input`
- Size: `.is--sm`, `.is--lg`
