# Architecture

Feature-first, adapted from the client's master architecture prompt (originally written for
Flutter) to Next.js/TypeScript. See ADR-001 in `decisions.md`.

```
src/
├── core/
│   ├── constants/     site.ts (name/tagline/contact), nav.ts (header/footer links)
│   ├── components/    Reusable UI used by 2+ features: Button, Container, SectionHeading, Badge
│   ├── lib/           Generic utilities, Supabase client (added in Phase 2/3)
│   └── types/         Shared TypeScript types
│
├── features/
│   └── landing/
│       ├── components/   Header, Footer, Hero, FindMyPart, ShopByCategory, FeaturedParts,
│       │                 Benefits, CtaBanner, Newsletter
│       └── data/          Static content: categories, featured parts, benefits — not hardcoded
│                          inline in components
│
└── app/                Routes only. Pages compose feature components; no business logic here.
```

## Rules

- A component moves to `core/` only when a second feature genuinely needs it — no speculative
  sharing.
- Theme values (colors, spacing) live as Tailwind `@theme` tokens in `src/app/globals.css`, not
  as raw hex/px scattered in `className`.
- No hardcoded nav links, site copy, or category lists inside components — pull from
  `core/constants/` or the feature's `data/`.
- Phase 1 has no backend calls, no auth, no state management library — keep it that simple. Don't
  pre-build repository/provider layers for data that doesn't exist yet.
