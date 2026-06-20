# Check / Radio — Drupal

## Installation

```bash
npx joui add check-radio --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:check-radio' with {
  check_id: 'agree',
  check_name: 'agree',
  check_label: 'I agree to the terms',
} %}
```

## Radio group

```twig
{% for option in options %}
  {% include 'mytheme:check-radio' with {
    check_type: 'radio',
    check_id: 'option-' ~ option.value,
    check_name: 'choice',
    check_value: option.value,
    check_label: option.label,
    check_checked: option.value == selected_value,
  } %}
{% endfor %}
```

## Switch

```twig
{% include 'mytheme:check-radio' with {
  check_type: 'switch',
  check_id: 'notifications',
  check_label: 'Enable notifications',
} %}
```

## Inline checkboxes

```twig
{% for item in items %}
  {% include 'mytheme:check-radio' with {
    check_id: 'item-' ~ loop.index,
    check_name: 'items[]',
    check_value: item.value,
    check_label: item.label,
    check_inline: true,
  } %}
{% endfor %}
```

## Notes

- `check_id` must match the label's `for` attribute — always provide it.
- `check_att` accepts a Drupal `Attribute` object for the input element.
- `check_uc` is an array of extra utility classes for the wrapper div.
- No JavaScript required.
