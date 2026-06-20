# Tooltip — API Reference

CSS-only tooltips shown on `:hover` and `:focus-visible`. Uses `data-tooltip` attribute with CSS `::before`/`::after` pseudo-elements. No JavaScript required.

## Astro Props

The `Tooltip` component wraps content in a `<span>` with the tooltip data attributes. You can also apply `data-tooltip` directly on any HTML element without using the component.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | — | Tooltip message (required) |
| `placement` | `'top' \| 'bottom' \| 'start' \| 'end'` | `'top'` | Tooltip position |
| `classes` | `string[]` | `[]` | Extra CSS classes on the wrapper span |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on the wrapper span |

Slot: the element receiving the tooltip.

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tooltip_text` | `string` | — | Tooltip message |
| `tooltip_placement` | `string` | `'top'` | Placement |
| `tooltip_content` | `string` | — | Inner HTML |
| `tooltip_uc` | `string[]` | `[]` | Extra utility classes |
| `tooltip_att` | `Attribute` | — | Drupal Attribute object |

## Direct usage (no component needed)

Add `data-tooltip` to any element:

```html
<button data-tooltip="Tooltip text">Hover me</button>
<button data-tooltip="Bottom tooltip" data-tooltip-placement="bottom">Hover</button>
```

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--tt_c` | `var(--c_white)` | Tooltip text color |
| `--tt_bg` | `var(--c_dark)` | Tooltip background |
| `--tt_b-r` | `var(--b-r_md)` | Tooltip border radius |
| `--tt_f-s` | `0.8125rem` | Tooltip font size |
| `--tt_p-b` | `var(--size_100)` | Padding block |
| `--tt_p-i` | `var(--size_200)` | Padding inline |
| `--tt_max-w` | `18rem` | Maximum tooltip width |
| `--tt_z` | `1000` | Z-index |
| `--tt_offset` | `var(--size_200)` | Distance from element |
| `--tt_arrow-s` | `6px` | Arrow size |

## Placements

| Attribute value | Position |
|----------------|----------|
| `top` (default) | Above the element |
| `bottom` | Below the element |
| `start` | To the left (inline-start) |
| `end` | To the right (inline-end) |

## Accessibility

- Tooltip text is shown via CSS `content: attr(data-tooltip)` — it is NOT in the accessibility tree.
- For important information, also include it in the element's `aria-label` or `aria-describedby`.
- The tooltip shows on `:focus-visible` for keyboard users.
