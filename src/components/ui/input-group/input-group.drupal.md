# Input Group — Drupal

## Installation

```bash
npx joui add input-group --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:input-group' with {
  input_group_content: '
    <span class="input-group-text">@</span>
    <input type="text" class="form-control" placeholder="Username" aria-label="Username">
  ',
} %}
```

## Button addon

```twig
{% include 'mytheme:input-group' with {
  input_group_content: '
    <input type="text" class="form-control" placeholder="Search..." aria-label="Search">
    <button class="button button-primary" type="submit">Search</button>
  ',
} %}
```

## Block override

```twig
{% embed 'mytheme:input-group' with { input_group_size: 'lg' } %}
  {% block slot_content %}
    <span class="input-group-text">$</span>
    <input type="number" class="form-control" aria-label="Amount">
    <span class="input-group-text">.00</span>
  {% endblock %}
{% endembed %}
```

## Notes

- The `.form-control` class must be on the input inside the group for proper flex stretching.
- `input_group_content` is rendered raw — sanitize upstream.
- `input_group_att` accepts a Drupal `Attribute` object.
- No JavaScript required.
