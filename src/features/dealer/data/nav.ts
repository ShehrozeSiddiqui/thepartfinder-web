import { routes } from "@/core/constants/routes";
import type { SidebarItem } from "@/core/components/SidebarNav";

export const dealerNav: SidebarItem[] = [
  { label: "Dashboard", href: routes.dealer },
  { label: "Part Requests", href: routes.dealerSection("part-requests") },
  { label: "Quotes", href: routes.dealerSection("quotes") },
  { label: "Orders", href: routes.dealerSection("orders") },
  { label: "Inventory", href: routes.dealerSection("inventory") },
  { label: "Customers", href: routes.dealerSection("customers") },
  { label: "Suppliers", href: routes.dealerSection("suppliers") },
  { label: "Dealer Network", href: routes.dealerSection("network") },
  { label: "eBay Listings", href: routes.dealerEbay },
  { label: "Amazon Listings", href: routes.dealerAmazon },
  { label: "Reports", href: routes.dealerSection("reports") },
  { label: "Settings", href: routes.dealerSection("settings") },
];

export const dealerComingSoon: Record<string, string> = {
  "part-requests": "Part Requests",
  quotes: "Quotes",
  orders: "Orders",
  inventory: "Inventory",
  customers: "Customers",
  suppliers: "Suppliers",
  network: "Dealer Network",
  reports: "Reports",
  settings: "Settings",
};
