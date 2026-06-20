# Popover — API Reference

Click-triggered popover built on the native `<details>`/`<summary>` pattern for CSS-first behavior. Optional `popover.js` adds close-on-outside-click and Escape key behavior.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Popover header title |
| `placement` | `'top' \| 'bottom' \| 'start' \| 'end'` | `'bottom'` | Position relative to trigger |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on `<details>` |

Slots:
- `trigger` — content inside the `<summary>` (rendered as the click trigger)
- default — popover body content

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `popover_title` | `string\|null` | `null` | Header title |
| `popover_body` | `string` | — | Body HTML content |
| `popover_trigger` | `string` | — | Trigger element HTML (inside summary) |
| `popover_placement` | `string` | `'bottom'` | Placement |
| `popover_uc` | `string[]` | `[]` | Extra utility classes |
| `popover_att` | `Attribute` | — | Drupal Attribute object on `<details>` |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--pop_bg` | `var(--body_bg)` | Popover background |
| `--pop_c` | `var(--body_c)` | Text color |
| `--pop_b-c` | `var(--b-c)` | Border color |
| `--pop_b-r` | `var(--b-r)` | Border radius |
| `--pop_max-w` | `18rem` | Max width |
| `--pop_z` | `1010` | Z-index |
| `--pop_offset` | `var(--size_200)` | Gap from trigger |
| `--pop_arrow-s` | `8px` | Arrow size |

## How it works

Uses `<details>` (open/closed native toggle) + `<summary>` (click target). The `popover.js` script adds:
- Close when clicking outside the popover
- Close on Escape key press

## Accessibility

- Native `<details>`/`<summary>` provides keyboard-accessible toggle (Enter/Space on summary).
- The popover content is in the DOM when open — not hidden from screen readers.
- For complex interactive content (forms, etc.), consider additional ARIA attributes.
