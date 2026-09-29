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
