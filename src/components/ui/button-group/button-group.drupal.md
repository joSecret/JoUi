# Button Group — Drupal

## Installation

```bash
npx joui add button-group --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:button-group' with {
  button_group_label: 'Text alignment',
  button_group_content: '
    <button class="button">Left</button>
    <button class="button">Center</button>
    <button class="button">Right</button>
  ',
} %}
```

## Sizes

```twig
{% include 'mytheme:button-group' with {
  button_group_size: 'sm',
  button_group_content: '
    <button class="button button-primary">A</button>
    <button class="button button-primary">B</button>
  ',
} %}
```

## Vertical

```twig
{% include 'mytheme:button-group' with {
  button_group_vertical: true,
  button_group_label: 'Vertical options',
  button_group_content: '
    <button class="button">Top</button>
    <button class="button">Middle</button>
    <button class="button">Bottom</button>
  ',
} %}
```

## Block override

```twig
{% embed 'mytheme:button-group' with {
  button_group_label: 'Actions',
} %}
  {% block slot_buttons %}
    <button class="button button-primary">Save</button>
    <button class="button button-secondary">Cancel</button>
  {% endblock %}
{% endembed %}
```

## Notes

- `button_group_att` accepts a Drupal `Attribute` object.
- `button_group_uc` is an array of extra utility classes.
- No JavaScript required.
