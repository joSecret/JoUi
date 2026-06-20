---
name: joui-component-examples
description: "Generate .examples.json for a JoUI component from its schema. Use after joui-component-schema. Input: the component's .schema.json. Output: packages/core/components/<name>/<name>.examples.json"
---

# joui-component-examples

Generate `.examples.json` for a JoUI component — an array of example instances used by the catalog site for showcase and playground.

## Input

Path to the component's `.schema.json` file (e.g. `packages/core/components/chip/chip.schema.json`)

## Output

`packages/core/components/<name>/<name>.examples.json`

## Workflow

1. **Read the schema** — extract all props, their types, enum values, defaults, and required status
2. **Generate 6–8 examples** covering:
   - `"default"` — no optional props; uses only required props
   - One example per color enum value (if component has `color` prop)
   - One example per size enum value (if component has `size` prop)
   - One example per type/style enum value (if component has `type` prop)
   - Edge cases: disabled state, with icon, with slots, long text
3. **Write the JSON array** to the output file

## Rules

- The first entry `id` must be `"default"` — always
- Every entry must have: `id` (string), `label` (string), `props` (object)
- All required props must be included in every example's `props` object
- Prop values must exactly match the schema types:
  - string prop → `"string value"` (never a number)
  - boolean prop → `true` or `false` (never a string)
  - enum prop → one of the exact enum values listed in the schema
- Cover all enum values across the example set (every color value appears in at least one example)
- `id` values are kebab-case descriptors: `"primary"`, `"size-sm"`, `"outline"`, `"with-icon-left"`, `"disabled"`
- `label` is a human-readable name shown in the catalog: `"Primary"`, `"Small"`, `"Outline"`, `"With icon"`

## Example output structure

```json
[
  {
    "id": "default",
    "label": "Default",
    "props": {
      "label": "Click me"
    }
  },
  {
    "id": "primary",
    "label": "Primary",
    "props": {
      "label": "Click me",
      "color": "primary"
    }
  },
  {
    "id": "size-sm",
    "label": "Small",
    "props": {
      "label": "Click me",
      "size": "sm"
    }
  },
  {
    "id": "outline",
    "label": "Outline",
    "props": {
      "label": "Click me",
      "color": "primary",
      "type": "outline"
    }
  },
  {
    "id": "disabled",
    "label": "Disabled",
    "props": {
      "label": "Click me",
      "color": "primary",
      "disabled": true
    }
  }
]
```
