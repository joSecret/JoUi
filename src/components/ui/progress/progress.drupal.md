# Progress — Drupal

## Installation

```bash
npx joui add progress --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:progress' with {
  progress_value: 25,
} %}
```

## With label

```twig
{% include 'mytheme:progress' with {
  progress_value: 60,
  progress_label: true,
} %}
```

## Color variants

```twig
{% include 'mytheme:progress' with {
  progress_value: 80,
  progress_color: 'success',
} %}
```

## Striped

```twig
{% include 'mytheme:progress' with {
  progress_value: 50,
  progress_striped: true,
} %}
```

## Animated stripes

```twig
{% include 'mytheme:progress' with {
  progress_value: 75,
  progress_animated: true,
} %}
```

## Custom height

```twig
{% include 'mytheme:progress' with {
  progress_value: 40,
  progress_height: '1.5rem',
} %}
```

## Notes

- Values outside 0–100 are clamped automatically.
- `progress_label: true` renders an automatic percentage label inside the bar.
- `progress_att` accepts a Drupal `Attribute` object for extra HTML attributes on the wrapper.
