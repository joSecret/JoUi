# Navbar — Astro

## Installation

```bash
npx joui add navbar --platform astro
```

## Import

```astro
import Navbar from '@ui/navbar/Navbar.astro'
```

Attach the JS (once per page):

```astro
<script src="/components/ui/navbar/navbar.js"></script>
```

## Usage

### Basic

```astro
<Navbar
  brand="My Site"
  brandUrl="/"
  items={[
    { label: 'Home', href: '/', active: true },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]}
/>
```

### Without brand

```astro
<Navbar
  items={[
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ]}
/>
```

### Custom brand via slot

```astro
<Navbar items={[...]}>
  <Fragment slot="brand">
    <a class="navbar-brand" href="/">
      <img src="/logo.svg" alt="Logo" height="30">
    </a>
  </Fragment>
</Navbar>
```

### Custom content in collapse area

```astro
<Navbar brand="Site" brandUrl="/" items={[...]}>
  <form class="d-flex ms-auto">
    <input class="form-control" type="search" placeholder="Search">
    <button class="button button-primary" type="submit">Search</button>
  </form>
</Navbar>
```

### With disabled link

```astro
<Navbar items={[
  { label: 'Active', href: '/', active: true },
  { label: 'Normal', href: '/about' },
  { label: 'Disabled', href: '#', disabled: true },
]} />
```
