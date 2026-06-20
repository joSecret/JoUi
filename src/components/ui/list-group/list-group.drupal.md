# List Group — Drupal

## Installation

```bash
npx joui add list-group --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:list-group' with {
  list_group_items: [
    { label: 'First item' },
    { label: 'Second item' },
    { label: 'Third item' },
  ],
} %}
```

## Active and disabled

```twig
{% include 'mytheme:list-group' with {
  list_group_items: [
    { label: 'Active', active: true },
    { label: 'Normal' },
    { label: 'Disabled', disabled: true },
  ],
} %}
```

## Link items

```twig
{% include 'mytheme:list-group' with {
  list_group_items: [
    { label: 'Home', href: '/', active: true },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
} %}
```

## Flush variant

```twig
{% include 'mytheme:list-group' with {
  list_group_flush: true,
  list_group_items: [...],
} %}
```

## Notes

- `list_group_att` accepts a Drupal `Attribute` object.
- `list_group_uc` is an array of extra utility classes.
- No JavaScript required.
