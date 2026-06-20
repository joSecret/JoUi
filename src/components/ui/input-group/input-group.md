# Input Group — API Reference

A flex layout wrapper that visually attaches text addons, icons, or buttons to the start or end of a form control. No JavaScript required.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'lg'` | — | Size variant for addon and input |
| `classes` | `string[]` | `[]` | Extra CSS classes on the wrapper |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on the wrapper |

Slot: form control and addon elements (`.input-group-text`, `.form-control`, `.button`, etc.).

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `input_group_size` | `string\|null` | `null` | Size variant |
| `input_group_content` | `string` | — | Inner HTML |
| `input_group_uc` | `string[]` | `[]` | Extra utility classes |
| `input_group_att` | `Attribute` | — | Drupal Attribute object |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ing_b-c` | `var(--b-c)` | Border color |
| `--ing_b-r` | `var(--b-r)` | Border radius |
| `--ing_b-w` | `var(--b-w)` | Border width |
| `--ing_p-b` | `var(--size_200)` | Addon padding block |
| `--ing_p-i` | `var(--size_300)` | Addon padding inline |
| `--ing_f-s` | `1rem` | Font size |
| `--ing_addon-bg` | body_bg at 4% darker | `.input-group-text` background |

## HTML Pattern

```html
<!-- Text prepend -->
<div class="input-group">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>

<!-- Button append -->
<div class="input-group">
  <input type="text" class="form-control" placeholder="Search...">
  <button class="button button-primary">Go</button>
</div>

<!-- Both sides -->
<div class="input-group">
  <span class="input-group-text">$</span>
  <input type="number" class="form-control">
  <span class="input-group-text">.00</span>
</div>
```

## Accessibility

- No ARIA role needed on the wrapper.
- The form control must have its own `id` + `<label>` as usual.
- Addon text (`.input-group-text`) is decorative — use `aria-label` or `aria-describedby` on the input if the addon conveys meaning.
