---
name: joui-component-html
description: "Generate a .html template file for a JoUI component from its .schema.json. Use after joui-component-schema. Input: the component's .schema.json path. Output: packages/core/components/<name>/<name>.html"
---

# joui-component-html

Generate a `.html` template file for a JoUI component from its schema.

## Input

Path to the component's `.schema.json` file (e.g. `packages/core/components/chip/chip.schema.json`)

## Output

`packages/core/components/<name>/<name>.html`

## Workflow

1. **Read the schema** at the provided path — extract: component name, all props (with types and defaults), all slots
2. **Read `references/template-syntax.md`** — understand all 5 JoUI template syntax forms before writing
3. **Read `packages/core/components/button/button.html`** — use as the pattern reference for how props map to template variables and conditional classes
4. **Map props to template variables:**
   - String/number props → `{{propName}}` or `{{propName|default:value}}`
   - Boolean/enum props → conditional classes `{{?propName: has-class_value}}`
   - Enum props that affect CSS class → `{{?propName: has-propName_{{propName}}}}`
5. **Write the HTML template** with:
   - Root element having class `c--<name>` and all conditional class directives
   - Sub-elements using `.<name>-<element>` naming
   - Slots mapped to `{{slot:name}}` or `{{slot:name:fallback text}}`

## Rules

- Root element **must** have `class="c--<name>..."` — the root class is always `c--<name>`
- Sub-elements use `.<name>-<element>` pattern (e.g. `.chip-label`, `.chip-icon`)
- Conditional classes use `{{?propName: has-propName_{{propName}}}}` — never hardcoded class strings for enum values
- No hardcoded text that should come from a prop — use `{{propName}}` or `{{slot:default:fallback}}`
- No JavaScript in component HTML — components are purely declarative templates
- Boolean props generate `is-state` or `has-feature` classes: `{{?disabled: is-disabled}}`
- Attribute directives use `{{?propName:attr="value"}}` syntax (e.g. `{{?url:href="{{url}}"}}`)

## References

- [references/template-syntax.md](references/template-syntax.md) — all syntax forms with examples
