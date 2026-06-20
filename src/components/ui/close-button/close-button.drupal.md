# Close Button — Drupal

## Installation

```bash
npx joui add close-button --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:close-button' %}
```

## With custom label

```twig
{% include 'mytheme:close-button' with {
  close_button_label: 'Dismiss notification',
} %}
```

## White variant

```twig
{% include 'mytheme:close-button' with {
  close_button_white: true,
} %}
```

## Inside an alert

```twig
<div class="alert alert-warning alert-dismissible" role="alert">
  This is a warning.
  {% include 'mytheme:close-button' with {
    close_button_att: create_attribute({ 'data-alert-dismiss': '' }),
  } %}
</div>
```

## Notes

- The close button does not dismiss anything on its own — the parent component's JS handles it via `data-*-dismiss` attributes.
- `close_button_att` accepts a Drupal `Attribute` object for extra HTML attributes.
- `close_button_uc` is an array of extra utility classes.
- No JavaScript required in the button itself.
