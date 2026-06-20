# Dropdown — Astro

## Installation

```bash
npx joui add dropdown --platform astro
```

## Import

```astro
import Dropdown from '@ui/dropdown/Dropdown.astro'
```

Attach the JS (once per page):

```astro
<script src="/components/ui/dropdown/dropdown.js"></script>
```

## Usage

### Basic

```astro
<Dropdown
  label="Options"
  color="primary"
  items={[
    { label: 'Action', href: '#' },
    { label: 'Another action', href: '#' },
    { divider: true },
    { label: 'Something else', href: '#' },
  ]}
/>
```

### Button items (no href)

```astro
<Dropdown
  label="Actions"
  items={[
    { label: 'Edit' },
    { label: 'Duplicate' },
    { divider: true },
    { label: 'Delete', disabled: true },
  ]}
/>
```

### Directions

```astro
<Dropdown label="Drop Up" direction="up" items={[...]} />
<Dropdown label="Drop End" direction="end" items={[...]} />
<Dropdown label="Drop Start" direction="start" items={[...]} />
```

### Custom items via slot

```astro
<Dropdown label="Custom">
  <li><a class="dropdown-item" href="#">Custom link</a></li>
  <li>
    <form>
      <button type="submit" class="dropdown-item">Submit form</button>
    </form>
  </li>
</Dropdown>
```
