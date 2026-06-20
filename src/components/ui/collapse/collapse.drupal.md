# Collapse — Drupal

## Installation

```bash
npx joui add collapse --platform drupal
```

## Include via SDC

```twig
{# Render the trigger separately #}
<button type="button" data-collapse-target="my-collapse" aria-expanded="false">
  Toggle content
</button>

{% include 'mytheme:collapse' with {
  collapse_id: 'my-collapse',
  collapse_content: '<p>This content collapses and expands.</p>',
} %}
```

## Open by default

```twig
{% include 'mytheme:collapse' with {
  collapse_id: 'my-open',
  collapse_open: true,
  collapse_content: '<p>Visible on load.</p>',
} %}
```

## Extra classes and attributes

```twig
{% include 'mytheme:collapse' with {
  collapse_id: 'my-collapse',
  collapse_uc: ['mt-2'],
  collapse_att: create_attribute({'data-custom': 'value'}),
  collapse_content: '<p>Content.</p>',
} %}
```

## Notes

- The trigger button is rendered separately — the component only outputs the `.collapse` wrapper.
- `collapse_content` is rendered raw — sanitize upstream.
- `collapse.js` must be attached as a Drupal library for the toggle behavior to work.
- `aria-expanded` on the trigger is managed by `collapse.js`.
