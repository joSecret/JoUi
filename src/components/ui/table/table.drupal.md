# Table — Drupal

## Install

```bash
npx joui add table --platform drupal
```

Copy files to `web/themes/custom/{THEME}/components/table/`.

## Override table.html.twig

Place `table.html.twig` in your theme's `templates/` folder:

```twig
{# web/themes/custom/{THEME}/templates/table.html.twig #}
{% include 'joui:table' %}
```

All Drupal core variables (`header`, `rows`, `footer`, `caption`, etc.) are picked up automatically.

## Use as SDC component

```twig
{% include 'joui:table' with {
  tbl_caption: 'Active users',
  tbl_striped: true,
  tbl_hover: true,
  tbl_header: header,
  tbl_rows: rows,
} %}
```

## Props mapping

| Drupal core var | joui SDC prop |
|---|---|
| `caption` | `tbl_caption` |
| `header` | `tbl_header` |
| `rows` | `tbl_rows` |
| `footer` | `tbl_footer` |
| `colgroups` | `tbl_colgroups` |
| `empty` | `tbl_empty` |
| `header_columns` | `tbl_header_columns` |
| — | `tbl_striped` |
| — | `tbl_bordered` |
| — | `tbl_hover` |
| — | `tbl_responsive` |
| — | `tbl_uc` |
| `attributes` | `tbl_att` |

## Examples

### Striped + hover

```twig
{% include 'joui:table' with {
  tbl_striped: true,
  tbl_hover: true,
  tbl_header: header,
  tbl_rows: rows,
} %}
```

### Responsive with caption

```twig
{% include 'joui:table' with {
  tbl_caption: 'Monthly report',
  tbl_responsive: true,
  tbl_header: header,
  tbl_rows: rows,
} %}
```

### All-bordered

```twig
{% include 'joui:table' with {
  tbl_bordered: true,
  tbl_header: header,
  tbl_rows: rows,
} %}
```

## SDC notes

- Component id: `{THEME}:table`.
- `table.css` is auto-loaded by SDC — no `libraries.yml` needed.
- Drupal's sticky header JS (`once`, `Drupal.tableHeader`) relies on `.sticky-enabled` class — if you use sticky headers, add it via `tbl_uc`.
