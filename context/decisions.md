# Architecture Decisions

## ADR-001 — Feature-first architecture, adapted from Flutter to Next.js

**Decision:** Organize `src/` around `core/` (shared) and `features/<name>/` (feature-owned),
per the client's master engineering prompt, translated from its original Flutter/Dart structure
(`lib/core`, `lib/features/*/data|domain|presentation`) into Next.js conventions
(`src/core`, `src/features/*/components|data|lib`, `src/app` for routes only).

**Reason:** Client requires this pattern for maintainability at scale, regardless of stack. Next.js
App Router already separates routing (`app/`) from UI, so the `data/domain/presentation` split
collapses to `components/` + `data/` + `lib/` per feature rather than being copied literally —
copying the Dart layering as-is (e.g. a `domain/entities` folder for static landing-page content)
would be over-engineering for the current scope.

**Consequence:** Shared UI/constants must live in `core/`; feature code must not leak into `core/`
until a second feature needs it.

## ADR-002 — Site brand is "The Pathfinder," ICARS is background voice only

**Decision:** The live site uses the name, logo, and tagline shown in the client's design mockups
("THE PATHFINDER Auto Parts Sales" / "If the part exists, we'll find the path to it.") rather than
"ICARS Company Limited" / "We Find the Solution."

**Reason:** Client confirmed directly when asked to resolve the naming conflict between the design
mockups (Pathfinder) and the supplied brand framework document (ICARS).

**Consequence:** ICARS content (vision, mission, values, customer philosophy) informs the *tone* of
written copy (trust, solutions-first, customer-first framing) but should never appear as the
literal company name, tagline, or legal entity on-page unless the client says otherwise.

## ADR-003 — No state management library / backend calls in Phase 1

**Decision:** Phase 1 (landing page) uses plain React state where needed and static data files —
no Supabase calls, no TanStack Query, no global state library yet.

**Reason:** Phase 1 scope is a static marketing site; there is no real data to fetch. Introducing
data-fetching/state infrastructure now would be premature abstraction (violates rule 26 of the
client's engineering prompt).

**Consequence:** Phase 2 will introduce Supabase client setup (`core/lib/supabase.ts`) and a
data-fetching approach (likely TanStack Query) when the vehicle/parts finder needs real data —
revisit this ADR then.

## ADR-004 — Demo-grade cart, orders and garage in localStorage

**Decision:** Cart (`features/cart`), placed orders and the saved-vehicle garage persist in the
browser's `localStorage` behind small modules (`CartProvider`, `lib/orders.ts`, `GarageManager`).
Checkout takes no payment and sends nothing to a server. The cart uses a plain React context — still
no global state library, consistent with ADR-003.

**Reason:** The client wants every mockup screen working end-to-end with mock data before the
Supabase backend, auth and payments exist.

**Consequence:** Data is per-browser and unauthenticated. When Supabase/auth land, swap these three
modules for server-backed versions; the UI components should not need to change. Real payments need
a provider and must not reuse the demo payment step.

## ADR-005 — Replaced loremflickr placeholder images with pinned Pexels IDs / Picsum seeds

**Decision:** `loremflickr.com` (keyword-matched random Flickr photos) is no longer used anywhere
in the app. Fixed-content images (categories, featured parts, the parts catalog) now use specific,
manually verified `images.pexels.com/photos/<id>/...` URLs. Images keyed to arbitrary user-selected
text (the Find My Part vehicle preview in `FindMyPartWizard`, garage vehicle thumbnails in
`GarageManager`) use `picsum.photos/seed/<make-model>/...` — deterministic per seed, but a generic
photo, not an actual photo of that make/model.

**Reason:** `loremflickr.com` started returning `401 Unauthorized` on every request (verified via
curl), breaking every category tile, every featured part, and the entire parts catalog — roughly
30 images site-wide. It's also a known-unreliable service even when up: keyword matching against
random Flickr photos frequently returns unrelated images. There is no comparably reliable free
service that does real keyword-based image search without an API key, so fixed content gets
specific hand-picked photos and dynamic content (arbitrary make/model text) gets a reliable but
generic seeded placeholder instead of attempting a fake "real photo of this exact vehicle" search.

**Consequence:** Every new category/part added to `landing/data/*.ts` or `parts/data/parts.ts`
needs a manually verified Pexels photo ID (`curl -o /dev/null -w "%{http_code}"` the constructed
URL before committing it) — don't reintroduce a keyword-search service for these. Real product/
vehicle photography replaces all of this before launch regardless.
