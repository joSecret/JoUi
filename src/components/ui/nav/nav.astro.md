# Nav — Astro

## Installation

```bash
npx joui add nav --platform astro
```

## Import

```astro
import Nav from '@ui/nav/Nav.astro'
```

## Usage

### Default nav

```astro
<Nav items={[
  { label: 'Active', href: '#', active: true },
  { label: 'Link', href: '#' },
  { label: 'Disabled', disabled: true },
]} />
```

### Tabs variant

```astro
<Nav variant="tabs" items={[
  { label: 'Home', href: '#', active: true },
  { label: 'Profile', href: '#' },
  { label: 'Contact', href: '#' },
]} />
```

### Pills variant

```astro
<Nav variant="pills" items={[
  { label: 'Active', href: '#', active: true },
  { label: 'Link', href: '#' },
]} />
```

### Tabs with panels (requires nav.js)

```astro
<Nav variant="tabs" items={[
  { label: 'Tab 1', tabTarget: 'panel1', active: true },
  { label: 'Tab 2', tabTarget: 'panel2' },
]} />
<div class="tab-content">
  <div class="tab-pane active" id="panel1" role="tabpanel">Content 1</div>
  <div class="tab-pane" id="panel2" role="tabpanel">Content 2</div>
</div>
```

### Slot-based (custom content)

```astro
<Nav variant="tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Custom item</a>
  </li>
</Nav>
```
