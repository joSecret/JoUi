# Placeholder — Astro

## Installation

```bash
npx joui add placeholder --platform astro
```

## Import

```astro
import Placeholder from '@ui/placeholder/Placeholder.astro'
```

## Usage

### With lines array

```astro
<Placeholder lines={[{ cols: 7 }, { cols: 4 }, { cols: 12 }]} />
```

### Wave animation

```astro
<Placeholder animation="wave" lines={[{ cols: 8 }, { cols: 6 }]} />
```

### No animation

```astro
<Placeholder animation="none" lines={[{ cols: 12 }]} />
```

### Different sizes

```astro
<Placeholder lines={[
  { cols: 6, size: 'lg' },
  { cols: 9 },
  { cols: 4, size: 'sm' },
  { cols: 7, size: 'xs' },
]} />
```

### Custom content via slot

```astro
<Placeholder animation="glow">
  <span class="placeholder col-8" />
  <span class="placeholder col-4" />
  <span class="placeholder placeholder-lg col-12" />
</Placeholder>
```

### Use on container while loading

```astro
<div aria-busy={isLoading}>
  {isLoading ? (
    <Placeholder animation="wave" lines={[{ cols: 8 }, { cols: 6 }, { cols: 10 }]} />
  ) : (
    <p>{content}</p>
  )}
</div>
```
