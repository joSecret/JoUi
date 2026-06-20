# Offcanvas — Astro

## Installation

```bash
npx joui add offcanvas --platform astro
```

## Import

```astro
import Offcanvas from '@ui/offcanvas/Offcanvas.astro'
```

Attach JS:

```astro
<script src="/components/ui/offcanvas/offcanvas.js"></script>
```

## Usage

```astro
<button type="button" data-offcanvas-target="sidebar">Open sidebar</button>

<Offcanvas id="sidebar" title="Sidebar" placement="start">
  <p>Sidebar content here.</p>
</Offcanvas>
```

## Placements

```astro
<Offcanvas id="ofc-start" placement="start" title="Start">Left panel</Offcanvas>
<Offcanvas id="ofc-end" placement="end" title="End">Right panel</Offcanvas>
<Offcanvas id="ofc-top" placement="top" title="Top">Top panel</Offcanvas>
<Offcanvas id="ofc-bottom" placement="bottom" title="Bottom">Bottom panel</Offcanvas>
```

## Custom header

```astro
<Offcanvas id="custom-ofc">
  <Fragment slot="header">
    <h5 class="offcanvas-title">Custom Header</h5>
    <button class="close-button" data-offcanvas-dismiss aria-label="Close">...</button>
  </Fragment>
  <p>Body content.</p>
</Offcanvas>
```
