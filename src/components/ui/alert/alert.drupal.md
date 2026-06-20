# Alert — Drupal

## Installation

```bash
npx joui add alert --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:alert' with {
  alert_color: 'primary',
  alert_content: 'This is a primary alert.',
} %}
```

## Dismissible

```twig
{% include 'mytheme:alert' with {
  alert_color: 'warning',
  alert_dismissible: true,
  alert_content: 'This alert can be dismissed.',
} %}
```

Attach `alert.js` to enable the dismiss behavior:

```php
$attachments['#attached']['library'][] = 'mytheme/joui-alert';
```

```yaml
# mytheme.libraries.yml
joui-alert:
  js:
    components/ui/alert/alert.js: {}
  dependencies:
    - core/drupal
```

## Slot / block override

```twig
{% embed 'mytheme:alert' with { alert_color: 'success' } %}
  {% block alert_content %}
    <strong>Well done!</strong> You successfully read this important message.
  {% endblock %}
{% endembed %}
```

## Notes

- `alert_content` is rendered raw — sanitize upstream.
- `alert_att` accepts a Drupal `Attribute` object for extra HTML attributes on the wrapper.
- `alert_uc` is an array of extra utility classes.
- The dismiss JS behavior guards against double-binding with `data-alert-initialized`.
