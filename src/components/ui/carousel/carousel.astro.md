# Carousel — Astro

## Installation

```bash
npx joui add carousel --platform astro
```

## Import

```astro
import Carousel from '@ui/carousel/Carousel.astro'
```

Attach JS:

```astro
<script src="/components/ui/carousel/carousel.js"></script>
```

## Usage

```astro
<Carousel
  items={[
    { src: '/img/slide1.jpg', alt: 'First slide' },
    { src: '/img/slide2.jpg', alt: 'Second slide' },
    { src: '/img/slide3.jpg', alt: 'Third slide' },
  ]}
/>
```

## With captions

```astro
<Carousel
  items={[
    {
      src: '/img/slide1.jpg',
      alt: 'Slide 1',
      caption: { title: 'First Slide', text: 'Caption text here.' },
    },
    { src: '/img/slide2.jpg', alt: 'Slide 2' },
  ]}
/>
```

## Auto-play

```astro
<Carousel
  interval={3000}
  items={[...]}
/>
```

## Without controls or indicators

```astro
<Carousel controls={false} indicators={false} items={[...]} />
```

## Custom slides via slot

```astro
<Carousel>
  <div class="carousel-item active">
    <img src="/hero.jpg" alt="Hero" class="carousel-img">
    <div class="carousel-caption">
      <h5>Custom slide</h5>
    </div>
  </div>
  <div class="carousel-item">
    <video class="carousel-img" autoplay muted loop>...</video>
  </div>
</Carousel>
```
