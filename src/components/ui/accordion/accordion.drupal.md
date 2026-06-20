# Accordion — Drupal

## Installation

```bash
npx joui add accordion --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:accordion' with {
  items: [
    { title: 'What is joui?', content: '<p>A multi-platform CSS component library.</p>' },
    { title: 'Is JS required?', content: '<p>No — built on native details.</p>' },
  ],
} %}
```

## Open a specific item by default

```twig
{% include 'mytheme:accordion' with {
  items: items,
  open_item_id: 2,
} %}
```

## Flush variant

```twig
{% include 'mytheme:accordion' with {
  flush: true,
  items: items,
} %}
```

## Stay open (multiple panels at once)

```twig
{% include 'mytheme:accordion' with {
  stay_open: true,
  items: items,
} %}
```

## Icon position

```twig
{# left | right (default) | none #}
{% include 'mytheme:accordion' with {
  icon_position: 'left',
  items: items,
} %}
```

## Notes

- `accordion_id` is used as the `name` attribute for exclusive-open behavior. Auto-generated if omitted.
- `accordion_att` accepts a Drupal `Attribute` object for extra HTML attributes on the wrapper.
- `accordion_uc` / `accordion_item_uc` are arrays of extra utility classes.
- Content in `items[].content` is rendered raw — sanitize upstream.
