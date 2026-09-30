# Account area, dealer portal & marketplace integrations

## Customer account — `/account/*` (mockup 9)
Dashboard, Orders (from checkout), My Garage (add/remove vehicles via the make/model/year data),
Quotes & Requests. Saved Parts, Addresses, Payment Methods and Settings show a "coming soon" panel.
There is no sign-in: data is per-browser (ADR-004).

## Dealer portal — `/dealer/*` (mockup 13)
Dark-sidebar portal with a dashboard (stat cards, recent orders, SVG sales chart, top sellers) using
mock figures from `features/dealer/data/dashboard.ts`. Other sections show "coming soon". It is
**not access-controlled** — real dealer auth is required before this holds any live data.

## Marketplace integrations — `/dealer/ebay`, `/dealer/amazon` (mockups 15, 16)
Shared `IntegrationDashboard`: connected status, metrics, listing table, and a *simulated* "Sync
inventory". No eBay/Amazon API is called; live sync needs seller credentials and API work.
