# Spinner — Drupal

## Installation

```bash
npx joui add spinner --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:spinner' %}
```

## Grow spinner

```twig
{% include 'mytheme:spinner' with {
  spinner_type: 'grow',
} %}
```

## With color

```twig
{% include 'mytheme:spinner' with {
  spinner_color: 'primary',
} %}
```

## Small

```twig
{% include 'mytheme:spinner' with {
  spinner_size: 'sm',
  spinner_color: 'danger',
} %}
```

## Custom label

```twig
{% include 'mytheme:spinner' with {
  spinner_label: 'Please wait...',
} %}
```

## Notes

- The spinner always renders with `role="status"` and a visually hidden label for accessibility.
- `spinner_att` accepts a Drupal `Attribute` object for extra HTML attributes.
- Include `spinner.css` (or the global joui stylesheet) — it also defines `.visually-hidden`.
