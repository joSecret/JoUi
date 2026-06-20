# Breadcrumb — API Reference

Navigation aid showing the current page location within a site hierarchy. No JavaScript required.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | `[]` | Array of breadcrumb items |
| `separator` | `string\|undefined` | `undefined` | Custom separator character (defaults to `/` via CSS) |
| `classes` | `string[]` | `[]` | Extra CSS classes on the `<ol>` |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on the `<ol>` |

### BreadcrumbItem

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `label` | `string` | — | Display text |
| `url` | `string\|undefined` | `undefined` | Link URL (omit for active/current item) |
| `active` | `boolean` | `false` | Marks this as the current page |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `breadcrumb_items` | `array` | `[]` | Array of `{ label, url, active }` objects |
| `breadcrumb_separator` | `string\|null` | `null` | Custom separator character |
| `breadcrumb_uc` | `string[]` | `[]` | Extra utility classes |
| `breadcrumb_att` | `Attribute` | — | Drupal Attribute object for the `<ol>` |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--bcrumb_sep` | `'/'` | Separator content (CSS `content` value) |
| `--bcrumb_c` | `var(--body_c)` | Item text color |
| `--bcrumb_sep-c` | `var(--b-c)` | Separator color |
| `--bcrumb_d` | `flex` | Display value of the `<ol>` |
| `--bcrumb_f-s` | `1rem` | Font size |
| `--bcrumb_g` | `0.5em` | Gap between items and separator |
| `--bcrumb-link_c` | `var(--link_c)` | Link color |
| `--bcrumb-link_c_h` | `var(--link_c_h)` | Link hover color |
| `--bcrumb-active_c` | `var(--body_c)` | Active item text color |
| `--bcrumb-active_o` | `0.65` | Active item opacity |

## Accessibility

- Wrapped in `<nav aria-label="breadcrumb">` for landmark navigation.
- Active/current item has `aria-current="page"` and `class="active"`.
- Separator is rendered via CSS `::after` — invisible to screen readers.
- No JavaScript required.
