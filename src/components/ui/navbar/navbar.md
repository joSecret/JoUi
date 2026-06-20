# Navbar — API Reference

Responsive navigation bar with brand identity, nav links, and a hamburger toggle for mobile. Requires `navbar.js` for the mobile toggle.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brand` | `string\|null` | `null` | Brand name text |
| `brandUrl` | `string` | `'/'` | Brand link URL |
| `items` | `NavItem[]` | `[]` | Navigation links |
| `classes` | `string[]` | `[]` | Extra CSS classes on `<nav>` |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on `<nav>` |

### NavItem

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `label` | `string` | — | Link text |
| `href` | `string` | — | Link URL |
| `active` | `boolean` | `false` | Active/current page |
| `disabled` | `boolean` | `false` | Disabled state |

### Slots

| Slot | Description |
|------|-------------|
| `brand` | Custom brand content (alongside or replacing `brand` prop) |
| *(default)* | Additional content inside the collapsible area |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `navbar_brand` | `string\|null` | `null` | Brand text |
| `navbar_brand_url` | `string` | `'/'` | Brand URL |
| `navbar_items` | `array` | `[]` | Nav items array |
| `navbar_uc` | `string[]` | `[]` | Extra utility classes |
| `navbar_att` | `Attribute` | — | Drupal Attribute object |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--nbar_bg` | `var(--body_bg)` | Navbar background |
| `--nbar_c` | `var(--body_c)` | Text color |
| `--nbar_b-c` | `var(--b-c)` | Bottom border color |
| `--nbar_p-b` | `var(--size_200)` | Vertical padding |
| `--nbar_p-i` | `var(--size_400)` | Horizontal padding |
| `--nbar_brand_f-s` | `var(--size_400)` | Brand font size |
| `--nbar_brand_f-w` | `var(--f-w_bold)` | Brand font weight |
| `--nbar_collapse_max-h` | `600px` | Mobile menu max-height when open |
| `--nbar_collapse_t` | `0.3s` | Mobile collapse transition |

## JavaScript (navbar.js)

| Data attribute | Description |
|---------------|-------------|
| `data-navbar-toggle` | Marks the hamburger toggle button |

Behavior: toggles `is--open` on `.navbar-collapse` when the toggle is clicked. Updates `aria-expanded` on the toggle button.

The mobile breakpoint is controlled by CSS media query (`max-width: 991px` by default). Override `--nbar_collapse_max-h` for taller menus.

## Accessibility

- `<nav>` landmark element.
- Toggle button has `aria-expanded` attribute updated on click.
- Active link has `aria-current="page"`.
- Disabled links have `aria-disabled="true"`.
