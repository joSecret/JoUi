---
name: joui-block-html
description: "Generate a .html template for a JoUI block from its schema. Use after joui-block-schema. Input: the block's .schema.json. Output: packages/core/blocks/<name>/<name>.html"
---

# joui-block-html

Generate a `.html` template for a JoUI block. Blocks compose JoUI components using `{{component:name props={...}}}` directives.

## Input

Path to the block's `.schema.json` file (e.g. `packages/core/blocks/hero/hero.schema.json`)

## Output

`packages/core/blocks/<name>/<name>.html`

## Workflow

1. **Read `references/block-template-syntax.md`** — understand all template forms, especially the component-ref syntax and the `{{block:...}}` prohibition
2. **Read the schema** — extract: block name, all props (layout variants, content strings), `dependencies` (which components to reference), and slots
3. **Map each dependency to a `{{component:name props={...}}}` directive** — each component in `dependencies` gets at least one component reference in the template
4. **Map block props to `{{variable}}` template variables** — title, subtitle, and other string props render as inline interpolations

## Rules

- Root element **must** have `class="c--<block-name>{{?variant: has-variant_{{variant}}}}"` (or similar conditional class pattern)
- Sub-elements inside the block use `.<block>-<element>` naming (e.g. `.hero-content`, `.hero-title`, `.hero-cta`)
- Component refs use `{{component:name props={"key": "literal-value"}}}` syntax — props values are **string literals only** in Phase 3 MVP (no `{{var}}` inside JSON props)
- **`{{block:...}}` is STRICTLY FORBIDDEN inside block HTML** — `parse-block.ts` throws a build error if any `{{block:...}}` directive is found. Blocks do NOT reference other blocks.
- No JavaScript in block HTML
- Slot areas use `{{slot:name}}` — blocks often have a media or aside slot

## IMPORTANT: `{{block:...}}` is FORBIDDEN

Block HTML must NEVER contain `{{block:...}}` references. If `parse-block.ts` encounters a block-to-block reference, it throws:

```
Error: Block "X" contains a block reference "{{block:Y}}" which is not allowed.
Blocks can only reference components using {{component:name props={...}}}.
```

There is no workaround — the architecture enforces a strict Component → Block → Page hierarchy. Blocks compose components; pages compose blocks; never mix levels.

## Component ref syntax (Phase 3 MVP)

```
{{component:name props={"key": "literal-value", "key2": "another-literal"}}}
```

- `name` is the component name (matches a directory in `packages/core/components/`)
- `props` is a JSON object with **string literal values only** — no `{{variable}}` interpolation inside the JSON in Phase 3
- Use `"true"` / `"false"` as strings for boolean props in Phase 3

**Correct:**
```html
{{component:button props={"color": "primary", "label": "Get started", "tag": "a", "url": "/docs"}}}
{{component:button props={"color": "secondary", "type": "outline", "label": "Learn more", "tag": "a", "url": "/components"}}}
```

## References

- [references/block-template-syntax.md](references/block-template-syntax.md) — all syntax forms with hero block example
