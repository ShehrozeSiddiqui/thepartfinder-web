import { routes } from "@/core/constants/routes";
import type { SidebarItem } from "@/core/components/SidebarNav";

/** Account sections. Those without a dedicated page render the shared "coming soon" panel. */
export const accountNav: SidebarItem[] = [
  { label: "Dashboard", href: routes.account },
  { label: "Orders", href: routes.accountOrders },
  { label: "My Garage", href: routes.accountGarage },
  { label: "Saved Parts", href: routes.accountSection("saved-parts") },
  { label: "Quotes & Requests", href: routes.accountQuotes },
  { label: "Addresses", href: routes.accountSection("addresses") },
  { label: "Payment Methods", href: routes.accountSection("payment-methods") },
  { label: "Account Settings", href: routes.accountSection("settings") },
];

export const comingSoonSections: Record<string, string> = {
  "saved-parts": "Saved Parts",
  addresses: "Addresses",
  "payment-methods": "Payment Methods",
  settings: "Account Settings",
};
