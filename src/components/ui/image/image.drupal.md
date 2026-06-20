# Image — Drupal

## Installation

```bash
npx joui add image --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:image' with {
  image_src: '/sites/default/files/photo.jpg',
  image_alt: 'A landscape photo',
} %}
```

## Thumbnail

```twig
{% include 'mytheme:image' with {
  image_src: file.uri|image_style('thumbnail'),
  image_alt: file.field_media_image.alt,
  image_thumbnail: true,
} %}
```

## Rounded circle (avatar)

```twig
{% include 'mytheme:image' with {
  image_src: user.field_avatar.entity.uri.value|image_style('medium'),
  image_alt: user.name.value,
  image_rounded: 'circle',
  image_width: 80,
  image_height: 80,
} %}
```

## With image style

```twig
{% set src = file_url(node.field_image.entity.field_media_image.entity.uri.value) %}
{% include 'mytheme:image' with {
  image_src: src,
  image_alt: node.field_image.entity.field_media_image.alt,
  image_loading: 'lazy',
} %}
```

## Notes

- `image_alt` is required for accessibility.
- Provide `image_width` and `image_height` to prevent Cumulative Layout Shift (CLS).
- `image_att` accepts a Drupal `Attribute` object.
- `image_uc` is an array of extra utility classes.
- No JavaScript required.
