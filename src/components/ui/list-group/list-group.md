# List Group — API Reference

Flexible list of bordered items with active, disabled, color variant, action (link/button), flush, and horizontal layout support. No JavaScript required.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `ListGroupItem[]` | `[]` | Array of items |
| `flush` | `boolean` | `false` | Remove outer border/radius |
| `horizontal` | `boolean` | `false` | Horizontal layout |
| `tag` | `'ul' \| 'ol' \| 'div'` | `'ul'` | Wrapper element tag |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes |

### ListGroupItem

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `label` | `string` | — | Display text |
| `href` | `string` | — | Link URL (renders as `<a>` with action styles) |
| `active` | `boolean` | `false` | Active/selected state |
| `disabled` | `boolean` | `false` | Disabled state |
| `color` | `string` | — | Color variant: `primary`, `success`, `warning`, `danger`, `info`, `secondary` |

Slot: custom items appended after the `items` array.

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `list_group_items` | `array` | `[]` | Items array |
| `list_group_flush` | `boolean` | `false` | Flush variant |
| `list_group_horizontal` | `boolean` | `false` | Horizontal layout |
| `list_group_tag` | `string` | `'ul'` | Wrapper tag |
| `list_group_uc` | `string[]` | `[]` | Extra utility classes |
| `list_group_att` | `Attribute` | — | Drupal Attribute object |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--lg_bg` | `var(--body_bg)` | Item background |
| `--lg_c` | `var(--body_c)` | Item text color |
| `--lg_b-c` | `var(--b-c)` | Border color |
| `--lg_b-r` | `var(--b-r)` | Border radius |
| `--lg_p-b` | `var(--size_300)` | Item padding block |
| `--lg_p-i` | `var(--size_400)` | Item padding inline |
| `--lg_active_bg` | `var(--c_primary_500)` | Active background |
| `--lg_active_c` | `var(--c_white)` | Active text color |

## Accessibility

- Active items have `aria-current="true"`.
- Disabled items have `aria-disabled="true"`.
- Link/button items get focus/hover styles and are keyboard navigable.
- Use `tag="div"` for non-list semantics (e.g., tab panels).
