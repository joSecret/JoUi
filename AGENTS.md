# AGENTS.md

## Project Overview

This is an Astro (v6) project using TypeScript with strict mode. It uses path aliases (`@c/*`, `@ui/*`, `@l/*`, `@s/*`, `@p/*`) defined in tsconfig.json.

## Build Commands

```bash
# Development
npm run dev              # Start dev server at localhost:4321

# Production
npm run build            # Build to ./dist/
npm run preview          # Preview production build locally

# Astro CLI
npm run astro -- [args]  # Run Astro CLI commands
npm run astro check      # Type-check all files
npm run astro add [pkg]  # Add integrations (e.g., react, tailwind)

# Custom joui command
npm run joui             # Run scripts/joui.js
```

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** - All tsconfig strictness checks apply
- Use explicit types for function parameters and return values
- Prefer `interface` over `type` for object shapes
- Use `unknown` instead of `any`; avoid `any` unless absolutely necessary
- Enable `strictNullChecks` - always check for null/undefined

### Astro Components (.astro)

- Frontmatter uses standard TypeScript (no special syntax)
- Use PascalCase for component names
- Props should be typed with an interface in the frontmatter
- Prefer CSS custom properties or scoped styles over utility frameworks

### Naming Conventions

| Type              | Convention       | Example                    |
|-------------------|------------------|----------------------------|
| Components        | PascalCase       | `UserProfile.astro`        |
| Variables         | camelCase        | `userName`, `isActive`     |
| Constants         | SCREAMING_SNAKE  | `MAX_RETRIES`, `API_URL`   |
| Types/Interfaces  | PascalCase       | `UserData`, `ApiResponse`   |
| Files (components)| PascalCase       | `Header.astro`, `Button.tsx` |
| Files (utilities) | kebab-case       | `date-utils.ts`, `api-client.ts` |
| CSS classes       | kebab-case       | `.user-card`, `.btn-primary` |
| CSS state modifiers | `is--*` / `has--*` | `.is--align-center`, `.has--icon` |

**`is--`** — starea sau varianta vizuală a elementului: `.is--align-center`, `.is--open`, `.is--vertical`
**`has--`** — ce conține elementul: `.has--icon`, `.has--label`, `.has--ellipsis`

### File Structure

```
src/
├── pages/           # Astro pages (routes)
├── components/      # Reusable Astro components
│   └── ui/          # UI components ( Accordion.astro, Badge.astro, etc.)
├── layouts/         # Page layouts
├── styles/          # Global styles
└── lib/             # Utilities, helpers, TypeScript modules
```

### Imports

- Use path aliases: `@c/*`, `@ui/*`, `@l/*`, `@s/*`, `@p/*`
- Group imports: 1) Node built-ins, 2) External packages, 3) Internal modules
- Use `import type` for type-only imports to improve tree-shaking

```typescript
import { readFile } from 'node:fs/promises';
import { z } from 'zod';
import { type User } from '@/types';
import { formatDate } from '@/lib/date-utils';
```

### Error Handling

- Always handle promise rejections with try/catch or `.catch()`
- Use typed error objects when possible
- Let TypeScript errors surface during development (don't use `@ts-ignore`)

```typescript
try {
  const data = await fetchUser(id);
} catch (error) {
  console.error('Failed to fetch user:', error);
  throw new Error('User fetch failed', { cause: error });
}
```

### Astro Best Practices

- Keep component frontmatter minimal; move complex logic to `.ts` files
- Use Astro's built-in `data-*` attributes instead of external libraries for simple interactivity
- Prefer server-side rendering (SSR) over client-side hydration when possible
- Use `<slot />` for composition, `<slot name="..." />` for named slots

### HTML/Accessibility

- Always include `lang` attribute on `<html>`
- Use semantic HTML elements (`<main>`, `<nav>`, `<article>`, etc.)
- Include `alt` text on images and `aria-label` on icon-only buttons
- Ensure sufficient color contrast (WCAG AA minimum)

## Git Workflow

- Commit messages follow conventional format: `type(scope): description`
- Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`
- Keep commits atomic and focused

## Editor Setup

- VS Code with [Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) recommended
- The project uses `astro/tsconfigs/strict` - enable "strict" mode in your editor

## MCP Servers (Documentation)

For AI-assisted development with up-to-date documentation:

| MCP Server | Use For | Setup |
|-----------|---------|-------|
| Context7 | General library docs (React, Next.js, etc.) | Add `"use context7"` to prompts |
| Astro Docs | Official Astro documentation | `url: https://mcp.docs.astro.build/mcp` |

**Setup example** (Cursor, VS Code, Claude Code):
```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
```

Get free API key at https://context7.com/dashboard for higher rate limits.