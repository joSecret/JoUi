# Dropdown — API Reference

Toggleable dropdown menu that opens on button click. Closes on outside click and Escape key. Requires `dropdown.js`.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `'Dropdown'` | Toggle button text |
| `color` | `string` | `'secondary'` | Button color variant |
| `items` | `DropdownItem[]` | `[]` | Menu items |
| `direction` | `'down' \| 'up' \| 'end' \| 'start'` | `'down'` | Menu open direction |
| `classes` | `string[]` | `[]` | Extra CSS classes on the wrapper |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on the wrapper |

### DropdownItem

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `label` | `string` | — | Display text |
| `href` | `string` | — | Link URL (renders `<a>`; omit for `<button>`) |
| `divider` | `boolean` | `false` | Render a horizontal divider rule |
| `disabled` | `boolean` | `false` | Disabled state |

Slot: custom items rendered inside `.dropdown-menu` alongside the `items` array.

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `dropdown_label` | `string` | `'Dropdown'` | Toggle label |
| `dropdown_color` | `string` | `'secondary'` | Button color |
| `dropdown_direction` | `string` | `'down'` | Menu direction |
| `dropdown_items` | `array` | `[]` | Array of item objects |
| `dropdown_uc` | `string[]` | `[]` | Extra utility classes |
| `dropdown_att` | `Attribute` | — | Drupal Attribute object for the wrapper |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--dd_bg` | `var(--body_bg)` | Menu background |
| `--dd_b-c` | `var(--b-c)` | Menu border color |
| `--dd_b-r` | `var(--b-r)` | Menu border radius |
| `--dd_item_c` | `var(--body_c)` | Item text color |
| `--dd_item_c_h` | `var(--c_primary_500)` | Item hover text color |
| `--dd_item_bg_h` | `primary at 10% opacity` | Item hover background |
| `--dd_divider_c` | `var(--b-c)` | Divider color |
| `--dd_z` | `1000` | Z-index |
| `--dd_min-w` | `10rem` | Minimum menu width |
| `--dd_t-t` | `0.2s` | Transition duration |

## JavaScript (dropdown.js)

| Data attribute | Description |
|---------------|-------------|
| `data-dropdown-toggle` | Marks the toggle button |

Behaviors:
- Toggles `is--open` on the parent `.dropdown` on click.
- Closes all other open dropdowns when opening a new one.
- Closes on click outside the dropdown.
- Closes on Escape key.
- Keyboard: ArrowDown/ArrowUp move focus between items; Enter/Space activate focused item.

## Accessibility

- Toggle button has `aria-expanded` and `aria-haspopup="true"`.
- Menu items use `role="menuitem"`.
- Disabled items have `aria-disabled="true"` and `tabindex="-1"`.
- Keyboard navigation follows WAI-ARIA Menu Button pattern.
