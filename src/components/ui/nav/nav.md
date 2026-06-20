# Nav — API Reference

Flexible navigation links with optional tabs and pills variants. Tabs with panels require JS (included as Drupal behavior).

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'tabs'\|'pills'\|undefined` | — | Visual style variant |
| `items` | `NavItem[]` | `[]` | Array of nav items (alternative to slot) |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes |

### NavItem

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `label` | `string` | — | Link/button text |
| `href` | `string` | — | URL (omit for tab buttons) |
| `active` | `boolean` | `false` | Active state |
| `disabled` | `boolean` | `false` | Disabled state |
| `tabTarget` | `string` | — | ID of the target `.tab-pane` (makes item a tab button) |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `nav_variant` | `string\|null` | `null` | `tabs` or `pills` |
| `nav_items` | `array` | `[]` | Array of item objects with `label`, `href`, `active`, `disabled`, `tab_target` |
| `nav_uc` | `string[]` | `[]` | Extra utility classes |
| `nav_att` | `Attribute` | — | Drupal Attribute object for the wrapper |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--nav_g` | `var(--size_100)` | Gap between items |
| `--nav_link_c` | `var(--link_c)` | Link color |
| `--nav_link_c_h` | `var(--link_c_h)` | Link color on hover |
| `--nav_link_c_a` | `var(--link_c_a)` | Link color when active |
| `--nav_link_bg` | `transparent` | Link background |
| `--nav_link_b-r` | `var(--b-r)` | Link border-radius |
| `--nav_link_p-b` | `var(--size_200)` | Link padding-block |
| `--nav_link_p-i` | `var(--size_300)` | Link padding-inline |

## Variants

- **default** — Plain flex row of links
- **tabs** — Underline tabs with active bottom border
- **pills** — Rounded pill-shaped links

## Tab panels

When using `tabs` variant with `tabTarget` items, include `.tab-content` with `.tab-pane` panels outside the nav. The `nav.js` behavior handles activation.

```html
<ul class="nav nav-tabs" role="tablist" data-nav-initialized="false">
  <button class="nav-link active" role="tab" data-tab-target="panel1" aria-selected="true">Tab 1</button>
  <button class="nav-link" role="tab" data-tab-target="panel2" aria-selected="false">Tab 2</button>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="panel1" role="tabpanel">Content 1</div>
  <div class="tab-pane" id="panel2" role="tabpanel">Content 2</div>
</div>
```

## Accessibility

- Active links use `aria-current="page"`.
- Tab buttons use `role="tab"` with `aria-selected`.
- Disabled items use `aria-disabled="true"` and `pointer-events: none`.
