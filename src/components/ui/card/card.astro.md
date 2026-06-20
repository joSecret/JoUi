# Card — Astro

## Installation

```bash
npx joui add card --platform astro
```

## Import

```astro
import Card from '@ui/card/Card.astro'
```

## Usage

### Basic card

```astro
<Card>
  <img src="/img/photo.jpg" class="card-img-top" alt="Mountain landscape">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card.</p>
    <a href="#" class="button button-primary">Go somewhere</a>
  </div>
</Card>
```

### With header and footer

```astro
<Card>
  <div class="card-header">Featured</div>
  <div class="card-body">
    <h5 class="card-title">Special title</h5>
    <p class="card-text">Content goes here.</p>
  </div>
  <div class="card-footer text-muted">2 days ago</div>
</Card>
```

### Color variant

```astro
<Card color="primary">
  <div class="card-body">
    <h5 class="card-title">Primary card</h5>
    <p class="card-text">White text on primary background.</p>
  </div>
</Card>
```

### Horizontal layout

```astro
<Card horizontal>
  <img src="/img/photo.jpg" class="card-img" alt="Photo">
  <div class="card-body">
    <h5 class="card-title">Horizontal card</h5>
    <p class="card-text">Image on the left, content on the right.</p>
  </div>
</Card>
```

### With shadow

```astro
<Card shadow>
  <div class="card-body">Default shadow</div>
</Card>

<Card shadow="lg">
  <div class="card-body">Large shadow</div>
</Card>
```

### Extra classes and attributes

```astro
<Card classes={['my-custom-class']} attrs={{ 'data-id': '42' }}>
  <div class="card-body">Custom</div>
</Card>
```
