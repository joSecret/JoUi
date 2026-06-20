# Spinner — Astro

## Installation

```bash
npx joui add spinner --platform astro
```

## Import

```astro
import Spinner from '@ui/spinner/Spinner.astro'
```

## Usage

### Border spinner (default)

```astro
<Spinner />
```

### Grow spinner

```astro
<Spinner type="grow" />
```

### With color

```astro
<Spinner color="primary" />
<Spinner type="grow" color="success" />
```

### Small

```astro
<Spinner size="sm" />
<Spinner type="grow" size="sm" color="danger" />
```

### Custom label

```astro
<Spinner label="Please wait..." />
```
