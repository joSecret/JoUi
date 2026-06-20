---
name: joui-block-schema
description: "Generate a valid .schema.json for a new JoUI block from a natural language description. Use when creating a new block that composes JoUI components. Input: block name (kebab-case) + natural language description of what the block does. Output: packages/core/blocks/<name>/<name>.schema.json"
---

# joui-block-schema

Generate a valid `.schema.json` for a new JoUI block — a composition of existing JoUI components plus layout.

## Input

- **name** — block name in kebab-case (e.g. `pricing-band`, `testimonials`, `newsletter-signup`)
- **description** — natural language description of what the block does, which components it uses, and its layout/variants

## Output

`packages/core/blocks/<name>/<name>.schema.json`

## Workflow

1. **Read `references/block-schema-fields.md`** — understand every required field and block-specific constraints
2. **Analyze the description** — identify:
   - What props the block exposes at the block level (title, subtitle, variant, layout)
   - Which JoUI components will be composed in this block (these go in `dependencies`)
   - What slots the block provides for rich content
   - Accessibility requirements (landmark roles, heading hierarchy)
3. **Determine dependencies** — list the component names from `packages/core/components/` that this block will reference in its HTML. Never list other block names.
4. **Write the schema** to `packages/core/blocks/<name>/<name>.schema.json` with all 11 required fields

## Rules

- All 11 required fields must be present: `name`, `category`, `version`, `status`, `description`, `props`, `slots`, `tokensUsed`, `dependencies`, `a11y`, `aiHint`
- `category` MUST be `"blocks"` — this is not optional and never one of the component category values
- `version` is always `"1.0.0"`
- `status` is always `"stable"` for new blocks
- `dependencies` lists component names (strings), NOT block names — blocks depend on components, not on other blocks
- Valid components to reference: `button`, `card`, `alert`, `badge`, `avatar`, `table`, `pagination`, `input`, `textarea`, `select`, `modal`, `tabs`, `accordion`, `dropdown`
- `aiHint` must state which page contexts this block suits (e.g. "Use as the top section of landing pages")
- Props are block-level overrides only — the block's layout props and content props (not per-component props)
- `tokensUsed` lists the block's own public vars (`--<block>_<prop>`) and layout tokens used

## References

- [references/block-schema-fields.md](references/block-schema-fields.md) — all fields with block-specific values and hero example
