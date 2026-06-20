# Figure — API Reference

An image with an optional caption. Supports caption alignment and rounded image corners.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | — | Image source URL (required) |
| `alt` | `string` | — | Alt text (required) |
| `caption` | `string` | — | Caption text below the image |
| `captionAlign` | `'start' \| 'center' \| 'end'` | `'start'` | Caption text alignment |
| `rounded` | `boolean \| 'circle'` | `false` | `true` for `--b-r` radius, `'circle'` for `50%` |
| `classes` | `string[]` | `[]` | Extra CSS classes on the wrapper |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on the `<figure>` |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `figure_src` | `string` | — | Image source URL |
| `figure_alt` | `string` | — | Alt text |
| `figure_caption` | `string \| null` | `null` | Caption text |
| `figure_caption_align` | `'start' \| 'center' \| 'end'` | `'start'` | Caption alignment |
| `figure_rounded` | `boolean \| 'circle'` | `false` | Rounded corners |
| `figure_uc` | `string[]` | `[]` | Extra utility classes |
| `figure_att` | `Attribute` | — | Drupal Attribute object |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.figure` | Root wrapper (`<figure>` element) |
| `.figure-img` | The image (`max-width: 100%; height: auto`) |
| `.figure-caption` | Caption text (smaller, muted color) |
| `.figure-caption-center` | Center-aligns the caption |
| `.figure-caption-end` | End-aligns the caption |
| `.figure-rounded` | Adds `--b-r` radius to the image |
| `.figure-rounded-circle` | Adds `50%` radius to the image |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--fig_d` | `inline-block` | Display mode of the figure wrapper |
| `--fig_m-b` | `var(--size_400)` | Bottom margin of the figure |
| `--fig-img_b-r` | `0px` | Image border radius |
| `--fig-img_m-b` | `var(--size_100)` | Space between image and caption |
| `--fig-caption_f-s` | `0.875em` | Caption font size |
| `--fig-caption_c` | `body_c at 60% opacity` | Caption color |
| `--fig-caption_t-a` | `start` | Caption text alignment |

## Accessibility

- The `alt` prop is required for screen readers — always provide meaningful alt text.
- Captions are rendered as `<figcaption>`, which is semantically associated with the image by the browser.
- Decorative images should use `alt=""`.
