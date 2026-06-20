# Navbar — Drupal

## Installation

```bash
npx joui add navbar --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:navbar' with {
  navbar_brand: 'My Site',
  navbar_brand_url: '/',
  navbar_items: [
    { label: 'Home', href: '/', active: true },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
} %}
```

## Attach JavaScript

```php
$attachments['#attached']['library'][] = 'mytheme/joui-navbar';
```

```yaml
# mytheme.libraries.yml
joui-navbar:
  js:
    components/ui/navbar/navbar.js: {}
  dependencies:
    - core/drupal
```

## With Drupal menu

```twig
{% set nav_items = [] %}
{% for link in page.header_nav %}
  {% set nav_items = nav_items|merge([{
    label: link.title,
    href: link.url,
    active: link.in_active_trail,
  }]) %}
{% endfor %}

{% include 'mytheme:navbar' with {
  navbar_brand: site_name,
  navbar_brand_url: front_page,
  navbar_items: nav_items,
} %}
```

## Block override

```twig
{% embed 'mytheme:navbar' with {
  navbar_brand: 'Site',
  navbar_brand_url: '/',
} %}
  {% block slot_content %}
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><a class="nav-link" href="/login">Login</a></li>
    </ul>
  {% endblock %}
{% endembed %}
```

## Notes

- `navbar_att` accepts a Drupal `Attribute` object for extra HTML attributes on `<nav>`.
- `navbar_uc` is an array of extra utility classes.
- The mobile toggle is handled by `navbar.js`.
- Active link should have `active: true` and `aria-current` is set automatically.
