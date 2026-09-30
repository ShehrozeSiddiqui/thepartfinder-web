# Landing (Phase 1)

## Purpose
Static marketing site for The Pathfinder Auto Parts Sales — homepage plus basic supporting pages
(About, Contact, Privacy Policy, Terms & Conditions), matching Phase 1 of the client proposal.

## Pages
- `/` renders, in order: `Hero`, `Benefits`, `ShopByCategory`, `StatsBar`, `TrustedBrands`,
  `FeaturedParts`, `WhyChooseUs`, `CtaBanner`.
  - `Hero` — full-bleed background photo (`data/hero.ts` → `heroImage`, a Pexels placeholder) with
    a dark overlay, the logo lockup, headline, descriptor line, and a search card: mode tabs
    (`searchTabs` — Find My Part / Part # / Description / Photo, only the first enabled) above a
    Make/Model/Year select row. Everything in it is `disabled` — it's a teaser; the real
    interactive version is the `/find-my-part` wizard (see `context/features/find-my-part.md`),
    which `routes.findMyPart` now points at directly rather than an in-page anchor.
  - `TrustedBrands` — real brand marks via `simple-icons` (same package/pattern as the vehicle
    picker); Lexus and Isuzu have no mark there and fall back to a text wordmark.
  - `ShopByCategory` — image-tile strip, `VISIBLE_CATEGORIES` (6) of the 10 in `data/categories.ts`,
    linking into `/parts?category=...`.
  - `Benefits` — dark-green band, 5 items (icon + title + subtitle).
  - `FeaturedParts` — product cards with price, stock status, Add to Cart.
  - Newsletter is no longer a landing section — it moved into `Footer` (`NewsletterForm`).
- Header is a single row (logo lockup + nav + search + login/cart), with a mega menu under "Shop by
  Category" and "Brands" (see `core/constants/nav.ts`) — no secondary nav strip; an earlier pass
  added one based on a lower-resolution reference image and it was removed once a clearer mockup
  showed a single-row header.
- `/about` — brand story adapted from the ICARS brand framework's "customer experience" flow
  (Listen → Understand → Source → Solve → Support), written under The Pathfinder name.
- `/contact` — functional contact form (see `features/contact/components/ContactForm.tsx`) +
  contact details.
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
Local component state only (`useState` for the Header mobile menu; `useState` in `Hero` for the
active tab and the cascading Make/Model/Year selects — no global state library needed).

## Non-functional by design (Phase 2/3 scope)
Only Featured Parts' Add to Cart buttons and carousel arrows are still intentionally inert
(`disabled`, with a `title`). Everything else on the homepage is now live, since other sessions
built out Phases 2–3 ahead of schedule (mock/local data, not Supabase — see ADR-004):
- The Hero's 4 search tabs all work — see "Future improvements" for how.
- Header's Login/Register is still disabled, but **Cart is live** (`features/cart/lib/CartProvider`,
  real count) and the search bar submits into `/search/part-number`.
- The footer `NewsletterForm` is interactive (acknowledges locally; no real email provider).
- `/find-my-part` is a fully working wizard (`FindMyPartWizard`), not a stub.

## Known limitations
- **No licensed car/product photography.** Category tiles, featured parts, and the hero background
  use pinned, verified Pexels stock photo IDs (not loremflickr — see ADR-005) as stand-ins. Brand
  marks in `TrustedBrands` and the vehicle picker use the `simple-icons` package (real marks, MIT
  license, used only to identify compatibility) rather than licensed logo assets.
- Contact info in `core/constants/site.ts` (phone, email, address) is placeholder — replace with
  real Pathfinder business details before launch.
- Category part counts and featured part prices in `features/landing/data/` are illustrative
  placeholders, not real inventory. Prices display in `site.currency` (TT$) — the client's later
  mockup showed PKR, which looked like an unrelated mockup-tool default rather than an intentional
  currency choice; revisit if the client confirms otherwise.

## Future improvements
- Both of the following are now done: the Hero's 4 tabs are all live — Find My Part uses the same
  `makes`/`yearsFor` data as the wizard with cascading Make→Model→Year selects and submits a plain
  GET form to `/find-my-part?make=&model=&year=`; Part # and Description submit GET forms into
  `/search/part-number` and `/search/description`; Upload a Photo links to
  `/search/description?tab=photo`. `FindMyPartWizard` now accepts `initialMake/Model/Year` props
  (read from the URL by `app/find-my-part/page.tsx`) and jumps straight to the right step instead
  of discarding the Hero's picks — see `resolveInitialState` in `FindMyPartWizard.tsx`.
- All Pexels/Picsum placeholder images are replaced by real product/vehicle photography before
  launch regardless of backend status.
