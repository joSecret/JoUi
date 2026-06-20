# Button — Drupal

## Install

```bash
npx joui add button --platform drupal
```

Copy the files to `web/themes/custom/{THEME}/components/button/`.

## Include

```twig
{% include 'joui:button' with { button_label: 'Click me' } %}
```

SDC auto-loads `button.css` and `button.js` from the folder. No `libraries.yml` entry is required.

## Props mapping

All props are prefixed with `button_` (see `button.component.yml`):

| Reference prop | Drupal prop |
|---|---|
| `tag` | `button_tag` |
| `color` | `button_color` |
| `variant` (Astro) | `button_type` (Drupal — style variant) |
| `size` | `button_size` |
| `radius` | `button_radius` |
| `icon` | `button_icon` |
| `iconPosition` | `button_icon_position` |
| `label` | `button_label` |
| `url` | `button_url` |
| `disabled` | `button_disabled` |
| `ariaLabel` | `button_aria_label` |
| `ariaExpanded` | `button_aria_expanded` |
| `id` | `button_id` |
| `classes` | `button_uc` |
| `attrs` | `button_att` |

Drupal uses `button_type` for the style variant (`outline`, `ghost`, `clear`). The namespace prefix prevents collision with HTML `type`.

## Examples

### Basic

```twig
{% include 'joui:button' with {
  button_label: 'Save',
  button_color: 'primary'
} %}
```

### Variant + size

```twig
{% include 'joui:button' with {
  button_label: 'Cancel',
  button_color: 'secondary',
  button_type: 'outline',
  button_size: 'sm'
} %}
```

### Icon-only

```twig
{% include 'joui:button' with {
  button_icon: '<svg aria-hidden="true">...</svg>',
  button_icon_position: 'only',
  button_aria_label: 'Close',
  button_radius: 'pill'
} %}
```

### Expandable (JS included)

`button.js` registers a `Drupal.behaviors.btn` that toggles `aria-expanded` on any `.button[aria-expanded]`:

```twig
{% include 'joui:button' with {
  button_label: 'Menu',
  button_aria_expanded: false,
  button_id: 'menu-trigger'
} %}
```

## SDC notes

- The component id is `{THEME}:button` where `{THEME}` is the theme or module namespace where the folder lives.
- Named slots `slot_icon_before`, `slot_content`, `slot_icon` can be overridden via `{% block name %}...{% endblock %}`.
- `button.js` requires `core/drupal`. Drupal core adds it automatically when the component is used; no manual library attach required.
