/**
 * Centralized route paths. Pages that don't exist yet (Phase 2/3 scope) still get a path here
 * so nav/footer links are correct from day one — the page stubs are added in this phase where
 * the proposal calls for "basic supporting website pages," and left as future work otherwise.
 */
export const routes = {
  home: "/",
  findMyPart: "/find-my-part",
  shopByCategory: "/#shop-by-category",
  brands: "/#trusted-brands",
  parts: "/parts",
  part: (slug: string) => `/parts/${slug}`,
  searchPartNumber: "/search/part-number",
  searchDescription: "/search/description",
  partRequest: "/part-request",
  quotes: "/quotes",
  quote: (id: string) => `/quotes/${id}`,
  checkout: "/checkout",
  account: "/account",
  accountGarage: "/account/garage",
  accountOrders: "/account/orders",
  accountQuotes: "/account/quotes",
  accountSection: (section: string) => `/account/${section}`,
  dealer: "/dealer",
  dealerEbay: "/dealer/ebay",
  dealerAmazon: "/dealer/amazon",
  dealerSection: (section: string) => `/dealer/${section}`,
  about: "/about",
  contact: "/contact",
  privacyPolicy: "/privacy-policy",
  termsAndConditions: "/terms-and-conditions",
} as const;
