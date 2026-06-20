# ComponentSchema Fields Reference

Every JoUI component schema (`packages/core/components/<name>/<name>.schema.json`) must contain exactly these 11 fields.

---

## Required Fields

### 1. `name`
- **Type:** `string`
- **Required:** yes
- **Description:** Component name in kebab-case. Must match the directory name and file prefix.
- **Example:** `"name": "chip"`

---

### 2. `category`
- **Type:** `string`
- **Required:** yes
- **Description:** Functional category for catalog grouping.
- **Valid values (components only):**
  - `"actions"` — interactive elements (buttons, links, toggles)
  - `"display"` — presentational (card, badge, avatar, tag)
  - `"feedback"` — status/alerts (alert, toast, spinner, progress)
  - `"forms"` — input elements (input, select, textarea, checkbox)
  - `"navigation"` — nav elements (tabs, breadcrumb, pagination, dropdown)
  - `"data"` — data display (table, list, stat)

> NOTE: `"blocks"` is reserved for blocks only — components must NOT use it.

- **Example:** `"category": "display"`

---

### 3. `version`
- **Type:** `string`
- **Required:** yes
- **Description:** Semantic version. Always `"1.0.0"` for new components.
- **Example:** `"version": "1.0.0"`

---

### 4. `status`
- **Type:** `string`
- **Required:** yes
- **Valid values:** `"stable"` | `"beta"` | `"experimental"` | `"deprecated"`
- **Description:** Lifecycle status. Use `"stable"` for all new components.
- **Example:** `"status": "stable"`

---

### 5. `description`
- **Type:** `string`
- **Required:** yes
- **Description:** One sentence describing what the component renders and what it's for.
- **Example:** `"description": "Small label element for tagging content with categories or statuses."`

---

### 6. `props`
- **Type:** `Record<string, PropDefinition>`
- **Required:** yes (may be `{}` if component has no props)
- **Description:** Map of prop names to their definitions.

**PropDefinition fields:**
- `type`: `"string"` | `"boolean"` | `"number"`
- `required`: `true` (omit if optional — do NOT set to `false`)
- `default`: default value (omit if no default)
- `enum`: string array of valid values (for string props with fixed options)
- `description`: what the prop controls

**Standard enum values (use exactly these):**

Color enum (use when component has color variants):
```json
"enum": ["primary", "secondary", "accent", "success", "warning", "danger", "info", "light", "dark"]
```

Size enum (use when component has size variants):
```json
"enum": ["sm", "md", "lg"]
```

**Example:**
```json
"props": {
  "label": {
    "type": "string",
    "required": true,
    "description": "Visible text content."
  },
  "color": {
    "type": "string",
    "enum": ["primary", "secondary", "accent", "success", "warning", "danger", "info", "light", "dark"],
    "description": "Color variant."
  },
  "size": {
    "type": "string",
    "enum": ["sm", "md", "lg"],
    "description": "Size variant."
  },
  "dismissible": {
    "type": "boolean",
    "default": false,
    "description": "Whether the component can be dismissed."
  }
}
```

---

### 7. `slots`
- **Type:** `Record<string, string>`
- **Required:** yes (use `{}` if no slots)
- **Description:** Map of slot names to their description strings.
- **Conventions:** `"default"` is the primary content slot. Named slots describe their purpose.
- **Example:**
```json
"slots": {
  "default": "Primary content",
  "icon": "Optional icon rendered before the label"
}
```

---

### 8. `tokensUsed`
- **Type:** `string[]`
- **Required:** yes (use `[]` if no tokens used)
- **Description:** List of CSS custom properties this component reads or exposes. Include:
  - The component's own public vars (`--<name>_<prop>`)
  - Semantic tokens referenced as fallbacks (`--body_c`, `--body_bg`, `--br`, etc.)
- **Example:**
```json
"tokensUsed": [
  "--chip_c",
  "--chip_bg",
  "--chip_b-c",
  "--body_c",
  "--body_bg",
  "--br",
  "--f-s_0",
  "--size_100",
  "--size_300"
]
```

---

### 9. `dependencies`
- **Type:** `string[]`
- **Required:** yes
- **Value:** ALWAYS `[]` for components
- **Description:** Components do not reference other components — dependencies is always an empty array. (Only blocks use non-empty dependencies.)
- **Example:** `"dependencies": []`

---

### 10. `a11y`
- **Type:** `string[]`
- **Required:** yes (use `[]` if no specific a11y notes)
- **Description:** List of accessibility requirements and notes. Include:
  - Keyboard interaction model
  - ARIA roles or attributes used
  - Screen reader behavior
  - Color-independence notes (color is not the only signal)
- **Example:**
```json
"a11y": [
  "Keyboard focusable when interactive",
  "Uses role='status' for live region announcements",
  "Color is not the only differentiator — icon or text label always present"
]
```

---

### 11. `aiHint`
- **Type:** `string`
- **Required:** yes
- **Description:** One concise instruction for AI agents on when and how to use this component correctly. Should answer: "When should I use this vs alternatives?" or "What is the most important constraint an AI must know?"
- **Example:** `"aiHint": "Use for short metadata labels (categories, statuses). For longer descriptive text use Badge instead of Chip. Always pair color with a text label for accessibility."`
