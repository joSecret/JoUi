# Button

Flexible button component supporting multiple colors, sizes, styles, and states.

## Features

- 9 color variants (primary, secondary, accent, success, warning, danger, info, light, dark)
- 4 style variants (default, outline, ghost, clear)
- 3 sizes (sm, default, lg)
- 4 radius options (none, sm, lg, pill)
- Icon support (left, right, only)
- WCAG 2.1 AA accessibility
- Flexible HTML tag rendering (button, a, span, input, summary)

## Props

| Name | Type | Default | Description |
|---|---|---|---|
| `tag` | `'a' \| 'button' \| 'span' \| 'input' \| 'summary'` | auto (`a` if `url` is set, else `button`) | HTML element to render |
| `color` | `string \| null` | `null` | Color variant |
| `variant` | `'outline' \| 'ghost' \| 'clear' \| null` | `null` | Style variant |
| `size` | `'sm' \| 'lg' \| null` | `null` | Size |
| `radius` | `'none' \| 'sm' \| 'lg' \| 'pill' \| null` | `null` | Border radius |
| `icon` | `string \| null` | `null` | SVG markup. Include `aria-hidden="true"` |
| `iconPosition` | `'left' \| 'right' \| 'only'` | `'right'` | Icon position relative to the label |
| `label` | `string` | `''` | Button text |
| `url` | `string \| null` | `null` | Link URL; sets `tag='a'` when `tag` is unspecified |
| `disabled` | `boolean` | `false` | Disabled state |
| `ariaLabel` | `string \| null` | `null` | Required for icon-only buttons |
| `ariaExpanded` | `boolean \| null` | `null` | Toggle state; set only on controls that expand another element |
| `id` | `string \| null` | `null` | HTML id |
| `classes` | `string[]` | `[]` | Additional CSS classes |
| `attrs` | `object` | `{}` | Additional HTML attributes |

## Slots

| Name | Description |
|---|---|
| `default` | Button content (used instead of `label` when provided) |

> On Drupal, three named slots are exposed: `slot_icon_before`, `slot_content`, `slot_icon`. See `button.drupal.md`.

## Generated CSS classes

- Base: `.button`
- Color: `.button-{primary|secondary|accent|success|warning|danger|info|light|dark}`
- Variant: `.button-{outline|ghost|clear}`
- Size: `.button-{sm|lg}`
- Radius: `.button-radius-{none|sm|lg|pill}`
- Icon: `.button-icon-{left|right|only}`

## CSS variables

### Base (customizable)

| Variable | Default | Description |
|---|---|---|
| `--btn_c` | `var(--body_c)` | Text color |
| `--btn_bg` | `var(--body_bg)` | Background |
| `--btn_b-c` | `var(--btn_bg)` | Border color |
| `--btn_f-s` | `1rem` | Font size |
| `--btn_l-h` | `1.2` | Line height |
| `--btn_p-b` | `0.5em` | Padding block |
| `--btn_p-i` | `1.2em` | Padding inline |
| `--btn_b-w` | `1px` | Border width |
| `--btn_b-s` | `solid` | Border style |
| `--btn_b-r` | `var(--b-r)` | Border radius |

### State (hover, focus, active, disabled)

| Variable | Description |
|---|---|
| `--btn_c_h`, `--btn_bg_h`, `--btn_b-c_h` | Hover colors |
| `--btn_c_f`, `--btn_bg_f`, `--btn_b-c_f` | Focus colors |
| `--btn_c_a`, `--btn_bg_a`, `--btn_b-c_a` | Active colors |
| `--btn_c_d`, `--btn_bg_d`, `--btn_b-c_d` | Disabled colors |
| `--btn_cursor-disabled` | Cursor when disabled (`not-allowed`) |

### Color variants

| Class | Text | Background |
|---|---|---|
| `.button-primary` | `var(--c_white)` | `var(--c_primary_500)` |
| `.button-secondary` | `var(--c_white)` | `var(--c_secondary_500)` |
| `.button-accent` | `var(--c_white)` | `var(--c_accent_500)` |
| `.button-success` | `var(--c_white)` | `var(--c_success_500)` |
| `.button-warning` | `var(--c_white)` | `var(--c_warning_500)` |
| `.button-danger` | `var(--c_white)` | `var(--c_danger_500)` |
| `.button-info` | `var(--c_white)` | `var(--c_info_500)` |
| `.button-light` | `var(--c_dark)` | `var(--c_light)` |
| `.button-dark` | `var(--c_light)` | `var(--c_dark)` |

### Size variants

| Class | Font size | Padding block | Padding inline |
|---|---|---|---|
| `.button-sm` | `0.875em` | `0.25em` | `0.5em` |
| default | `1rem` | `0.5em` | `1.2em` |
| `.button-lg` | `1.25em` | `1em` | `2em` |

### Private (do not override)

Prefixed `--_btn_*`. See [CSS-VARIABLES.md](../../../docs/CSS-VARIABLES.md).

## Accessibility

- Keyboard focusable; disabled buttons are removed from tab order.
- `:focus-visible` outline with branded color; 2px offset for visibility.
- Icon-only buttons require `ariaLabel` (fallback is the literal string `"Button"`).
- Disabled `<a>` receives `role="link"`, `aria-disabled="true"`, `tabindex="-1"` (links cannot be semantically disabled).
- Pass `ariaExpanded` only on buttons that toggle another element.
- SVG icons must include `aria-hidden="true"`.
- Color contrast meets WCAG AA on every color variant.

## Dependencies

None.
