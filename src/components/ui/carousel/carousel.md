# Carousel — API Reference

Image slideshow with previous/next controls, dot indicators, optional auto-play, keyboard navigation, and touch swipe support. Requires `carousel.js`.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | auto-generated | Unique carousel ID |
| `items` | `CarouselItem[]` | `[]` | Slide items |
| `interval` | `number` | `0` | Auto-play interval in ms (0 = disabled) |
| `controls` | `boolean` | `true` | Show prev/next controls |
| `indicators` | `boolean` | `true` | Show dot indicators |
| `classes` | `string[]` | `[]` | Extra CSS classes |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes |

### CarouselItem

| Field | Type | Description |
|-------|------|-------------|
| `src` | `string` | Image source URL |
| `alt` | `string` | Image alt text |
| `caption` | `{ title?, text? }` | Optional caption overlay |

Slot: custom `.carousel-item` elements added after the `items` array.

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `carousel_id` | `string\|null` | `null` | Carousel ID |
| `carousel_items` | `array` | `[]` | Slides array |
| `carousel_interval` | `int` | `0` | Auto-play interval ms |
| `carousel_controls` | `boolean` | `true` | Show controls |
| `carousel_indicators` | `boolean` | `true` | Show indicators |
| `carousel_uc` | `string[]` | `[]` | Extra utility classes |
| `carousel_att` | `Attribute` | — | Drupal Attribute object |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--crsl_bg` | `var(--c_dark)` | Background color |
| `--crsl_ctrl-c` | `var(--c_white)` | Control icon color |
| `--crsl_ctrl-s` | `2.5rem` | Control icon size |
| `--crsl_ind-s` | `8px` | Indicator dot size |
| `--crsl_ind-c` | `rgba(255,255,255,0.5)` | Indicator color |
| `--crsl_ind-c-a` | `var(--c_white)` | Active indicator color |
| `--crsl_t` | `0.5s ease-in-out` | Slide transition |
| `--crsl_b-r` | `0px` | Carousel border radius |

## JavaScript (carousel.js)

| Data attribute | Description |
|---------------|-------------|
| `data-carousel` | Initializes carousel behavior |
| `data-carousel-interval` | Auto-play interval in ms |
| `data-carousel-prev` | Previous slide control |
| `data-carousel-next` | Next slide control |
| `data-carousel-goto="N"` | Go to slide N (0-indexed) |

Features: slide animation, auto-play, pause-on-hover, keyboard arrows, touch swipe.

## Accessibility

- Controls have `aria-label="Previous"` / `aria-label="Next"`.
- Indicators have `aria-label="Slide N"`.
- Keyboard: ArrowLeft/ArrowRight navigate slides.
- Auto-play pauses on hover/focus.
