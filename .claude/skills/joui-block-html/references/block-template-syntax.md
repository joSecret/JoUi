# Block Template Syntax Reference

Block HTML templates use the same `{{...}}` syntax as component templates, with one critical addition: the `{{component:name props={...}}}` directive for composing JoUI components. And one absolute prohibition: `{{block:...}}` is FORBIDDEN inside blocks.

---

## All 5 Standard Template Syntax Forms (same as components)

### 1. Variable interpolation
```
{{variable}}
```
Renders the prop value directly.

### 2. Variable with default fallback
```
{{variable|default:fallback}}
```
Renders prop or falls back to literal text.

### 3. Conditional class
```
{{?condition: has-class_value}}
```
Appends CSS class if prop is truthy.

### 4. Named slot
```
{{slot:name}}
```
Renders named slot content if provided.

### 5. Named slot with fallback
```
{{slot:name:fallback text}}
```
Renders slot or fallback.

---

## Block-specific: Component reference directive

```
{{component:name props={"key": "literal-value"}}}
```

Inlines a rendered JoUI component at that position. The build pipeline calls `renderHtml()` for the named component using the provided props.

**Rules for Phase 3 MVP:**
- `name` must match a directory in `packages/core/components/`
- `props` values are **string literals only** — no template variable interpolation inside the JSON
- Use `"true"` / `"false"` (strings) for boolean props

**Examples:**
```html
{{component:button props={"color": "primary", "label": "Get started", "tag": "a", "url": "/docs"}}}
{{component:card props={"heading": "Feature title", "default": "Feature description text."}}}
{{component:badge props={"label": "New", "color": "success"}}}
```

---

## `{{block:...}}` is ABSOLUTELY FORBIDDEN

The following syntax is **not allowed** inside any block HTML file:

```
{{block:another-block}}  ← FORBIDDEN
```

`parse-block.ts` scans block HTML for `{{block:...}}` patterns using a regex and throws:

```
Error: Block "X" contains a block reference "{{block:Y}}" which is not allowed.
Blocks can only reference components using {{component:name props={...}}}.
```

**Why:** JoUI enforces a strict 3-level hierarchy:
- Components → composed by blocks
- Blocks → composed by pages
- Pages → top-level only

Allowing blocks to reference other blocks would create circular dependency risks, unbounded composition depth, and build-time resolution loops. The prohibition is intentional and permanent.

---

## Concrete example: hero.html

```html
<section class="c--hero{{?variant: has-variant_{{variant}}}}">
  <div class="hero-inner">
    <div class="hero-content">
      <h1 class="hero-title">{{title}}</h1>
      <p class="hero-subtitle">{{subtitle|default:}}</p>
      <div class="hero-cta">
        {{component:button props={"color": "primary", "label": "Get started", "tag": "a", "url": "/docs"}}}
        {{component:button props={"color": "secondary", "type": "outline", "label": "Learn more", "tag": "a", "url": "/components"}}}
      </div>
    </div>
    <div class="hero-media">{{slot:media}}</div>
  </div>
</section>
```

This example demonstrates:
- Root `.c--hero` with conditional variant class
- Sub-elements `.hero-inner`, `.hero-content`, `.hero-title`, `.hero-cta`, `.hero-media`
- Two `{{component:button ...}}` refs with all-literal props
- `{{title}}` and `{{subtitle|default:}}` prop interpolations
- `{{slot:media}}` named slot

---

## Sub-element naming in blocks

Sub-elements use `.<block>-<element>` pattern — same as components:

```html
<div class="c--features-grid">
  <div class="features-grid-header">
    <h2 class="features-grid-title">{{title}}</h2>
  </div>
  <div class="features-grid-items">
    {{component:card props={"heading": "Feature 1", "default": "Description."}}}
    {{component:card props={"heading": "Feature 2", "default": "Description."}}}
  </div>
</div>
```

Never use BEM `__` or Bootstrap-style naming in blocks.
