# Pager — Astro

## Install

```bash
npx joui add pager --platform astro
```

## Import

```astro
import Pager from '@ui/pager/Pager.astro'
```

## Examples

### Basic

```astro
---
import Pager from '@ui/pager/Pager.astro'

const items = {
  previous: { href: '/blog/page/1' },
  pages: {
    1: { href: '/blog/page/1' },
    2: { href: '/blog/page/2' },
    3: { href: '/blog/page/3' },
  },
  next: { href: '/blog/page/3' },
}
---
<Pager items={items} current={2} />
```

### Alignment

```astro
<Pager items={items} current={2} alignment="center" />
<Pager items={items} current={2} alignment="end" />
<Pager items={items} current={2} alignment="vertical" />
```

### With first/last links

```astro
<Pager
  items={{
    first: { href: '/blog/page/1' },
    previous: { href: '/blog/page/4' },
    pages: { 5: { href: '/blog/page/5' }, 6: { href: '/blog/page/6' } },
    next: { href: '/blog/page/7' },
    last: { href: '/blog/page/10' },
  }}
  current={5}
  ellipses={{ previous: true, next: true }}
/>
```

### Hide first/last

```astro
<Pager items={items} current={2} showFirst={false} showLast={false} />
```

### Custom prev/next slots

```astro
<Pager items={items} current={2}>
  <a slot="pager-previous" href="/blog/page/1">← Back</a>
  <a slot="pager-next" href="/blog/page/3">Forward →</a>
</Pager>
```

## Notes

- CSS is auto-imported from the component (`import './pager.css'` inside `Pager.astro`).
- The component renders nothing when `items` is `null` or `undefined`.
- On Drupal, props are prefixed with `pager_` — see `pager.drupal.md`.
