# Accessibility Guidelines

## Shared Accessibility Classes

### `.visually-hidden`

**Purpose:** Hides content visually while keeping it accessible to screen readers.

**Use Cases:**
- Icon-only buttons that need accessible labels
- Skip navigation links
- Form labels for input fields with aria-label
- Additional context that shouldn't be displayed

**Implementation Location:**
- **Astro:** `src/style/ui/accessibility.css` (imported globally via `src/style/ui.css`)
- **Drupal:** Same file (`src/style/ui/accessibility.css`)

**How It Works:**

The class uses absolute positioning and extreme clipping to remove visual rendering while keeping content in the DOM:

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

**Astro Example:**

```astro
---
interface Props {
  label?: string;
  iconPos?: 'before' | 'after' | 'only';
  icon?: string;
}

const { label, iconPos = 'before', icon } = Astro.props;
---

<button class="btn" data-icon-pos={iconPos}>
  {icon && <span class="icon">{icon}</span>}
  {iconPos === 'only' ? (
    <span class="visually-hidden">{label || <slot />}</span>
  ) : (
    label || <slot />
  )}
</button>
```

**Drupal/Twig Example:**

```twig
<button class="btn" data-icon-pos="{{ icon_pos }}">
  {% if icon %}
    <span class="icon">{{ icon }}</span>
  {% endif %}
  {% if icon_pos == 'only' %}
    <span class="visually-hidden">{{ label or slot }}</span>
  {% else %}
    {{ label or slot }}
  {% endif %}
</button>
```

### Browser Support

- ✅ All modern browsers
- ✅ IE 11+ (with `clip` property used)
- ✅ Screen readers (NVDA, JAWS, VoiceOver)

### Alternative: `clip-path` Method

For a cleaner CSS approach using `clip-path` instead of `clip`:

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
```

Note: `clip-path` doesn't work in IE 11. Both methods are included in the CSS file for reference.

## Astro-Specific: Global Style Import

In Astro, the `accessibility.css` file is automatically loaded via:

1. `src/style/ui/accessibility.css` is imported in `src/style/ui.css`
2. `src/style/ui.css` should be imported in your root layout or main page file

To ensure it's available globally, add this to your main layout or index page:

```astro
---
import '@s/ui.css';
---
```

## Drupal-Specific

In Drupal, include the `accessibility.css` file in your theme's `.libraries.yml`:

```yaml
global:
  css:
    base:
      - path/to/ui/accessibility.css: {}
```

Or in your theme's `.info.yml`:

```yaml
stylesheets-remove:
  - '@system/normalize.css'
  
stylesheets:
  - src/style/ui/accessibility.css
```

## References

- [MDN: Visually Hidden](https://developer.mozilla.org/en-US/docs/Web/CSS/clip)
- [A11y 101: Visually Hidden](https://www.a11y-101.com/design/visually-hidden)
- [WebAIM: Screen Readers](https://webaim.org/articles/screenreader/)
- [Astro: Styling](https://docs.astro.build/en/guides/styling/)
