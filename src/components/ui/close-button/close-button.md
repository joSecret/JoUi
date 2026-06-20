# Close Button — API Reference

A generic × dismiss button used inside alerts, modals, toasts, and offcanvas panels. No JavaScript — the parent component handles dismiss logic.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `'Close'` | `aria-label` for screen readers |
| `white` | `boolean` | `false` | White/inverted variant for dark backgrounds |
| `disabled` | `boolean` | `false` | Disabled state |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `close_button_label` | `string` | `'Close'` | aria-label |
| `close_button_white` | `boolean` | `false` | White variant |
| `close_button_disabled` | `boolean` | `false` | Disabled |
| `close_button_uc` | `string[]` | `[]` | Extra utility classes |
| `close_button_att` | `Attribute` | — | Drupal Attribute object |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--cbtn_c` | `var(--body_c)` | Icon color |
| `--cbtn_bg` | `transparent` | Background |
| `--cbtn_size` | `1.5rem` | Button size (width and height) |
| `--cbtn_opacity` | `0.5` | Default opacity |
| `--cbtn_opacity_h` | `0.75` | Hover opacity |
| `--cbtn_opacity_f` | `1` | Focus opacity |
| `--cbtn_b-r` | `var(--b-r_md)` | Border radius |

## Variants

| Class | Description |
|-------|-------------|
| `close-button-white` | Inverted for dark backgrounds |

## Usage context

The close button itself does NOT dismiss anything — it's a presentation-only button. Add a `data-*-dismiss` attribute and let the parent component's JS handle it:

```html
<!-- Inside a modal -->
<button class="close-button" data-modal-dismiss aria-label="Close">...</button>

<!-- Inside an alert -->
<button class="close-button" data-alert-dismiss aria-label="Close">...</button>
```

## Accessibility

- Always provide a meaningful `aria-label` (default: "Close").
- The SVG icon has `aria-hidden="true"` since the button itself has a label.
- Focus state shows an outline for keyboard visibility.
