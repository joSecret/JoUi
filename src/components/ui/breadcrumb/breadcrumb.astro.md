# Breadcrumb — Astro

## Installation

```bash
npx joui add breadcrumb --platform astro
```

## Import

```astro
import Breadcrumb from '@ui/breadcrumb/Breadcrumb.astro'
```

## Usage

### Data-driven

```astro
<Breadcrumb items={[
  { label: 'Home', url: '/' },
  { label: 'Library', url: '/library' },
  { label: 'Current Page', active: true },
]} />
```

### Custom separator

```astro
<Breadcrumb
  separator="›"
  items={[
    { label: 'Home', url: '/' },
    { label: 'Docs', url: '/docs' },
    { label: 'Components', active: true },
  ]}
/>
```

### Slot-based (manual markup)

```astro
<Breadcrumb>
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item"><a href="/docs">Docs</a></li>
  <li class="breadcrumb-item active" aria-current="page">Components</li>
</Breadcrumb>
```

### Extra classes

```astro
<Breadcrumb classes={['my-breadcrumb']} items={items} />
```
