# Pager

Navigation component for paginated content. Renders first, previous, page numbers, next, and last links with full alignment control.

## Features

- 4 alignment variants (start, end, center, vertical)
- Toggle first/last/ellipsis display
- `aria-current="page"` on active page link
- Keyboard accessible
- Framework-agnostic CSS — works in Astro, Drupal, and any HTML context

## Props

| Name | Type | Default | Description |
|---|---|---|---|
| `alignment` | `'start' \| 'end' \| 'center' \| 'vertical' \| null` | `null` | Alignment of the page list |
| `showFirst` | `boolean` | `true` | Show the first-page link |
| `showLast` | `boolean` | `true` | Show the last-page link |
| `showEllipsis` | `boolean` | `true` | Show ellipsis indicators |
| `items` | `PagerItems \| null` | `null` | Page links object (first, previous, pages, next, last) |
| `current` | `number \| null` | `null` | Active page number |
| `ellipses` | `{ previous?: boolean; next?: boolean } \| null` | `null` | Whether to show ellipsis before/after page numbers |
| `classes` | `string[]` | `[]` | Additional CSS classes |
| `attrs` | `object` | `{}` | Additional HTML attributes |

## Slots

| Name | Description |
|---|---|
| `pager-previous` | Custom previous link content |
| `pager-next` | Custom next link content |

## Generated CSS classes

- Base: `.c--pager`
- Alignment: `.is--align-{start|end|center|vertical}`

## CSS variables

### Layout

| Variable | Default | Description |
|---|---|---|
| `--pager_m` | `0px` | Margin |
| `--pager_m-b-s` | `30px` | Margin block start |
| `--pager_p-b` | `0px` | Padding block |
| `--pager_p-i` | `0px` | Padding inline |
| `--pager_f-s` | `1rem` | Font size |
| `--pager_bg` | `transparent` | Background |
| `--pager_b-w` | `0px` | Border width |
| `--pager_b-c` | `transparent` | Border color |
| `--pager_b-r` | `0px` | Border radius |

### List

| Variable | Default | Description |
|---|---|---|
| `--pager-ul_m` | `0px` | List margin |
| `--pager-gap` | `8px` | Gap between items |
| `--pager-flex-w` | `wrap` | Flex wrap |
| `--pager-ul_j-c` | `flex-start` | Justify content |
| `--pager-ul_flex-d` | `row` | Flex direction |

### Item

| Variable | Default | Description |
|---|---|---|
| `--pager-item_c` | `var(--body_c)` | Text color |
| `--pager-item-bg` | `var(--c_light)` | Background |
| `--pager-item_f-w` | `400` | Font weight |
| `--pager-item-b-r` | `4px` | Border radius |
| `--pager-item-p-b` | `8px` | Padding block |
| `--pager-item-p-i` | `12px` | Padding inline |
| `--pager-item-m-w` | `40px` | Min width |

### Item states

| Variable | Default | Description |
|---|---|---|
| `--pager-item_c_h` | `var(--c_white)` | Hover text color |
| `--pager-item_bg_h` | `var(--c_primary_700)` | Hover background |
| `--pager-item_c_a` | hover text | Active text color |
| `--pager-item_bg_a` | hover background | Active background |

## Accessibility

- `<nav>` with `aria-label="Pagination"` wraps the entire component.
- Active page link receives `aria-current="page"`.
- Previous/next links include `rel="prev"` / `rel="next"`.
- Ellipsis items have `role="presentation"` to hide them from assistive tech.
- First/last/prev/next links use `visually-hidden` spans to provide screen-reader text.

## Dependencies

None.
