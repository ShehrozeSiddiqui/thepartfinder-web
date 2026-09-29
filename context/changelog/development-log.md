# Development Log

## 2026-09-29

### Added
- Scaffolded Next.js 16 app (TypeScript, Tailwind v4, App Router, `src/` dir, `@/*` alias).
- Established `context/` documentation system and root `CLAUDE.md` engineering rules.

### Architecture
- Adopted feature-first structure (`core/` + `features/`), adapted from client's Flutter-oriented
  master prompt — see ADR-001.
- Resolved brand naming conflict (Pathfinder vs. ICARS) — see ADR-002.

### Fixed
- First restructure pass (superseded same day): added a secondary nav strip under the header,
  switched the search card to pill-style tabs, folded benefit icons + a category quick-pick row
  into the Hero block. Based on a low-resolution reference image.
- Second restructure pass, after a clearer high-fidelity mockup was shared: reverted to a
  single-row header (no secondary strip) with a 3-line logo lockup; rebuilt the Hero's search
  panel as a static Make→Model→Year→Configuration stepper with 3 secondary search buttons
  (matching the mockup) instead of swappable tabs; added `TrustedBrands` (text wordmarks — no
  logo assets) and rebuilt `ShopByCategory` as a 10-item image-tile grid; rebuilt `Benefits` as a
  dark-green band with icon+title+subtitle; rebuilt `FeaturedParts` cards with price/stock/Add to
  Cart. Added `core/lib/format.ts` (`formatPrice`) and `site.currency`/`site.logoTagline`.
  Removed the now-unused `Badge` component.
