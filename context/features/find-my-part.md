# Find My Part

Route: `/find-my-part` (`routes.findMyPart`). UI in `src/features/find-my-part/`.

## What it does (Phase 1 — UI only)
A four-step vehicle selector: Make → Model → Year → Configuration, matching mockups 2 and 3.
- Step 1: searchable make list, brand tile grid ("View all makes"), popular searches, "Need help?" panel.
- Steps 2–3: model tiles for the chosen make, then year tiles.
- Step 4: configuration dropdowns (engine, transmission, drive, body, market), vehicle image, and a
  "Your selection" summary. Earlier steps stay clickable; changing a make resets later choices.

## Data
`data/vehicles.ts` is **mock data**, but the flow is data-driven: each model carries its own year
range, engines, transmissions, drives and body types, so the year tiles and configuration dropdowns
change with the chosen model. Popular searches jump straight to the year step. Make logos come from
the `simple-icons` package (Isuzu and Mercedes-Benz have none and show a text wordmark); they are
trademarks of their owners, used only to identify compatibility. The vehicle preview image is a
`picsum.photos` placeholder seeded by make+model (deterministic per vehicle, but not an actual
photo of it — see ADR-005 in context/decisions.md). All of this is replaced by the Supabase-backed
vehicle catalog in Phase 2.

## Deep-linking
`FindMyPartWizard` accepts optional `initialMake`/`initialModel`/`initialYear` props. The page
(`app/find-my-part/page.tsx`) reads them from the URL's `?make=&model=&year=` query string and
passes them through; `resolveInitialState()` validates the selection against `data/vehicles.ts`
and starts the wizard at whichever step it actually got to (Model/Year/Configuration), rather than
always resetting to step 1. This is how the homepage Hero's vehicle picker hands off its selection
— see `context/features/landing.md`.

## Not built yet
- "Find parts for this vehicle" is disabled — the parts catalog/listing is Phase 2.
- Loading/empty/error states: not needed for static data; required once backed by real data.
