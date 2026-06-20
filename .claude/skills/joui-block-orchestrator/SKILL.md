---
name: joui-block-orchestrator
description: "Generate a complete new JoUI block (all 5 files) from a natural language description. Use when a developer asks to create a new block that composes existing JoUI components. Input: block name + description of what it does and which components it uses. Output: 5 files in packages/core/blocks/<name>/ that pass pnpm --filter core build."
---

# joui-block-orchestrator

Generate a complete new JoUI block — all 5 source files — from a natural language description. This is the top-level skill to call when creating a new block from scratch.

## Input

- **name** — block name in kebab-case (e.g. `pricing-band`, `testimonials`, `newsletter-signup`)
- **description** — natural language description of what the block does, which JoUI components it uses, and the expected layout

## Output

5 files in `packages/core/blocks/<name>/`:
- `packages/core/blocks/<name>/<name>.schema.json`
- `packages/core/blocks/<name>/<name>.html`
- `packages/core/blocks/<name>/<name>.css`
- `packages/core/blocks/<name>/<name>.examples.json`
- `packages/core/blocks/<name>/<name>.md`

## Workflow

1. **Call joui-block-schema** with the block name and description → produces `<name>.schema.json`
2. **Call joui-block-html** with the path to the generated schema → produces `<name>.html`
3. **Call joui-block-css** with the schema and HTML paths → produces `<name>.css`
4. **Generate `<name>.examples.json`** — same format as component examples (id, label, props array), but 2–3 examples are sufficient for blocks (default + one per layout variant)
5. **Generate `<name>.md`** — same format as component docs, but add a `## Dependencies` section listing the component names from the schema's `dependencies` field
6. **Run `pnpm --filter core build`** to validate all 5 generated files pass the build pipeline (validateSchema, validateCssTokens, parseTemplate, block-ref enforcement all run automatically)
7. **Report the result:**
   - List all 5 generated file paths
   - Report build exit code (0 = pass, non-zero = fail)
   - If build fails: include the specific error message so the developer can fix it

## Rules

- Never skip step 6 — build validation is mandatory. The build catches schema errors, CSS token violations, template syntax errors, and forbidden `{{block:...}}` refs.
- Always report the build exit code. A block is not complete until `pnpm --filter core build` exits 0.
- **Before generating:** verify that all components listed in `dependencies` exist in `packages/core/components/`. If a required component does not exist, run `joui-component-orchestrator` first to create it, then return to this workflow.
- Sub-skills must be called in order (1 → 2 → 3 → 4 → 5).
- If the build fails: report the exact error message from the build output, do not attempt to guess the fix.
