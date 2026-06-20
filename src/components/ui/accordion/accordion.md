# Accordion — API Reference

Collapsible panels built on native `<details>`/`<summary>`. No JavaScript required.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `flush` | `boolean` | `false` | Remove outer border and radius; show only dividers between items |
| `stayOpen` | `boolean` | `false` | Allow multiple panels open simultaneously |
| `iconPosition` | `'left'\|'right'\|'none'` | `'right'` | Position of the chevron icon |
| `items` | `AccordionItem[]` | `[]` | Array of items (alternative to slot) |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes |

### AccordionItem

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `id` | `string` | — | Optional element ID |
| `title` | `string` | — | Trigger label |
| `content` | `string` | — | Panel HTML content |
| `open` | `boolean` | `false` | Open on load |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accordion_id` | `string\|int` | — | Unique ID; used as `name` for exclusive-open behavior |
| `flush` | `boolean` | `false` | Remove outer border and radius |
| `stay_open` | `boolean` | `false` | Allow multiple panels open simultaneously |
| `open_item_id` | `int` | `1` | 1-based index of the panel open by default; `0` for none |
| `icon_position` | `'none'\|'left'\|'right'` | `'right'` | Position of the chevron icon |
| `items` | `array` | `[]` | Array of `{ title, content }` objects |
| `accordion_uc` | `string[]` | `[]` | Extra utility classes on the wrapper |
| `accordion_item_uc` | `string[]` | `[]` | Extra utility classes on each item |
| `accordion_att` | `Attribute` | — | Drupal Attribute object for the wrapper |
| `accordion_item_att` | `Attribute` | — | Drupal Attribute object for each item |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--acc_bg` | `transparent` | Accordion background |
| `--acc_b-r` | `var(--b-r)` | Border radius |
| `--acc_t-t` | `0.3s` | Transition duration |
| `--acc_b-w` | `var(--b-w)` | Border width |
| `--acc_b-c` | `var(--b-c)` | Border color |
| `--acc_icon_s` | `16px` | Icon size |
| `--acc_summary_c` | `var(--link_c)` | Summary text color |
| `--acc_summary_c_h` | `var(--link_c_h)` | Summary color on hover |
| `--acc_summary_c_a` | `var(--link_c_a)` | Summary color when open |
| `--acc_summary_p-b` | `12px` | Summary padding block |
| `--acc_summary_p-i` | `20px` | Summary padding inline |
| `--acc_summary_bg` | `hsl(from var(--c_primary) h s calc(l + 30))` | Summary background when open |
| `--acc_marker_deg` | `0deg` | Icon rotation (auto-set to `180deg` when open) |
| `--acc_marker_m-i-s` | `8px` | Margin between icon and text |
| `--acc_body_p-b` | `12px` | Body padding block |
| `--acc_body_p-i` | `20px` | Body padding inline |

## Variants

- **default** — Outer border + radius; dividers between items
- **flush** — No outer border or radius; dividers only

## Slot vs. items array

Pass `items` for a data-driven list. For custom markup, omit `items` and use the slot:

```astro
<Accordion>
  <details class="accordion-item">
    <summary>
      <span>Title</span>
      <div class="accordion-icon"><!-- SVG --></div>
    </summary>
    <div class="accordion-body">
      <p>Any content here.</p>
    </div>
  </details>
</Accordion>
```

## Accessibility

- Uses native `<details>`/`<summary>` — keyboard and screen reader support built in.
- Chevron icon has `aria-hidden="true"`.
- No ARIA roles needed; browser handles `aria-expanded` automatically on `<summary>`.
