# Collapse — Astro

## Installation

```bash
npx joui add collapse --platform astro
```

## Import

```astro
import Collapse from '@ui/collapse/Collapse.astro'
```

## Usage

### Basic

The `Collapse` component renders only the `.collapse` div. Place the trigger separately:

```astro
<button type="button" data-collapse-target="my-collapse" aria-expanded="false">
  Toggle content
</button>

<Collapse id="my-collapse">
  <p>This content collapses and expands on trigger click.</p>
</Collapse>
```

### Open by default

```astro
<button type="button" data-collapse-target="my-open" aria-expanded="true">
  Toggle
</button>

<Collapse id="my-open" open>
  <p>Visible on load.</p>
</Collapse>
```

### Extra classes and attributes

```astro
<Collapse id="my-collapse" classes={['mt-2']} attrs={{ 'data-custom': 'value' }}>
  Content
</Collapse>
```

## Script

Include `collapse.js` to enable toggle behavior. In an Astro layout:

```astro
<script src="@ui/collapse/collapse.js"></script>
```

Or import it in your JS entry point:

```js
import '@ui/collapse/collapse.js';
```
