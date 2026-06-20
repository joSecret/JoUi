# Input — Drupal

## Install

```bash
npx joui add input --platform drupal
```

## Override input.html.twig

```twig
{# templates/form/input.html.twig #}
{% include 'joui:input' %}
```

Drupal's `attributes` (type, value, name, placeholder, disabled etc.) sunt preluate automat.

## Use as SDC

```twig
{% include 'joui:input' with {
  inp_type: 'email',
  inp_att: create_attribute({ placeholder: 'you@example.com', required: true }),
} %}
```

## Size variant

```twig
{% include 'joui:input' with { inp_size: 'lg' } %}
```

## SDC notes

- Component id: `{THEME}:input`
- Folosit de obicei în interiorul `joui:form-item`
