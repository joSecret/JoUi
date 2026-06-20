# Image — Astro

## Installation

```bash
npx joui add image --platform astro
```

## Import

```astro
import Image from '@ui/image/Image.astro'
```

## Usage

```astro
<Image src="/photo.jpg" alt="A landscape photo" />
```

## Examples

### Responsive (default)

```astro
<Image src="/photo.jpg" alt="Photo" />
```

### Thumbnail

```astro
<Image src="/photo.jpg" alt="Photo" thumbnail />
```

### Rounded variants

```astro
<Image src="/photo.jpg" alt="Photo" rounded />
<Image src="/photo.jpg" alt="Photo" rounded="circle" />
<Image src="/photo.jpg" alt="Photo" rounded="pill" />
<Image src="/photo.jpg" alt="Photo" rounded="lg" />
```

### With dimensions (prevents layout shift)

```astro
<Image src="/photo.jpg" alt="Photo" width={800} height={450} />
```

### Eager loading (above the fold)

```astro
<Image src="/hero.jpg" alt="Hero" loading="eager" width={1200} height={600} />
```

### Not fluid

```astro
<Image src="/icon.png" alt="Icon" fluid={false} width={64} height={64} />
```
