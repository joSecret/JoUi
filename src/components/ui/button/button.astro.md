# Button — Astro

## Install

```bash
npx joui add button --platform astro
```

## Import

```astro
import Button from '@ui/button/Button.astro'
```

## Examples

### Basic

```astro
<Button label="Save" color="primary" />
<Button>Via slot</Button>
```

### Variants

```astro
<Button label="Outline" color="primary" variant="outline" />
<Button label="Ghost" color="primary" variant="ghost" />
<Button label="Clear" color="primary" variant="clear" />
```

### Sizes

```astro
<Button label="Small" size="sm" />
<Button label="Default" />
<Button label="Large" size="lg" />
```

### Icon

```astro
<Button
  label="Add"
  icon='<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2"/></svg>'
  iconPosition="left"
/>
```

### Icon-only

```astro
<Button
  icon='<svg aria-hidden="true">...</svg>'
  iconPosition="only"
  ariaLabel="Close dialog"
/>
```

### Link

```astro
<Button label="Docs" url="/docs" color="primary" />
```

### Submit input

```astro
<Button tag="input" attrs={{ type: 'submit' }} label="Submit" />
```

The `variant` prop governs style variants; the native HTML `type` attribute must be passed via `attrs`.

### Expandable (JS is not included)

Astro ships no runtime JS for `aria-expanded` toggling. Add your own handler:

```astro
<Button label="Menu" ariaExpanded={false} id="menu-trigger" />
<script>
  document.getElementById('menu-trigger')?.addEventListener('click', (e) => {
    const btn = e.currentTarget as HTMLElement;
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
  });
</script>
```

## Notes

- CSS is auto-imported from the component (`import './button.css'` inside `Button.astro`).
- The `variant` prop is Astro-only; Drupal uses `button_type` (no collision there because props are namespaced with `button_`).
