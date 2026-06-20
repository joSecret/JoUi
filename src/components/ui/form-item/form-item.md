# Form Item

Wrapper component that groups a form input with its label, description, and error message into a single accessible unit. Overrides Drupal's `form-element.html.twig`.

## Features

- Label before, after, or visually hidden
- Description before, after, or visually hidden
- Error state with visual feedback on label and message
- Disabled state
- Prefix / suffix slots
- Compatible with any input type (input, select, textarea, checkbox, radio)

## Props

| Name | Type | Default | Description |
|---|---|---|---|
| `label` | `string \| null` | `null` | Label text |
| `labelDisplay` | `'before' \| 'after' \| 'invisible'` | `'before'` | Label position |
| `description` | `string \| null` | `null` | Helper text |
| `descriptionDisplay` | `'before' \| 'after' \| 'invisible'` | `'after'` | Description position |
| `error` | `string \| null` | `null` | Error message |
| `prefix` | `string \| null` | `null` | Content before the input |
| `suffix` | `string \| null` | `null` | Content after the input |
| `disabled` | `boolean` | `false` | Disabled state |
| `required` | `boolean` | `false` | Show required marker |
| `type` | `string \| null` | `null` | Input type (for BEM class) |
| `name` | `string \| null` | `null` | Input name (for BEM class) |
| `classes` | `string[]` | `[]` | Additional CSS classes |
| `attrs` | `object` | `{}` | Additional HTML attributes |

## Slots

| Name | Description |
|---|---|
| `default` | The input element (input, select, textarea, etc.) |

## Generated CSS classes

- Base: `.c--form-item` + `.form-item` (Drupal JS compatibility)
- Type: `.form-type--{type}` (e.g. `.form-type--text`)
- Name: `.form-item--{name}` (e.g. `.form-item--email`)
- State: `.form-item--error`, `.form-item--disabled`, `.form-item--no-label`

## CSS variables

| Variable | Default | Description |
|---|---|---|
| `--fi_gap` | `var(--size_100)` | Gap between label, input, description |
| `--fi-label_c` | `var(--body_c)` | Label color |
| `--fi-label_f-s` | `var(--f-s_base)` | Label font size |
| `--fi-label_f-w` | `var(--f-w_medium)` | Label font weight |
| `--fi-desc_c` | `var(--c_muted)` | Description color |
| `--fi-desc_f-s` | `var(--f-s_sm)` | Description font size |
| `--fi-error_c` | `var(--c_danger_600)` | Error message color |
| `--fi-error_f-s` | `var(--f-s_sm)` | Error font size |
| `--fi-required_c` | `var(--c_danger_600)` | Required marker color |

## Accessibility

- Label is always associated with the input via the Drupal render system.
- `visually-hidden` class hides the label visually while keeping it available to screen readers.
- Error state sets `form-item--error` on the wrapper — pair with `aria-describedby` on the input pointing to the error element.
- Required marker uses `aria-hidden="true"` to avoid duplicate announcements.

## Dependencies

None.
