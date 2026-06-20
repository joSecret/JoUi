# Button Group — API Reference

Groups multiple buttons into a visually connected horizontal or vertical row. Removes inner border radii and collapses overlapping borders. No JavaScript required.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `vertical` | `boolean` | `false` | Stack buttons vertically |
| `size` | `'sm' \| 'lg'` | — | Size variant for all buttons |
| `label` | `string` | `'Button group'` | `aria-label` for the group |
| `classes` | `string[]` | `[]` | Extra CSS classes on the wrapper |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on the wrapper |

Slot: button elements to render inside the group.

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `button_group_vertical` | `boolean` | `false` | Vertical layout |
| `button_group_size` | `string\|null` | `null` | Size variant: `sm`, `lg` |
| `button_group_label` | `string` | `'Button group'` | aria-label |
| `button_group_content` | `string` | — | Button HTML content |
| `button_group_uc` | `string[]` | `[]` | Extra utility classes |
| `button_group_att` | `Attribute` | — | Drupal Attribute object |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--btng_b-r` | `var(--b-r)` | Corner radius of the group |

## Variants

| Class | Description |
|-------|-------------|
| `button-group-vertical` | Stack buttons vertically |
| `button-group-sm` | Apply small size to all buttons |
| `button-group-lg` | Apply large size to all buttons |

## Accessibility

- Wrap with `role="group"` and `aria-label` to describe the group's purpose.
- For radio-style toggle buttons (one active at a time), use `role="radiogroup"` instead.
- Each button inside retains its own accessible name.
