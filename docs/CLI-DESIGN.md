# CLI Design — `joui` (Public, Not Yet Implemented)

This document describes the public CLI that ships components to consumer projects, shadcn-style. The scaffold generator (`npm run joui new`) is already implemented and lives in this repo; that is an internal dev tool and is separate from the public CLI described here.

## Commands

```bash
npx joui init                                 # Create joui.config.json in the consumer project
npx joui add <name> --platform <astro|drupal> # Install a component
npx joui list                                 # List components available in the registry
npx joui update <name>                        # Re-fetch the latest version of an installed component
npx joui diff <name>                          # Show local vs. registry differences
```

## Consumer config — `joui.config.json`

```json
{
  "platform": "astro",
  "paths": {
    "astro": "src/components/ui",
    "drupal": "web/themes/custom/{theme}/components"
  },
  "registry": "https://<registry-host>/registry"
}
```

Config is optional; flags override config; config overrides built-in defaults.

## Registry shape

One JSON entry per component:

```json
{
  "name": "button",
  "version": "1.0.0",
  "dependencies": [],
  "files": {
    "shared": ["button.css", "button.md"],
    "astro": ["Button.astro", "button.astro.md"],
    "drupal": ["button.twig", "button.component.yml", "button.js", "button.drupal.md"]
  }
}
```

Rules:

- `dependencies` contains **only other joui component names**. No npm packages, no external libraries.
- `thumbnail.svg` and `*.demo.mdx` are not in any file list — they stay in the `joui` repo and power the docs site only.
- `files.shared` is always downloaded regardless of `--platform`.
- `files[<platform>]` is downloaded only for the matching platform.

## `add` behavior

1. Read `joui.config.json` from `cwd`. Error if missing and neither `--platform` nor `--path` is provided.
2. Fetch `<registry>/<name>.json`.
3. Resolve `dependencies` recursively; fail fast on cycles or missing entries.
4. For each resolved component, compute the file set = `files.shared ∪ files[<platform>]`.
5. Write each file to `<paths[platform]>/<component-name>/<file>` (relative to `cwd`).
6. Skip `*.demo.mdx` unconditionally.
7. Report installed components and their destination paths.

## Flags

| Flag | Default | Description |
|---|---|---|
| `--platform <astro\|drupal>` | from config | Target platform; required if absent from config |
| `--path <dir>` | from config | Override destination root |
| `--force` | off | Overwrite existing files |
| `--dry-run` | off | Print actions without writing |
| `--registry <url>` | from config | Override registry URL |

## Open questions (resolved at implementation time)

- **Package name** on npm: `joui`, `@joui/cli`, or another. Check availability.
- **Registry host**: static JSON on a CDN (simplest), GitHub raw (free, rate-limited), or a small dedicated API (future-proof). Decide based on traffic expectations.
- **Versioning**: whether to pin per-component versions in consumer projects, add a lockfile, or track only the installed commit. Deferred.
