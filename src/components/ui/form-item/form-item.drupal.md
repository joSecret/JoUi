# Form Item — Drupal

## Install

```bash
npx joui add form-item --platform drupal
```

Copy files to `web/themes/custom/{THEME}/components/form-item/`.

## Override form-element.html.twig

The primary use case is to override Drupal core's form element template. Place `form-element.html.twig` in your theme's `templates/form/` folder:

```twig
{# web/themes/custom/{THEME}/templates/form/form-element.html.twig #}
{% include 'joui:form-item' %}
```

All Drupal core variables (`label`, `label_display`, `errors`, `description`, etc.) are picked up automatically — no mapping needed.

## Use as SDC component

```twig
{% include 'joui:form-item' with {
  fi_label: 'Email address',
  fi_required: true,
} %}
  {{ input }}
{% endinclude %}
```

## Props mapping

| Drupal core var | joui SDC prop |
|---|---|
| `label` | `fi_label` |
| `label_display` | `fi_label_display` |
| `description` | `fi_description` |
| `description_display` | `fi_description_display` |
| `errors` | `fi_errors` |
| `prefix` | `fi_prefix` |
| `suffix` | `fi_suffix` |
| `disabled` | `fi_disabled` |
| `required` | `fi_required` |
| `type` | `fi_type` |
| `name` | `fi_name` |
| — | `fi_uc` (utility classes) |
| `attributes` | `fi_att` |

## Examples

### Error state

```twig
{% include 'joui:form-item' with {
  fi_label: 'Username',
  fi_errors: 'This field is required.',
  fi_required: true,
} %}
  <input type="text" name="username" class="..." />
{% endinclude %}
```

### Description before input

```twig
{% include 'joui:form-item' with {
  fi_label: 'Password',
  fi_description: { content: 'Minimum 8 characters.' },
  fi_description_display: 'before',
} %}
  <input type="password" name="password" class="..." />
{% endinclude %}
```

### Checkbox (label after)

```twig
{% include 'joui:form-item' with {
  fi_label: 'Accept terms',
  fi_label_display: 'after',
  fi_type: 'checkbox',
} %}
  <input type="checkbox" name="terms" />
{% endinclude %}
```

## SDC notes

- Component id: `{THEME}:form-item`.
- `form-item.css` is auto-loaded by SDC — no `libraries.yml` needed.
- Drupal core JS relies on `.js-form-item`, `.js-form-type-*`, `.js-form-item-*` classes — these are always added.
