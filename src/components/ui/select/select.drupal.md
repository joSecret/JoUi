# Select — Drupal

## Install

```bash
npx joui add select --platform drupal
```

## Override select.html.twig

```twig
{# templates/form/select.html.twig #}
{% include 'joui:select' %}
```

Drupal's `options`, `empty_option`, `empty_value`, `multiple` sunt preluate automat.

## Use as SDC

```twig
{% include 'joui:select' with {
  sel_empty_option: '- Select -',
  sel_options: options,
} %}
```

## Multiple

```twig
{% include 'joui:select' with {
  sel_multiple: true,
  sel_options: options,
} %}
```

## SDC notes

- Component id: `{THEME}:select`
- Suportă optgroups: `{ type: 'optgroup', label: 'Group', options: {...} }`
- Folosit de obicei în interiorul `joui:form-item`
