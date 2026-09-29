import type { Integration } from "../types";

/** Mock marketplace integrations. Live sync needs real eBay / Amazon API credentials (later phase). */
export const integrations: Record<Integration["slug"], Integration> = {
  ebay: {
    slug: "ebay",
    name: "eBay",
    account: "thepathfinderautosales",
    connected: true,
    currency: "US$",
    metrics: [
      { label: "Active listings", value: "1,246" },
      { label: "Listings today", value: "36" },
      { label: "Sold (30 days)", value: "192" },
      { label: "Revenue (30 days)", value: "US$24,580" },
    ],
    listings: [
      { partNumber: "17201-0L040", title: "Turbocharger Assembly Toyota Hilux 2016-2021", price: 4250, quantity: 3, status: "Active" },
      { partNumber: "90915-YZZD4", title: "Oil Filter Toyota Genuine", price: 18, quantity: 120, status: "Active" },
      { partNumber: "43512-0K120", title: "Wheel Bearing Hilux 2005-2015", price: 65, quantity: 24, status: "Active" },
    ],
  },
  amazon: {
    slug: "amazon",
    name: "Amazon",
    account: "thepathfinderautosales",
    connected: true,
    currency: "US$",
    metrics: [
      { label: "Active listings", value: "980" },
      { label: "Listings today", value: "28" },
      { label: "Sold (30 days)", value: "156" },
      { label: "Revenue (30 days)", value: "US$18,320" },
    ],
    listings: [
      { partNumber: "17201-0L040", title: "Turbocharger Assembly Toyota Hilux 2016-2021", price: 4390, quantity: 3, status: "Active" },
      { partNumber: "90915-YZZD4", title: "Oil Filter Toyota Genuine", price: 19, quantity: 90, status: "Active" },
      { partNumber: "43512-0K120", title: "Wheel Bearing Hilux 2005-2015", price: 68, quantity: 24, status: "Pending" },
    ],
  },
};
