# Range — Astro

## Installation

```bash
npx joui add range --platform astro
```

## Import

```astro
import Range from '@ui/range/Range.astro'
```

## Usage

```astro
<Range id="volume" name="volume" label="Volume" />
```

## With custom bounds

```astro
<Range
  id="price"
  name="price"
  label="Price range"
  min={100}
  max={1000}
  step={50}
  value={500}
/>
```

## Default value

```astro
<Range id="brightness" label="Brightness" value={75} />
```

## Disabled

```astro
<Range id="locked" label="Locked slider" value={30} disabled />
```

## Without label (use aria-label)

```astro
<Range
  name="opacity"
  attrs={{ 'aria-label': 'Opacity', 'aria-valuetext': '75%' }}
  value={75}
/>
```
