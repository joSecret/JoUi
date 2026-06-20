# Card — Drupal

## Installation

```bash
npx joui add card --platform drupal
```

## Include via SDC

```twig
{% include 'mytheme:card' with {
  card_body: '<h5 class="card-title">Card title</h5><p class="card-text">Some content.</p>',
} %}
```

## With image, header, and footer

```twig
{% include 'mytheme:card' with {
  card_img: { src: '/img/photo.jpg', alt: 'Mountain landscape', position: 'top' },
  card_header: 'Featured',
  card_body: '<h5 class="card-title">Card title</h5><p class="card-text">Content here.</p>',
  card_footer: '<small class="text-muted">2 days ago</small>',
} %}
```

## Color variant

```twig
{% include 'mytheme:card' with {
  card_color: 'primary',
  card_body: '<h5 class="card-title">Primary card</h5><p class="card-text">White text on primary background.</p>',
} %}
```

## Horizontal layout

```twig
{% include 'mytheme:card' with {
  card_horizontal: true,
  card_img: { src: '/img/photo.jpg', alt: 'Photo', position: 'side' },
  card_body: '<h5 class="card-title">Horizontal card</h5><p class="card-text">Image on the left, content on the right.</p>',
} %}
```

## Shadow

```twig
{% include 'mytheme:card' with {
  card_shadow: 'shadow',
  card_body: '<p>Card with shadow.</p>',
} %}
```

## Block-based slots

Override the slots directly for maximum flexibility:

```twig
{% embed 'mytheme:card' %}
  {% block slot_header %}
    <strong>Custom header block</strong>
  {% endblock %}
  {% block slot_body %}
    <h5 class="card-title">Custom body</h5>
    <p>Full Twig/HTML control inside the body.</p>
  {% endblock %}
  {% block slot_footer %}
    <a href="/more">Read more</a>
  {% endblock %}
{% endembed %}
```

## Notes

- `card_img.position` controls where the image renders: `top` (default), `bottom`, or `side` (horizontal).
- `card_header` / `card_body` / `card_footer` are rendered raw — sanitize upstream.
- `card_att` accepts a Drupal `Attribute` object for extra HTML attributes on the wrapper.
- `card_uc` is an array of extra utility classes.
