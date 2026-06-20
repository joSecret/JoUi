# Popover — Astro

## Installation

```bash
npx joui add popover --platform astro
```

## Import

```astro
import Popover from '@ui/popover/Popover.astro'
```

Optionally attach JS for close-on-outside behavior:

```astro
<script src="/components/ui/popover/popover.js"></script>
```

## Usage

```astro
<Popover title="Popover title">
  <button slot="trigger" class="button button-primary">Click me</button>
  <p>This is the popover body content.</p>
</Popover>
```

## Without title

```astro
<Popover>
  <span slot="trigger" class="button button-secondary">Info</span>
  <p>Some helpful information here.</p>
</Popover>
```

## Placements

```astro
<Popover title="Top" placement="top"><button slot="trigger">Top</button>Content</Popover>
<Popover title="End" placement="end"><button slot="trigger">End</button>Content</Popover>
<Popover title="Start" placement="start"><button slot="trigger">Start</button>Content</Popover>
```

## Notes

- The `trigger` slot content is rendered inside `<summary>` — it should be a button or focusable element.
- Without `popover.js`, the popover closes only when clicking the trigger again.
- With `popover.js`, clicking outside or pressing Escape also closes it.
