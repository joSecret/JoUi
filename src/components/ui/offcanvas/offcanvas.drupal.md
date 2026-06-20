# Offcanvas — Drupal

## Installation

```bash
npx joui add offcanvas --platform drupal
```

## Include via SDC

```twig
<button type="button" data-offcanvas-target="sidebar">Open sidebar</button>

{% include 'mytheme:offcanvas' with {
  offcanvas_id: 'sidebar',
  offcanvas_title: 'Sidebar',
  offcanvas_content: '<p>Sidebar navigation content.</p>',
} %}
```

## Attach JavaScript

```php
$attachments['#attached']['library'][] = 'mytheme/joui-offcanvas';
```

```yaml
joui-offcanvas:
  js:
    components/ui/offcanvas/offcanvas.js: {}
  dependencies:
    - core/drupal
```

## Placements

```twig
{% include 'mytheme:offcanvas' with {
  offcanvas_id: 'ofc-end',
  offcanvas_placement: 'end',
  offcanvas_title: 'Right panel',
  offcanvas_content: 'Content',
} %}
```

## Notes

- `offcanvas_id` is required and must match `data-offcanvas-target` on the trigger.
- Backdrop click and Escape key close the panel.
- Focus returns to the trigger on close.
