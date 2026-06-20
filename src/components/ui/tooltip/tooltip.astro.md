# Tooltip — Astro

## Installation

```bash
npx joui add tooltip --platform astro
```

## Import

```astro
import Tooltip from '@ui/tooltip/Tooltip.astro'
```

Import the CSS globally (once), or let the component self-import it:

```astro
import '@ui/tooltip/tooltip.css'
```

## Usage

### Component wrapper

```astro
<Tooltip text="This is a tooltip">
  <button type="button">Hover me</button>
</Tooltip>
```

### Direct data attribute (no component needed)

```astro
<button type="button" data-tooltip="Simple tooltip">Hover</button>
```

### Placement

```astro
<Tooltip text="Above" placement="top">
  <span>Top</span>
</Tooltip>

<Tooltip text="Below" placement="bottom">
  <span>Bottom</span>
</Tooltip>

<Tooltip text="Left" placement="start">
  <span>Start</span>
</Tooltip>

<Tooltip text="Right" placement="end">
  <span>End</span>
</Tooltip>
```

### On any element

```astro
<!-- Works on any HTML element -->
<a href="#" data-tooltip="Go to home">Home</a>
<img src="..." alt="Photo" data-tooltip="Click to enlarge" data-tooltip-placement="bottom">
```

## Notes

- The `data-tooltip` value is rendered via CSS `content: attr(data-tooltip)`.
- For screen reader accessibility, also set `aria-label` on the element.
- No JavaScript required.
