# Progress — Astro

## Installation

```bash
npx joui add progress --platform astro
```

## Import

```astro
import Progress from '@ui/progress/Progress.astro'
```

## Usage

### Basic

```astro
<Progress value={25} />
```

### With label

```astro
<Progress value={60} label={true} />
<Progress value={60} label="60 / 100" />
```

### Color variants

```astro
<Progress value={40} color="success" />
<Progress value={70} color="warning" />
<Progress value={90} color="danger" />
```

### Striped

```astro
<Progress value={50} striped />
```

### Animated stripes

```astro
<Progress value={75} animated />
```

### Custom height

```astro
<Progress value={30} height="1.5rem" />
```
