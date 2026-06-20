# Toast — Drupal

## Installation

```bash
npx joui add toast --platform drupal
```

## Include via SDC

```twig
<div class="toast-container toast-container-top-end">
  {% include 'mytheme:toast' with {
    toast_title: 'Success',
    toast_message: 'Your changes were saved.',
    toast_color: 'success',
    toast_delay: 4000,
  } %}
</div>
```

## Attach JavaScript

```php
$attachments['#attached']['library'][] = 'mytheme/joui-toast';
```

```yaml
joui-toast:
  js:
    components/ui/toast/toast.js: {}
  dependencies:
    - core/drupal
```

## No auto-dismiss

```twig
{% include 'mytheme:toast' with {
  toast_title: 'Notice',
  toast_message: 'This stays until dismissed.',
  toast_delay: 0,
} %}
```

## Programmatic (from JS)

```js
joui.toast.show({
  title: 'Saved',
  message: 'The node was updated.',
  color: 'success',
  delay: 3000,
  position: 'bottom-end',
});
```

## Notes

- `toast_message` is rendered raw — sanitize upstream.
- Toasts need a `.toast-container-{position}` wrapper for positioning.
- `toast_delay: 0` disables auto-dismiss.
