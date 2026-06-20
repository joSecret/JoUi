# Image — API Reference

Responsive image component with optional thumbnail styling and rounded corner variants. No JavaScript required.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | — | Image source URL (required) |
| `alt` | `string` | — | Alternative text (required) |
| `fluid` | `boolean` | `true` | Adds `max-width: 100%; height: auto` |
| `thumbnail` | `boolean` | `false` | Adds thumbnail border and padding |
| `rounded` | `boolean \| 'circle' \| 'pill' \| 'sm' \| 'lg' \| '0'` | `false` | Rounded corners variant |
| `width` | `number` | — | Native `width` attribute |
| `height` | `number` | — | Native `height` attribute |
| `loading` | `'lazy' \| 'eager'` | `'lazy'` | Native `loading` attribute |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image_src` | `string` | — | Source URL |
| `image_alt` | `string` | `''` | Alt text |
| `image_fluid` | `boolean` | `true` | Fluid (responsive) |
| `image_thumbnail` | `boolean` | `false` | Thumbnail border |
| `image_rounded` | `string\|boolean` | `false` | Rounded variant |
| `image_width` | `int\|null` | `null` | Width attribute |
| `image_height` | `int\|null` | `null` | Height attribute |
| `image_loading` | `string` | `'lazy'` | Loading attribute |
| `image_uc` | `string[]` | `[]` | Extra utility classes |
| `image_att` | `Attribute` | — | Drupal Attribute object |

## CSS Classes

| Class | Description |
|-------|-------------|
| `img-fluid` | `max-width: 100%; height: auto` |
| `img-thumbnail` | Border + padding thumbnail frame |
| `rounded` | Default border radius |
| `rounded-sm` | Small border radius |
| `rounded-lg` | Large border radius |
| `rounded-circle` | 50% border radius (circle crop) |
| `rounded-pill` | 9999px border radius |
| `rounded-0` | No border radius |

## CSS Custom Properties (thumbnail)

| Property | Default | Description |
|----------|---------|-------------|
| `--img_padding` | `var(--size_100)` | Thumbnail padding |
| `--img_thumbnail_bg` | `var(--body_bg)` | Thumbnail background |
| `--img_thumbnail_b-c` | `var(--b-c)` | Thumbnail border color |
| `--img_thumbnail_b-w` | `var(--b-w)` | Thumbnail border width |
| `--img_thumbnail_b-r` | `var(--b-r)` | Thumbnail border radius |

## Accessibility

- Always provide meaningful `alt` text.
- For decorative images, use `alt=""`.
- Provide `width` and `height` to prevent layout shift (CLS).
