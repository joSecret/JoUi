# Alert — API Reference

Contextual feedback messages for user actions. Supports color variants and optional dismiss behavior.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string\|null` | `null` | Color variant: `primary`, `secondary`, `accent`, `success`, `warning`, `danger`, `info`, `light`, `dark` |
| `dismissible` | `boolean` | `false` | Renders a close button that removes the alert on click |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `alert_color` | `string\|null` | `null` | Color variant |
| `alert_dismissible` | `boolean` | `false` | Renders a close button |
| `alert_content` | `string` | `''` | Alert message (rendered raw) |
| `alert_uc` | `string[]` | `[]` | Extra utility classes |
| `alert_att` | `Attribute` | — | Drupal Attribute object for the wrapper |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--alrt_c` | `var(--body_c)` | Text color (public override) |
| `--alrt_bg` | `var(--body_bg)` | Background (public override) |
| `--alrt_b-c` | `var(--b-c)` | Border color (public override) |
| `--alrt_p-b` | `var(--size_300)` | Padding block |
| `--alrt_p-i` | `var(--size_400)` | Padding inline |
| `--alrt_b-r` | `var(--b-r)` | Border radius |
| `--alrt_b-w` | `var(--b-w)` | Border width |
| `--alrt_f-s` | `1rem` | Font size |
| `--alrt_l-h` | `1.5` | Line height |

Per-color override tokens follow the pattern `--alrt-{color}_{c|bg|b-c}`, e.g. `--alrt-primary_bg`.

## Variants

| Class | Description |
|-------|-------------|
| `alert-primary` | Blue-toned primary alert |
| `alert-secondary` | Secondary color alert |
| `alert-accent` | Accent color alert |
| `alert-success` | Green success alert |
| `alert-warning` | Yellow warning alert |
| `alert-danger` | Red danger alert |
| `alert-info` | Info color alert |
| `alert-light` | Light background alert |
| `alert-dark` | Dark background alert |
| `alert-dismissible` | Adds close button; pads end to prevent overlap |

## JavaScript (dismiss)

The dismiss behavior is handled by `alert.js` (Drupal) or an inline `<script>` (Astro). It watches `[data-alert-dismiss]` clicks and removes the closest `.alert`. Guards with `data-alert-initialized` to prevent double-binding.

## Accessibility

- `role="alert"` on the wrapper — screen readers announce content immediately.
- Close button has `aria-label="Close"` and is keyboard-focusable.
- No live region needed; `role="alert"` implies `aria-live="assertive"`.
