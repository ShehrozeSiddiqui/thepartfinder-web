# Parts catalog, search & requests

Routes: `/parts` (listing, `?category=`), `/parts/[slug]` (detail), `/search/part-number`,
`/search/description`, `/part-request`, `/quotes`, `/quotes/[id]`. Code in `src/features/parts/`
and `src/features/part-requests/`. Matches mockups 5–8, 10 and 11.

## Behaviour (Phase 1 — mock data)
- Listing: client-side filters (subcategory, brand type, availability) and sort; empty state.
- Detail: spec list, qty stepper, tabs for compatibility / cross references / shipping.
- Part-number search is server-rendered from `?q=` and also matches cross-referenced numbers.
  The header search box submits to it.
- Description search is a keyword match; the photo tab is UI only and hands off to the request form.
- Part request form acknowledges locally with a reference number — nothing is stored yet.
- Quote tracker shows one mock request (`PF-000124`).

## Not built yet
- Cart, buy now, checkout, accept quote (Phase 3). My Garage/account, dealer portal, eBay and Amazon
  integrations (need auth + real APIs) — mockups 9, 12, 13, 15, 16.
- Real data: `data/parts.ts` and `mockRequests.ts` are illustrative, not verified fitment. Images
  are pinned Pexels photo IDs (`imagePexelsId` per seed, verified to resolve) — see ADR-005 in
  context/decisions.md; not real product photography. Loading/error states are required once
  backed by Supabase.
