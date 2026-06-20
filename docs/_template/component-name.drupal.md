# {{ComponentName}} — Drupal

## Install

```bash
npx joui add {{component-name}} --platform drupal
```

Copy the files to `web/themes/custom/{THEME}/components/{{component-name}}/`.

## Include

```twig
{% include 'joui:{{component-name}}' with {
  slot_content: 'Hello'
} %}
```

SDC auto-loads `{{component-name}}.css` and `{{component-name}}.js` from the folder. No `libraries.yml` entry required.

## Props mapping

All props are prefixed with `{{component_name}}_` (see `{{component-name}}.component.yml`):
- `id` → `{{component_name}}_id`
- `classes` → `{{component_name}}_uc`
- `attrs` → `{{component_name}}_att`

## Examples

### Basic

```twig
{% include 'joui:{{component-name}}' with {
  slot_content: 'Content'
} %}
```

## SDC notes

- Namespace is the theme or module name: `{THEME}:{{component-name}}`.
- Override slots via `{% block slot_content %}...{% endblock %}`.
