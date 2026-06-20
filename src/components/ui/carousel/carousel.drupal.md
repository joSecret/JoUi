# Carousel — Drupal

## Installation

```bash
npx joui add carousel --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:carousel' with {
  carousel_id: 'main-slider',
  carousel_items: [
    { src: '/sites/default/files/slide1.jpg', alt: 'First slide' },
    { src: '/sites/default/files/slide2.jpg', alt: 'Second slide' },
    { src: '/sites/default/files/slide3.jpg', alt: 'Third slide' },
  ],
} %}
```

## Attach JavaScript

```php
$attachments['#attached']['library'][] = 'mytheme/joui-carousel';
```

```yaml
joui-carousel:
  js:
    components/ui/carousel/carousel.js: {}
  dependencies:
    - core/drupal
```

## With captions

```twig
{% include 'mytheme:carousel' with {
  carousel_items: [
    {
      src: '/path/to/image.jpg',
      alt: 'Slide',
      caption: { title: 'Slide Title', text: 'Slide description.' },
    },
  ],
} %}
```

## Auto-play

```twig
{% include 'mytheme:carousel' with {
  carousel_interval: 4000,
  carousel_items: [...],
} %}
```

## Notes

- `carousel_controls` and `carousel_indicators` both default to `true`.
- `carousel_interval: 0` disables auto-play.
- Keyboard ArrowLeft/ArrowRight and touch swipe are supported automatically.
