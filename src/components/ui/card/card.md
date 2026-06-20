# Card — API Reference

A flexible content container with optional image, header, body, and footer sections. Supports color variants, horizontal layout, and shadow.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string \| null` | `null` | Color variant: `primary`, `secondary`, `accent`, `success`, `warning`, `danger`, `info`, `light`, `dark` |
| `horizontal` | `boolean` | `false` | Display card in horizontal (row) layout |
| `shadow` | `boolean \| 'lg'` | `false` | Box shadow: `true` for default, `'lg'` for large |
| `classes` | `string[]` | `[]` | Extra CSS classes on the wrapper |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on the wrapper |

The Astro component renders a `.card` wrapper with a single `<slot />`. Compose the internals using the sub-classes documented below.

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `card_color` | `string \| null` | `null` | Color variant |
| `card_horizontal` | `boolean` | `false` | Horizontal layout |
| `card_shadow` | `'shadow' \| 'shadow-lg' \| null` | `null` | Box shadow |
| `card_header` | `string \| null` | `null` | HTML content for the header |
| `card_body` | `string \| null` | `null` | HTML content for the body |
| `card_footer` | `string \| null` | `null` | HTML content for the footer |
| `card_img` | `object \| null` | `null` | Image: `{ src, alt, position }` where position is `top \| bottom \| side` |
| `card_uc` | `string[]` | `[]` | Extra utility classes |
| `card_att` | `Attribute` | — | Drupal Attribute object |

## Sub-classes

| Class | Description |
|-------|-------------|
| `.card` | Root wrapper — sets bg, border, border-radius, flex column |
| `.card-header` | Optional top section — border-bottom separator |
| `.card-body` | Main content area — grows to fill available space |
| `.card-footer` | Optional bottom section — border-top separator |
| `.card-title` | Heading inside `.card-body` |
| `.card-subtitle` | Sub-heading inside `.card-body`, muted color |
| `.card-text` | Paragraph inside `.card-body` |
| `.card-img-top` | Image at the top with rounded top corners |
| `.card-img-bottom` | Image at the bottom with rounded bottom corners |
| `.card-img` | Image used in `.card-horizontal` (side image) |
| `.card-horizontal` | Switches to flex row layout |
| `.card-shadow` | Adds default box shadow |
| `.card-shadow-lg` | Adds large box shadow |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--card_c` | `var(--body_c)` | Text color |
| `--card_bg` | `var(--body_bg)` | Background |
| `--card_b-c` | `var(--b-c)` | Border color |
| `--card_b-r` | `var(--b-r)` | Border radius |
| `--card_b-w` | `var(--b-w)` | Border width |
| `--card_shadow` | `none` | Box shadow (override or use variant classes) |
| `--card-header_p-b` | `var(--size_200)` | Header padding block |
| `--card-header_p-i` | `var(--size_400)` | Header padding inline |
| `--card-body_p-b` | `var(--size_400)` | Body padding block |
| `--card-body_p-i` | `var(--size_400)` | Body padding inline |
| `--card-footer_p-b` | `var(--size_200)` | Footer padding block |
| `--card-footer_p-i` | `var(--size_400)` | Footer padding inline |
| `--card-img_w` | `40%` | Image width in horizontal layout |

## Variants

- **default** — White/body background, border, rounded corners
- **color** — Solid background and matching border (`card-primary`, etc.)
- **horizontal** — Flex row with side image (`card-horizontal`)
- **shadow / shadow-lg** — Box shadow depth

## Accessibility

- No interactive elements on the card itself — use semantic markup inside (headings, links, buttons).
- Images should always have descriptive `alt` text.
- Color variants change visual appearance only — ensure sufficient contrast for the chosen variant.
