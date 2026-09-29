# ThePartFinder — Engineering Rules

This is a production-grade Next.js + Supabase application (The Pathfinder Auto Parts Sales).
These rules apply to every session, every feature, every file. Read this before writing code.
Read `context/README.md` and the relevant `context/features/*.md` before touching an existing feature.

## Core principle

Before writing code, ask: is this reusable? Does it belong to a feature or is it shared? Is it in
the right layer? Is anything hardcoded that should be configurable? Does this already exist
somewhere reusable? Will this still make sense at 10x the project's size?

Do not write code, files, or abstractions "just in case." Every file has a clear purpose.

## Architecture — feature-first

```
src/
├── core/                   # Shared across features — not feature-specific
│   ├── constants/          # site.ts, routes.ts, nav.ts — no magic strings/numbers in components
│   ├── components/         # Truly reusable UI: Button, Container, SectionHeading, Badge...
│   ├── lib/                # Supabase client, generic utils
│   └── types/              # Shared TS types
│
├── features/
│   └── <feature>/
│       ├── components/     # UI specific to this feature only
│       ├── data/           # Static/mock data, constants specific to this feature
│       ├── lib/             # Feature-specific logic (repositories, hooks) — added as needed
│       └── types.ts
│
└── app/                    # Next.js App Router — routes only, compose feature components.
                             # No business logic or markup blobs directly in page.tsx beyond composition.
```

Feature-specific code stays inside its feature folder. Only move something to `core/` when a
second feature actually needs it — do not pre-emptively "share" things.

## Rules that matter for this project right now

- **No hardcoded copy/values in components.** Nav links, site name, taglines, category lists,
  external URLs → `core/constants/` or the feature's `data/` file.
- **No ad-hoc colors/spacing.** Use the Tailwind theme tokens defined in `src/app/globals.css`
  (`@theme`), not raw hex codes in `className`.
- **One reusable component library.** Before adding a new Button/Card/Badge variant, check
  `core/components/` first.
- Supabase keys and any secrets go in `.env.local`, never committed. `.env.example` documents the
  required keys with placeholder values.
- Don't over-engineer: this is a marketing/landing page in Phase 1 — no repositories, no state
  management library, no auth yet. Add abstractions when Phase 2/3 actually need them, not before.
- Every screen considers loading/empty/error states once it's backed by real data (Phase 2+).
  Phase 1 is static content, so this doesn't apply yet — note it in the feature doc instead.

## Context system

Update `context/` as you work:
- New feature → create `context/features/<feature>.md`.
- Architectural decision → add an ADR entry to `context/decisions.md`.
- Meaningful change → append to `context/changelog/development-log.md`.

Don't let docs drift from code. If they disagree, the code is truth — fix the doc.

## Brand

- Site name: **The Pathfinder Auto Parts Sales** (not "ICARS" — see `context/decisions.md` ADR-002).
- Tagline: "If the part exists, we'll find the path to it." / "Finding the parts others can't find."
- Voice/values (trust, solutions-first, customer-first, quality) draw from ICARS Company Limited's
  brand framework, supplied as background brand voice, not the literal site identity.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
