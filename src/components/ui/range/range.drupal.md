# Range — Drupal

## Installation

```bash
npx joui add range --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:range' with {
  range_id: 'volume',
  range_name: 'volume',
  range_label: 'Volume',
} %}
```

## Custom bounds

```twig
{% include 'mytheme:range' with {
  range_id: 'price',
  range_label: 'Price',
  range_min: 100,
  range_max: 1000,
  range_step: 50,
  range_value: 500,
} %}
```

## Notes

- `range_id` must match the label's `for` attribute — always provide it.
- `range_att` accepts a Drupal `Attribute` object for the input element.
- No JavaScript required.
