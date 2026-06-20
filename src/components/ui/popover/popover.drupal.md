# Popover — Drupal

## Installation

```bash
npx joui add popover --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:popover' with {
  popover_trigger: '<button type="button" class="button button-primary">Click me</button>',
  popover_title: 'Popover title',
  popover_body: '<p>Popover body content.</p>',
} %}
```

## Placement

```twig
{% include 'mytheme:popover' with {
  popover_placement: 'top',
  popover_trigger: '<button class="button button-secondary">Hover</button>',
  popover_body: 'Top-positioned popover.',
} %}
```

## Attach JavaScript (optional)

```php
$attachments['#attached']['library'][] = 'mytheme/joui-popover';
```

```yaml
joui-popover:
  js:
    components/ui/popover/popover.js: {}
  dependencies:
    - core/drupal
```

## Notes

- `popover_trigger` and `popover_body` are rendered raw — sanitize upstream.
- Without JS, the popover closes by clicking the trigger again (native details behavior).
- With JS, clicking outside or pressing Escape also closes it.
