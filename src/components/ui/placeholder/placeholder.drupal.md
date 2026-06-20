# Placeholder — Drupal

## Installation

```bash
npx joui add placeholder --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:placeholder' with {
  placeholder_lines: [
    { cols: 7 },
    { cols: 4 },
    { cols: 12 },
  ],
} %}
```

## Wave animation

```twig
{% include 'mytheme:placeholder' with {
  placeholder_animation: 'wave',
  placeholder_lines: [
    { cols: 8 },
    { cols: 6 },
  ],
} %}
```

## Different sizes

```twig
{% include 'mytheme:placeholder' with {
  placeholder_lines: [
    { cols: 6, size: 'lg' },
    { cols: 9 },
    { cols: 4, size: 'sm' },
  ],
} %}
```

## Notes

- `placeholder_animation` accepts `'glow'`, `'wave'`, or `'none'`.
- `cols` in `placeholder_lines` should be between 1 and 12 (Bootstrap column widths).
- `size` in each line is optional: `'xs'`, `'sm'`, or `'lg'`.
- No JavaScript required.
- `placeholder_att` accepts a Drupal `Attribute` object.
- `placeholder_uc` is an array of extra utility classes.
