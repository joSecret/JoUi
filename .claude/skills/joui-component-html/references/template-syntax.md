# JoUI Template Syntax Reference

JoUI HTML templates use `{{...}}` directives for dynamic content. The build pipeline's `parseTemplate()` function processes these at build time to generate HTML output from component props.

---

## The 5 Template Syntax Forms

### 1. Variable interpolation
```
{{variable}}
```
Renders the prop value directly. If the prop is undefined, renders an empty string.

**Example:**
```html
<span class="chip-label">{{label}}</span>
```

---

### 2. Variable with default fallback
```
{{variable|default:fallback text}}
```
Renders the prop value if present; falls back to the literal text after `default:` if the prop is undefined or empty.

**Example:**
```html
<p class="hero-subtitle">{{subtitle|default:}}</p>
<{{tag|default:button}} class="c--button">...</{{tag|default:button}}>
```

Note: `{{tag|default:button}}` is valid in tag position — the parser handles opening and closing tag interpolation.

---

### 3. Conditional class
```
{{?condition: has-class_value}}
```
If `condition` prop is truthy, appends ` has-class_value` (with leading space) to the class list. If falsy, appends nothing.

**Examples:**
```html
class="c--button{{?color: has-color_{{color}}}}{{?size: has-size_{{size}}}}{{?type: has-type_{{type}}}}{{?disabled: is-disabled}}"
```

The inner `{{color}}` inside a conditional class is valid and produces the enum value:
- `color="primary"` → `has-color_primary`
- `color` absent → nothing appended

Boolean props produce a fixed class:
- `disabled=true` → `is-disabled`
- `disabled` absent/false → nothing

---

### 4. Named slot
```
{{slot:name}}
```
Renders the content passed to the named slot. If no content is passed, renders nothing.

**Example:**
```html
<div class="hero-media">{{slot:media}}</div>
```

---

### 5. Named slot with fallback
```
{{slot:name:fallback content}}
```
Renders the slot content if provided; falls back to the literal text after the second `:` if the slot is empty.

**Example:**
```html
<div class="card-body">{{slot:default:No content provided}}</div>
```

---

## Attribute directive
```
{{?propName:attr="value"}}
```
Conditionally renders an attribute if the prop is truthy. The value can itself contain an interpolation.

**Examples:**
```html
{{?url:href="{{url}}"}}
{{?disabled:aria-disabled="true"}}
{{?aria_label:aria-label="{{aria_label}}"}}
```

---

## Concrete example: button.html (first 6 lines)

```html
<{{tag|default:button}}
  class="c--button{{?color: has-color_{{color}}}}{{?size: has-size_{{size}}}}{{?type: has-type_{{type}}}}{{?disabled: is-disabled}}{{?iconLeft: has-icon-left}}{{?iconRight: has-icon-right}}"
  {{?disabled:aria-disabled="true"}}
  {{?url:href="{{url}}"}}
  {{?aria_label:aria-label="{{aria_label}}"}}
>{{?iconLeft:<span class="button-icon button-icon_left"></span>}}{{slot:default:{{label}}}}{{?iconRight:<span class="button-icon button-icon_right"></span>}}</{{tag|default:button}}>
```

This demonstrates:
- Tag interpolation (`{{tag|default:button}}` in both open and close position)
- Multiple conditional classes chained in a single `class="..."` string
- Attribute directives for `aria-disabled`, `href`, and `aria-label`
- Inline conditional element `{{?iconLeft:<span ...>}}`
- Slot with prop fallback `{{slot:default:{{label}}}}` — if no slot content, renders the `label` prop value

---

## Sub-element naming convention

Sub-elements inside a component use `.<name>-<element>` pattern:

```html
<div class="c--card">
  <div class="card-header">
    <h2 class="card-title">{{heading}}</h2>
  </div>
  <div class="card-body">{{slot:default}}</div>
  <div class="card-footer">{{slot:footer}}</div>
</div>
```

Never use BEM `__` (double underscore) or Bootstrap-style naming. Only kebab-case with the component name as prefix.
