# Landing (Phase 1)

## Purpose
Static marketing site for The Pathfinder Auto Parts Sales — homepage plus basic supporting pages
(About, Contact, Privacy Policy, Terms & Conditions), matching Phase 1 of the client proposal.

## Pages
- `/` — built to match the client's high-fidelity homepage mockup section-for-section:
  1. `Hero` — headline, inline descriptor line, and a white "Find My Part" panel with a
     Make→Model→Year→Configuration stepper, 4-field select row, and 3 secondary search buttons
     (Part #, Description, Photo) below it — not tabs; the panel is one static view since none of
     it is wired up yet (Phase 2).
  2. `TrustedBrands` — text wordmark strip (no logo image assets — see Known limitations).
  3. `ShopByCategory` — 10-item image-tile grid.
  4. `Benefits` — dark-green band, 5 items (icon + title + subtitle).
  5. `FeaturedParts` — product cards with price, stock status, Add to Cart.
  6. `StatsBar`, `WhyChooseUs`, `CtaBanner`, `Newsletter` — below the fold in the mockup's cut-off
     region; kept from the earlier build since the proposal scope calls for them explicitly.
- Header is a single row (logo lockup + nav + search + login/cart) — no secondary nav strip; that
  was based on a lower-resolution reference image and was removed once a clearer mockup showed a
  single-row header.
- `/about` — brand story adapted from the ICARS brand framework's "customer experience" flow
  (Listen → Understand → Source → Solve → Support), written under The Pathfinder name.
- `/contact` — static contact form + contact details.
- `/privacy-policy`, `/terms-and-conditions` — explicit placeholders; real legal copy is deferred
  until accounts/checkout exist (Phase 3).

## Architecture
- Site chrome (`Header`, `Footer`) lives in `core/components/` — shared by every page, not
  landing-specific.
- Landing-only sections live in `features/landing/components/`, backed by static typed data in
  `features/landing/data/` (`categories.ts`, `benefits.ts`, `stats.ts`, `featuredParts.ts`,
  `values.ts`, `brands.ts`).
- `core/lib/format.ts` holds `formatPrice()` — the one bit of shared logic so far (price display
  using `site.currency`). Everything else is still pure static markup.
- No Supabase/data-fetching — see ADR-003 in `context/decisions.md`.

## State management
Local component state only (`useState` for the Header mobile menu). The Hero's search panel is a
static server component — no client state, since nothing in it is interactive yet.

## Non-functional by design (Phase 2/3 scope)
All forms and interactive-looking controls that depend on real data/backend are intentionally
inert (`disabled`, with a `title` explaining when they activate):
- Hero's vehicle stepper/select row and its 3 secondary search buttons
- Header search bar, Login/Register, Cart
- Featured Parts' Add to Cart buttons and carousel arrows
- Contact page form, Newsletter signup

This is deliberate — building working handlers here would mean re-doing them once Phase 2/3 wire
up Supabase, so the UI ships now and the logic attaches later without UI rework.

## Known limitations
- **No real car photography or brand logo assets.** The Hero uses a CSS gradient instead of a car
  photo; `TrustedBrands` renders text wordmarks instead of Toyota/Honda/etc. logo marks (those are
  trademarked assets we don't have rights to embed). Swap in licensed images when the client
  supplies them.
- Contact info in `core/constants/site.ts` (phone, email, address) is placeholder — replace with
  real Pathfinder business details before launch.
- Category part counts and featured part prices in `features/landing/data/` are illustrative
  placeholders, not real inventory. Prices display in `site.currency` (TT$) — the client's later
  mockup showed PKR, which looked like an unrelated mockup-tool default rather than an intentional
  currency choice; revisit if the client confirms otherwise.

## Future improvements
- Phase 2 wires the Hero's stepper and secondary search buttons to real vehicle/part data.
- Phase 3 wires the Contact form, Newsletter signup, and Add to Cart to real handling.
