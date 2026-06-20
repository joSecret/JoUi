# Floating Label — Drupal

## Installation

```bash
npx joui add floating-label --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:floating-label' with {
  float_label_id: 'email',
  float_label_label: 'Email address',
  float_label_type: 'email',
  float_label_name: 'email',
} %}
```

## Textarea

```twig
{% include 'mytheme:floating-label' with {
  float_label_id: 'message',
  float_label_label: 'Your message',
  float_label_tag: 'textarea',
  float_label_name: 'message',
} %}
```

## Select

```twig
{% include 'mytheme:floating-label' with {
  float_label_id: 'country',
  float_label_label: 'Country',
  float_label_tag: 'select',
  float_label_options: '
    <option value="">Choose...</option>
    <option value="us">United States</option>
  ',
} %}
```

## Pre-filled

```twig
{% include 'mytheme:floating-label' with {
  float_label_id: 'username',
  float_label_label: 'Username',
  float_label_value: current_user.getAccountName(),
} %}
```

## IMPORTANT: Placeholder must be a space

The `float_label_placeholder` defaults to `' '` (a single space character). **Never set it to empty string** — the CSS `:not(:placeholder-shown)` float depends on it being non-empty.

## Notes

- Always provide `float_label_id` — it binds the label to the input for accessibility.
- `float_label_att` accepts a Drupal `Attribute` object for the input element.
- No JavaScript required.
