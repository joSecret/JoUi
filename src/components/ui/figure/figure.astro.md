# Figure — Astro

## Installation

```bash
npx joui add figure --platform astro
```

## Import

```astro
import Figure from '@ui/figure/Figure.astro'
```

## Usage

### Basic

```astro
<Figure src="/img/photo.jpg" alt="A landscape photo" caption="Photo caption here" />
```

### Caption alignment

```astro
<Figure src="/img/photo.jpg" alt="Photo" caption="Centered caption" captionAlign="center" />
<Figure src="/img/photo.jpg" alt="Photo" caption="Right-aligned" captionAlign="end" />
```

### Rounded corners

```astro
<Figure src="/img/photo.jpg" alt="Photo" rounded />
<Figure src="/img/avatar.jpg" alt="Avatar" rounded="circle" />
```

### No caption

```astro
<Figure src="/img/photo.jpg" alt="Photo" />
```

### Custom content via slot

```astro
<Figure src="/img/photo.jpg" alt="Photo">
  <figcaption class="figure-caption text-end">
    Custom <em>HTML</em> caption
  </figcaption>
</Figure>
```

### Extra classes and attributes

```astro
<Figure
  src="/img/photo.jpg"
  alt="Photo"
  caption="With extra class"
  classes={['my-figure']}
  attrs={{ id: 'hero-image' }}
/>
```
