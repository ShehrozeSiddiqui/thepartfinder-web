# Project Overview

**The Pathfinder Auto Parts Sales** — a vehicle parts-finding platform inspired by PartSouq,
letting customers identify their vehicle, find compatible parts, search by part number/description/
photo, request hard-to-find parts, manage vehicles, and order.

Stack: **Next.js (App Router, TypeScript) + Supabase**. No separate custom backend.

## Phased scope (from client proposal)

| Phase | Price | Scope |
|---|---|---|
| 1 — Website & Landing Page | $150 | Static marketing site: homepage, nav, hero, find-my-part UI shell, shop by category, featured parts, benefits, CTAs, footer, basic supporting pages. **Currently in progress.** |
| 2 — Vehicle & Parts Finder | $150 | Make→Model→Year→Config flow, parts catalog, part detail pages, part-number/description/photo search, filtering. |
| 3 — Customer & Ordering | $130 | Auth, dashboard, My Garage, cart, checkout, payments, orders. |
| 4 — Admin & Integrations | $130 | Admin dashboard, inventory, eBay/Amazon sync, shipping. |

Total: $560. Third-party API/service costs (VIN lookup, payment gateway fees, marketplace fees,
AI image recognition, etc.) are excluded from that cost — see the client proposal PDF for detail.

## Brand

Site is branded **"The Pathfinder Auto Parts Sales."** The client also supplied a separate brand
framework for "ICARS Company Limited" (vision/mission/values/tagline "We Find the Solution").
Per client direction, the site keeps the Pathfinder name/tagline from the design mockups; the ICARS
material is used only as background brand voice (trust, solutions-first, customer-first) when
writing copy. See `decisions.md` ADR-002.

## Design reference

Client supplied a full mockup set (homepage through admin/marketplace integrations) establishing:
dark navy header/footer, green primary CTA, orange "Genuine/OEM" badges, card-based grids,
consistent header (logo, search, Login/Register, My Garage, Cart) across every page.
