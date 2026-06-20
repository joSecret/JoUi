# Spinner — API Reference

Animated loading indicator with border or grow style. No JavaScript required.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'border' \| 'grow'` | `'border'` | Animation style |
| `color` | `string` | — | Color variant: `primary` `secondary` `success` `warning` `danger` `info` `light` `dark` |
| `size` | `'sm'` | — | Small size |
| `label` | `string` | `'Loading...'` | Visually hidden accessible label |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `spinner_type` | `string` | `'border'` | Animation style: `border` or `grow` |
| `spinner_color` | `string\|null` | `null` | Color variant |
| `spinner_size` | `string\|null` | `null` | Size: `sm` |
| `spinner_label` | `string` | `'Loading...'` | Visually hidden label |
| `spinner_uc` | `string[]` | `[]` | Extra utility classes |
| `spinner_att` | `Attribute` | — | Drupal Attribute object |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--spin_c` | `currentColor` | Spinner color |
| `--spin_s` | `var(--size_500)` | Spinner size (width + height) |
| `--spin_b-w` | `var(--b-w_lg)` | Border width (border type) |
| `--spin_t-d` | `0.75s` | Animation duration |
| `--spin_sm_s` | `1rem` | Size when using `spinner-sm` |
| `--spin_sm_b-w` | `var(--b-w)` | Border width when using `spinner-sm` |

## Accessibility

- The spinner has `role="status"` to announce its presence to screen readers.
- A `<span class="visually-hidden">` provides a textual label (default: "Loading...").
- The spinner itself has no visible text; all accessible information is in the hidden span.
