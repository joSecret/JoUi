# Figure — Drupal

## Installation

```bash
npx joui add figure --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:figure' with {
  figure_src: '/img/photo.jpg',
  figure_alt: 'A landscape photo',
  figure_caption: 'Photo caption here',
} %}
```

## Caption alignment

```twig
{% include 'mytheme:figure' with {
  figure_src: '/img/photo.jpg',
  figure_alt: 'Photo',
  figure_caption: 'Centered caption',
  figure_caption_align: 'center',
} %}
```

## Rounded corners

```twig
{% include 'mytheme:figure' with {
  figure_src: '/img/photo.jpg',
  figure_alt: 'Photo',
  figure_rounded: true,
} %}
```

## With Drupal file entity

```twig
{% include 'mytheme:figure' with {
  figure_src: file.uri|image_style('large'),
  figure_alt: file.field_media_image.alt,
  figure_caption: file.field_caption.value,
} %}
```

## Notes

- `figure_alt` is required for accessibility — always provide meaningful alt text.
- `figure_rounded` accepts `true` (rounded corners) or `'circle'` (circular crop).
- `figure_caption_align` accepts `'start'`, `'center'`, or `'end'`.
- `figure_att` accepts a Drupal `Attribute` object for extra HTML attributes on the `<figure>`.
- `figure_uc` is an array of extra utility classes.
- No JavaScript required.
