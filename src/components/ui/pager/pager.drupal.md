# Pager — Drupal

## Install

```bash
npx joui add pager --platform drupal
```

Copy the files to `web/themes/custom/{THEME}/components/pager/`.

## Include

```twig
{% include 'joui:pager' %}
```

SDC auto-loads `pager.css` from the folder. No `libraries.yml` entry is required.

## Props mapping

All props are prefixed with `pager_` (see `pager.component.yml`):

| Reference prop | Drupal prop |
|---|---|
| `alignment` | `pager_alignment` |
| `showFirst` | `pager_show_first` |
| `showLast` | `pager_show_last` |
| `showEllipsis` | `pager_show_ellipsis` |
| `items` | `pager_items` |
| `current` | `pager_current` |
| `ellipses` | `pager_ellipses` |
| `classes` | `pager_uc` |
| `attrs` | `pager_att` |

## Override in pager.html.twig

The most common Drupal use case is to override the core pager template. Place `pager.html.twig` in your theme's `templates/` folder:

```twig
{%
  include 'joui:pager' with {
    pager_items: items,
    pager_current: current,
    pager_ellipses: ellipses,
  }
%}
```

Drupal's pager preprocess passes `items`, `current`, and `ellipses` automatically.

## Examples

### Centered pager

```twig
{% include 'joui:pager' with {
  pager_items: items,
  pager_current: current,
  pager_ellipses: ellipses,
  pager_alignment: 'center',
} %}
```

### Hide first/last links

```twig
{% include 'joui:pager' with {
  pager_items: items,
  pager_current: current,
  pager_show_first: false,
  pager_show_last: false,
} %}
```

### Custom previous/next slot

```twig
{% include 'joui:pager' with { pager_items: items, pager_current: current } %}
  {% block slot_pager_previous %}
    <a href="{{ items.previous.href }}" class="page-link">← Back</a>
  {% endblock %}
{% endinclude %}
```

## SDC notes

- The component id is `{THEME}:pager`.
- Slots `slot_pager_previous` and `slot_pager_next` can be overridden via `{% block name %}...{% endblock %}`.
- `aria-current="page"` is set via Drupal's item attributes — it arrives through `{{ item.attributes }}` automatically.
