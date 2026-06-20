# Tooltip — Drupal

## Installation

```bash
npx joui add tooltip --platform drupal
```

## Direct usage (recommended)

The tooltip CSS works on any element with `data-tooltip` — no Twig template needed in most cases:

```twig
<button type="button" data-tooltip="This is a tooltip">Hover me</button>
<a href="/path" data-tooltip="Go to page" data-tooltip-placement="bottom">Link</a>
```

## Include via SDC

```twig
{% include 'mytheme:tooltip' with {
  tooltip_text: 'Helpful tooltip text',
  tooltip_placement: 'top',
  tooltip_content: '<button type="button">Hover me</button>',
} %}
```

## Placement

```twig
{% include 'mytheme:tooltip' with {
  tooltip_text: 'Below the element',
  tooltip_placement: 'bottom',
  tooltip_content: '<span>Hover</span>',
} %}
```

## Notes

- `tooltip_text` is injected as `data-tooltip` attribute — it is NOT HTML.
- For accessibility, add `aria-label` to the inner element as well.
- `tooltip_att` accepts a Drupal `Attribute` object for the wrapper span.
- `tooltip_uc` is an array of extra utility classes.
- No JavaScript required — pure CSS `:hover`/`:focus-visible` approach.
