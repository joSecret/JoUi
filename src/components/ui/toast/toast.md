# Toast — API Reference

Lightweight notification popup that auto-dismisses after a configurable delay. Can be rendered server-side or created programmatically via `joui.toast.show()`. Requires `toast.js`.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Header title text |
| `message` | `string` | — | Body message (or use slot) |
| `time` | `string` | — | Time label next to title |
| `color` | `string` | — | Color variant |
| `delay` | `number` | `5000` | Auto-dismiss delay in ms (0 = no auto-dismiss) |
| `show` | `boolean` | `true` | Render in visible state |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes |

Slot: body content (alternative to `message` prop).

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `toast_title` | `string\|null` | `null` | Header title |
| `toast_message` | `string\|null` | `null` | Body message |
| `toast_time` | `string\|null` | `null` | Time label |
| `toast_color` | `string\|null` | `null` | Color variant |
| `toast_delay` | `int` | `5000` | Auto-dismiss delay ms |
| `toast_show` | `boolean` | `true` | Visible state |
| `toast_uc` | `string[]` | `[]` | Extra utility classes |
| `toast_att` | `Attribute` | — | Drupal Attribute object |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--toast_bg` | `var(--body_bg)` | Toast background |
| `--toast_c` | `var(--body_c)` | Text color |
| `--toast_b-c` | `var(--b-c)` | Border color |
| `--toast_b-r` | `var(--b-r)` | Border radius |
| `--toast_max-w` | `350px` | Max width |
| `--toast_z` | `1100` | Z-index |

## Programmatic Usage

```js
// Show a toast programmatically
joui.toast.show({
  title: 'Success',
  message: 'Your changes were saved.',
  color: 'success',
  delay: 4000,
  position: 'top-end', // or: top-start, top-center, bottom-end, etc.
});
```

## Container positions

`.toast-container-top-start`, `.toast-container-top-center`, `.toast-container-top-end`,
`.toast-container-bottom-start`, `.toast-container-bottom-center`, `.toast-container-bottom-end`

## JavaScript

| Data attribute | Description |
|---------------|-------------|
| `data-toast-delay` | Auto-dismiss delay in ms |
| `data-toast-dismiss` | Closes the toast when clicked |
