# Textarea — Drupal

## Install

```bash
npx joui add textarea --platform drupal
```

## Override textarea.html.twig

```twig
{# templates/form/textarea.html.twig #}
{% include 'joui:textarea' %}
```

## Use as SDC

```twig
{% include 'joui:textarea' with {
  txta_rows: 5,
  txta_att: create_attribute({ placeholder: 'Enter text...', name: 'body' }),
} %}
```

## No resize

```twig
{% include 'joui:textarea' with { txta_resize: 'none' } %}
```

## SDC notes

- Component id: `{THEME}:textarea`
- Folosit de obicei în interiorul `joui:form-item`
