# Dropdown — Drupal

## Installation

```bash
npx joui add dropdown --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:dropdown' with {
  dropdown_label: 'Options',
  dropdown_color: 'primary',
  dropdown_items: [
    { label: 'Action', href: '#' },
    { label: 'Another action', href: '#' },
    { divider: true },
    { label: 'Something else', href: '#' },
  ],
} %}
```

## Attach JavaScript

```php
$attachments['#attached']['library'][] = 'mytheme/joui-dropdown';
```

```yaml
# mytheme.libraries.yml
joui-dropdown:
  js:
    components/ui/dropdown/dropdown.js: {}
  dependencies:
    - core/drupal
```

## Disabled items

```twig
{% include 'mytheme:dropdown' with {
  dropdown_items: [
    { label: 'Active', href: '#' },
    { label: 'Disabled', href: '#', disabled: true },
  ],
} %}
```

## Direction variants

```twig
{% include 'mytheme:dropdown' with {
  dropdown_label: 'Drop Up',
  dropdown_direction: 'up',
  dropdown_items: [...],
} %}
```

## Notes

- `dropdown_items` items with `divider: true` render a horizontal rule `<hr>`.
- Items with `href` render as `<a>`, items without render as `<button>`.
- `dropdown_att` accepts a Drupal `Attribute` object.
- `dropdown_uc` is an array of extra utility classes.
- Keyboard: ArrowDown/ArrowUp navigate items; Escape closes menu.
