# Table

CSS-styled table component. Overrides Drupal's `table.html.twig`. No sorting or filtering — layout and visual styling only.

## Features

- Striped, bordered, hover variants
- Caption, thead, tbody, tfoot support
- Responsive horizontal-scroll wrapper
- Full Drupal `table.html.twig` variable compatibility

## Props

| Name | Type | Default | Description |
|---|---|---|---|
| `caption` | `string \| null` | `null` | Table caption |
| `striped` | `boolean` | `false` | Alternating row colors |
| `bordered` | `boolean` | `false` | Borders on all cells |
| `hover` | `boolean` | `false` | Row highlight on hover |
| `responsive` | `boolean` | `false` | Wrap in scroll container |
| `classes` | `string[]` | `[]` | Additional CSS classes |
| `attrs` | `object` | `{}` | Additional HTML attributes |

## Slots

| Name | Description |
|---|---|
| `default` | `thead`, `tbody`, `tfoot` elements |

## Generated CSS classes

- Base: `.c--table`
- Variants: `.table--striped`, `.table--bordered`, `.table--hover`
- Wrapper: `.table--responsive`

## CSS variables

| Variable | Default | Description |
|---|---|---|
| `--tbl_b-c` | `var(--c_gray_200)` | Border color |
| `--tbl_b-w` | `var(--b-w)` | Border width |
| `--tbl_b-r` | `var(--b-r_md)` | Border radius (bordered variant) |
| `--tbl-head_bg` | `var(--c_light)` | Header background |
| `--tbl-head_c` | `var(--body_c)` | Header text color |
| `--tbl-head_f-w` | `var(--f-w_semi-bold)` | Header font weight |
| `--tbl-cell_p-b` | `var(--size_200)` | Cell padding block |
| `--tbl-cell_p-i` | `var(--size_300)` | Cell padding inline |
| `--tbl-row_bg` | `transparent` | Default row background |
| `--tbl-row_bg_stripe` | primary tint 90% | Stripe row background |
| `--tbl-row_bg_h` | primary tint 90% | Hover row background |
| `--tbl-caption_c` | `var(--c_muted)` | Caption color |
| `--tbl-caption_f-s` | `var(--f-s_sm)` | Caption font size |

## Accessibility

- `<caption>` is the recommended way to label a table — use it when the table purpose isn't obvious from surrounding text.
- Avoid using `colspan`/`rowspan` without proper `scope` attributes on `<th>`.

## Dependencies

None.
