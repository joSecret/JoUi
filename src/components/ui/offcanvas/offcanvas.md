# Offcanvas — API Reference

Slide-in side panel with a semi-transparent backdrop. Can open from start, end, top, or bottom. Closes on backdrop click, Escape key, or dismiss button. Requires `offcanvas.js`.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | auto-generated | Unique ID (must match trigger `data-offcanvas-target`) |
| `placement` | `'start' \| 'end' \| 'top' \| 'bottom'` | `'start'` | Slide-in direction |
| `title` | `string` | — | Header title (used when no `header` slot provided) |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes |

Slots: `header` (replaces default title+close), default (body content).

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `offcanvas_id` | `string` | — | Required unique ID |
| `offcanvas_placement` | `string` | `'start'` | Placement |
| `offcanvas_title` | `string\|null` | `null` | Header title |
| `offcanvas_content` | `string` | — | Body HTML content |
| `offcanvas_uc` | `string[]` | `[]` | Extra utility classes |
| `offcanvas_att` | `Attribute` | — | Drupal Attribute object |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ofc_bg` | `var(--body_bg)` | Panel background |
| `--ofc_c` | `var(--body_c)` | Panel text color |
| `--ofc_b-c` | `var(--b-c)` | Panel border color |
| `--ofc_backdrop-bg` | `rgba(0,0,0,0.5)` | Backdrop color |
| `--ofc_z` | `1045` | Z-index |
| `--ofc_w` | `min(320px, 85vw)` | Panel width (start/end) |
| `--ofc_max-h` | `85vh` | Panel max-height (top/bottom) |
| `--ofc_t` | `0.3s ease-in-out` | Slide transition |

## JavaScript (offcanvas.js)

| Data attribute | Description |
|---------------|-------------|
| `data-offcanvas-target="id"` | Opens the offcanvas with matching `id` |
| `data-offcanvas-dismiss` | Closes the containing offcanvas when clicked |
| `data-offcanvas-backdrop` | Closes on backdrop click |

## Accessibility

- Panel is hidden via `visibility: hidden` (not just `opacity: 0`) for accessibility.
- Focus moves into the panel on open; returns to trigger on close.
- Escape key closes the panel.
- Body scroll is locked while panel is open.
