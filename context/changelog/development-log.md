# Development Log

## 2026-09-29

### Added
- Scaffolded Next.js 16 app (TypeScript, Tailwind v4, App Router, `src/` dir, `@/*` alias).
- Established `context/` documentation system and root `CLAUDE.md` engineering rules.

### Added (Find My Part)
- `/find-my-part` page with a Make → Model → Year → Configuration wizard (mock data) — see
  `context/features/find-my-part.md`. `routes.findMyPart` now points at it instead of the hero anchor.

### Added (Parts catalog, search, requests)
- `/parts`, `/parts/[slug]`, `/search/part-number`, `/search/description`, `/part-request`,
  `/quotes`, `/quotes/[id]` with mock data — see `context/features/parts.md`. Added shared `Badge`.
  Header search, mega menu and category tiles now link into the catalog.

### Added (Cart, account, dealer, integrations, contact, footer)
- Working cart + checkout flow (`/checkout`), customer account (`/account/*` incl. garage and
  orders), dealer portal (`/dealer/*`), eBay/Amazon integration dashboards, functional contact form,
  redesigned footer with newsletter. All mock/demo — see ADR-004 and `features/cart-checkout.md`,
  `features/account-and-dealer.md`. Header now shows a live cart count and links to My Account.
  Added `SidebarNav`, `NewsletterForm`; removed the landing `Newsletter` section (now in the footer).

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
