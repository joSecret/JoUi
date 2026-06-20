# Breadcrumb — Drupal

## Installation

```bash
npx joui add breadcrumb --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:breadcrumb' with {
  breadcrumb_items: [
    { label: 'Home', url: '/' },
    { label: 'Library', url: '/library' },
    { label: 'Data', active: true },
  ],
} %}
```

## Custom separator

```twig
{% include 'mytheme:breadcrumb' with {
  breadcrumb_separator: '›',
  breadcrumb_items: [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Shoes', active: true },
  ],
} %}
```

## With Drupal menu items

```twig
{% set items = [] %}
{% for link in breadcrumb %}
  {% set items = items|merge([{ label: link.text, url: link.url }]) %}
{% endfor %}
{% set items = items|merge([{ label: page_title, active: true }]) %}

{% include 'mytheme:breadcrumb' with {
  breadcrumb_items: items,
} %}
```

## Notes

- `breadcrumb_att` accepts a Drupal `Attribute` object for extra HTML attributes on the `<ol>`.
- `breadcrumb_uc` is an array of extra utility classes.
- No JavaScript required — separator is rendered via CSS `::after`.
- The active/current item should have `active: true` and no `url`.
