# Collapse — API Reference

A collapsible content panel toggled by an external trigger via `data-collapse-target`. Requires `collapse.js` for toggle behavior.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | auto-generated | ID of the collapse element; must match the trigger's `data-collapse-target` |
| `open` | `boolean` | `false` | Open on load |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `collapse_id` | `string\|null` | `null` | ID of the collapse element |
| `collapse_open` | `boolean` | `false` | Open on load |
| `collapse_content` | `string\|null` | `null` | HTML content inside the body |
| `collapse_uc` | `string[]` | `[]` | Extra utility classes on the wrapper |
| `collapse_att` | `Attribute` | — | Drupal Attribute object for the wrapper |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--clps_bg` | `transparent` | Body background |
| `--clps_b-r` | `var(--b-r)` | Body border radius |
| `--clps_t-t` | `0.3s` | Transition duration |
| `--clps_body_p-b` | `var(--size_400)` | Body padding block |
| `--clps_body_p-i` | `var(--size_400)` | Body padding inline |

## HTML Structure

The trigger is rendered separately by the consumer. Use `data-collapse-target` pointing to the collapse element's `id`:

```html
<button type="button" data-collapse-target="my-collapse" aria-expanded="false">
  Toggle
</button>

<div class="collapse" id="my-collapse">
  <div class="collapse-body">
    Content here.
  </div>
</div>
```

Open by default:

```html
<div class="collapse is--open" id="my-collapse">
  <div class="collapse-body">Visible on load.</div>
</div>
```

## JavaScript

`collapse.js` uses the Drupal behavior pattern. It:

1. Scans `[data-collapse-target]` buttons and guards against double-attach
2. On click: toggles `is--open` on the target element and updates `aria-expanded`
3. On attach: syncs `aria-expanded="true"` for triggers pointing at already-open targets

## Accessibility

- `aria-expanded` is managed by `collapse.js` and kept in sync with the open state
- Use `aria-controls="collapse-id"` on the trigger for full ARIA compliance
