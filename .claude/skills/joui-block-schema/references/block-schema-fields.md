# Block Schema Fields Reference

Every JoUI block schema (`packages/core/blocks/<name>/<name>.schema.json`) must contain exactly these 11 fields — the same structure as component schemas with key differences noted below.

---

## Key Differences vs Component Schemas

| Field | Components | Blocks |
|-------|-----------|--------|
| `category` | `"actions"`, `"display"`, `"feedback"`, `"forms"`, `"navigation"`, `"data"` | ALWAYS `"blocks"` |
| `dependencies` | Always `[]` | Lists component names this block uses |
| Output directory | `packages/core/components/<name>/` | `packages/core/blocks/<name>/` |

---

## Required Fields

### 1. `name`
- **Type:** `string`
- **Required:** yes
- **Description:** Block name in kebab-case. Matches directory name and file prefix.
- **Example:** `"name": "hero"`

---

### 2. `category`
- **Type:** `string`
- **Required:** yes
- **Value:** ALWAYS `"blocks"` — no exceptions
- **Example:** `"category": "blocks"`

---

### 3. `version`
- **Type:** `string`
- **Required:** yes
- **Value:** Always `"1.0.0"` for new blocks
- **Example:** `"version": "1.0.0"`

---

### 4. `status`
- **Type:** `string`
- **Required:** yes
- **Value:** `"stable"` for all new blocks
- **Example:** `"status": "stable"`

---

### 5. `description`
- **Type:** `string`
- **Required:** yes
- **Description:** One sentence describing the block's purpose and layout.
- **Example:** `"description": "Page hero section with a headline, subtitle, CTA buttons, and an optional media slot."`

---

### 6. `props`
- **Type:** `Record<string, PropDefinition>`
- **Required:** yes (may be `{}`)
- **Description:** Block-level props — layout variants, top-level content strings (title, subtitle), not per-component props.

**Example:**
```json
"props": {
  "title": {
    "type": "string",
    "required": true,
    "description": "Primary headline text."
  },
  "subtitle": {
    "type": "string",
    "description": "Supporting text below the headline."
  },
  "variant": {
    "type": "string",
    "enum": ["centered", "split"],
    "description": "Layout variant."
  }
}
```

---

### 7. `slots`
- **Type:** `Record<string, string>`
- **Required:** yes (use `{}` if no slots)
- **Description:** Named slots for rich content areas (media, custom CTA, sidebar).
- **Example:**
```json
"slots": {
  "media": "Optional media area (image, video, illustration)."
}
```

---

### 8. `tokensUsed`
- **Type:** `string[]`
- **Required:** yes (use `[]` if no tokens)
- **Description:** Block's own public vars and layout tokens referenced.
- **Example:**
```json
"tokensUsed": [
  "--hero_bg",
  "--hero_c",
  "--body_bg",
  "--body_c",
  "--size_700",
  "--size_900",
  "--f-s_8",
  "--f-w_bold"
]
```

---

### 9. `dependencies`
- **Type:** `string[]`
- **Required:** yes
- **Description:** Component names this block composes. NEVER block names.
- **Valid component names:** `button`, `card`, `alert`, `badge`, `avatar`, `table`, `pagination`, `input`, `textarea`, `select`, `modal`, `tabs`, `accordion`, `dropdown`
- **Example:**
```json
"dependencies": ["button"]
```

---

### 10. `a11y`
- **Type:** `string[]`
- **Required:** yes
- **Description:** Accessibility requirements. Include landmark roles, heading hierarchy, and keyboard notes.
- **Example:**
```json
"a11y": [
  "Landmark region: <section> provides sectioning context",
  "Heading hierarchy: h1.hero-title is the page's primary heading — only one hero per page",
  "CTA buttons have descriptive labels; no icon-only buttons"
]
```

---

### 11. `aiHint`
- **Type:** `string`
- **Required:** yes
- **Description:** Concise AI guidance on which page contexts and positions this block is intended for.
- **Example:** `"aiHint": "Use as the top section of landing pages. title is required. Use variant=centered for single-column layouts, variant=split for side-by-side content+media."`

---

## Concrete Example: hero.schema.json

```json
{
  "name": "hero",
  "category": "blocks",
  "version": "1.0.0",
  "status": "stable",
  "description": "Page hero section with a headline, subtitle, CTA buttons, and an optional media slot. Supports centered and split layout variants.",
  "props": {
    "title": {
      "type": "string",
      "required": true,
      "description": "Primary headline text rendered as h1."
    },
    "subtitle": {
      "type": "string",
      "description": "Supporting text below the headline."
    },
    "variant": {
      "type": "string",
      "enum": ["centered", "split"],
      "description": "Layout variant. centered aligns content to center; split uses a two-column grid."
    }
  },
  "slots": {
    "media": "Optional media area (image, video, illustration) beside or below the content."
  },
  "tokensUsed": [
    "--hero_bg",
    "--hero_c",
    "--hero_padding_y",
    "--body_bg",
    "--body_c",
    "--c_muted",
    "--h_c",
    "--size_300",
    "--size_400",
    "--size_500",
    "--size_600",
    "--size_700",
    "--size_900",
    "--f-s_4",
    "--f-s_8",
    "--f-w_bold"
  ],
  "dependencies": ["button"],
  "a11y": [
    "Landmark region: <section> provides sectioning context",
    "Heading hierarchy: h1.hero-title is the page's primary heading — only one hero per page",
    "CTA buttons have descriptive labels; no icon-only buttons"
  ],
  "aiHint": "Use as the top section of landing pages. title is required. Use variant=centered for single-column layouts, variant=split for side-by-side content+media."
}
```
