# List Group — Astro

## Installation

```bash
npx joui add list-group --platform astro
```

## Import

```astro
import ListGroup from '@ui/list-group/ListGroup.astro'
```

## Usage

### Basic items

```astro
<ListGroup items={[
  { label: 'First item' },
  { label: 'Second item' },
  { label: 'Third item' },
]} />
```

### Active and disabled

```astro
<ListGroup items={[
  { label: 'Active item', active: true },
  { label: 'Normal item' },
  { label: 'Disabled item', disabled: true },
]} />
```

### Link items

```astro
<ListGroup items={[
  { label: 'Home', href: '/', active: true },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]} />
```

### Color variants

```astro
<ListGroup items={[
  { label: 'Primary', color: 'primary' },
  { label: 'Success', color: 'success' },
  { label: 'Warning', color: 'warning' },
  { label: 'Danger', color: 'danger' },
]} />
```

### Flush

```astro
<ListGroup flush items={[...]} />
```

### Horizontal

```astro
<ListGroup horizontal items={[
  { label: 'One' },
  { label: 'Two' },
  { label: 'Three' },
]} />
```

### Custom items via slot

```astro
<ListGroup>
  <li class="list-group-item d-flex justify-content-between">
    <span>Item</span>
    <span class="badge badge-primary">14</span>
  </li>
</ListGroup>
```
