# Nav — Drupal

## Installation

```bash
npx joui add nav --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:nav' with {
  nav_items: [
    { label: 'Active', href: '/', active: true },
    { label: 'About', href: '/about' },
    { label: 'Disabled', disabled: true },
  ],
} %}
```

## Tabs variant

```twig
{% include 'mytheme:nav' with {
  nav_variant: 'tabs',
  nav_items: [
    { label: 'Home', href: '/', active: true },
    { label: 'Profile', href: '/profile' },
  ],
} %}
```

## Pills variant

```twig
{% include 'mytheme:nav' with {
  nav_variant: 'pills',
  nav_items: [
    { label: 'Active', href: '/', active: true },
    { label: 'Link', href: '/link' },
  ],
} %}
```

## Tabs with panels (requires nav.js behavior)

```twig
{% include 'mytheme:nav' with {
  nav_variant: 'tabs',
  nav_items: [
    { label: 'Tab 1', tab_target: 'panel1', active: true },
    { label: 'Tab 2', tab_target: 'panel2' },
  ],
} %}
<div class="tab-content">
  <div class="tab-pane active" id="panel1" role="tabpanel">Content 1</div>
  <div class="tab-pane" id="panel2" role="tabpanel">Content 2</div>
</div>
```

## Notes

- When `tab_target` is set on an item, it renders as a `<button role="tab">` instead of a link.
- The `nav.js` Drupal behavior handles tab panel switching. It guards with `data-nav-initialized` to prevent double-attach.
- `nav_uc` / `nav_att` follow the standard joui pattern for extra classes and Drupal Attribute objects.
