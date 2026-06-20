---
name: joui-component-schema
description: "Generate a valid .schema.json for a new JoUI component from a natural language description. Use when starting to create a new component from scratch. Input: component name (kebab-case) + natural language description of what it does. Output: packages/core/components/<name>/<name>.schema.json"
---

# joui-component-schema

Generate a valid `.schema.json` for a new JoUI component from a natural language description.

## Input

- **name** — component name in kebab-case (e.g. `chip`, `avatar`, `progress-bar`)
- **description** — natural language description of what the component does, its variants, and key behaviors

## Output

`packages/core/components/<name>/<name>.schema.json`

## Workflow

1. **Read `references/schema-fields.md`** — understand every required field, types, and constraints before writing anything
2. **Read `references/button-schema.json`** — use as the canonical reference for field shape and value format
3. **Analyze the description** — identify:
   - What props the component needs (include color, size, type/variant if applicable)
   - What slots it exposes (default text/content, named slots like `icon`, `media`)
   - Which CSS token names it will use (use `--<name>_<prop>` public var convention)
   - Accessibility requirements (keyboard navigation, ARIA roles, screen reader notes)
4. **Write the schema** to `packages/core/components/<name>/<name>.schema.json` with all 11 required fields

## Rules

- All 11 required fields must be present: `name`, `category`, `version`, `status`, `description`, `props`, `slots`, `tokensUsed`, `dependencies`, `a11y`, `aiHint`
- `version` is always `"1.0.0"`
- `status` is always `"stable"` for new components
- `category` must be one of: `"actions"`, `"display"`, `"feedback"`, `"forms"`, `"navigation"`, `"data"`
- Standard `color` enum: `"primary"`, `"secondary"`, `"accent"`, `"success"`, `"warning"`, `"danger"`, `"info"`, `"light"`, `"dark"`
- Standard `size` enum: `"sm"`, `"md"`, `"lg"`
- `dependencies` must be `[]` — components do not reference other components
- `aiHint` must be one concise instruction for AI agents on when/how to use this component correctly
- Required props must have `"required": true` in their object
- Props with enum values must list the full `"enum": [...]` array
- `tokensUsed` lists the `--<name>_<prop>` public vars this component exposes plus any semantic tokens it references

## References

- [references/schema-fields.md](references/schema-fields.md) — all 11 fields documented with types and examples
- [references/button-schema.json](references/button-schema.json) — canonical complete example
