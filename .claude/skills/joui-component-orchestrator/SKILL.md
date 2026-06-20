---
name: joui-component-orchestrator
description: "Generate a complete new JoUI component (all 5 files) from a natural language description. Use when a developer asks to create a new component. Input: component name + description. Output: 5 files in packages/core/components/<name>/ that pass pnpm --filter core build."
---

# joui-component-orchestrator

Generate a complete new JoUI component — all 5 source files — from a natural language description. This is the top-level skill to call when creating a new component from scratch.

## Input

- **name** — component name in kebab-case (e.g. `chip`, `avatar`, `progress-bar`)
- **description** — natural language description of what the component does, its variants, and expected behaviors

## Output

5 files in `packages/core/components/<name>/`:
- `packages/core/components/<name>/<name>.schema.json`
- `packages/core/components/<name>/<name>.html`
- `packages/core/components/<name>/<name>.css`
- `packages/core/components/<name>/<name>.examples.json`
- `packages/core/components/<name>/<name>.md`

## Workflow

1. **Call joui-component-schema** with the component name and description → produces `<name>.schema.json`
2. **Call joui-component-html** with the path to the generated schema → produces `<name>.html`
3. **Call joui-component-css** with the schema and HTML paths → produces `<name>.css`
4. **Call joui-component-examples** with the schema path → produces `<name>.examples.json`
5. **Call joui-component-docs** with the schema path → produces `<name>.md`
6. **Run `pnpm --filter core build`** to validate all 5 generated files pass the build pipeline (validateSchema, validateCssTokens, parseTemplate all run automatically)
7. **Report the result:**
   - List all 5 generated file paths
   - Report build exit code (0 = pass, non-zero = fail)
   - If build fails: include the specific error message so the developer can fix it

## Rules

- Never skip step 6 — build validation is mandatory. The build catches schema errors, CSS token violations, and template syntax errors that are invisible by eye.
- Always report the build exit code. A component is not complete until `pnpm --filter core build` exits 0.
- If the build fails: report the exact error message from the build output. Do not attempt to guess the fix — report and let the developer decide.
- Sub-skills must be called in order (1 → 2 → 3 → 4 → 5) — later skills depend on files written by earlier ones.
