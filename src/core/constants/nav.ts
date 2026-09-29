import { routes } from "./routes";

export type NavLink = { label: string; href: string; disabled?: boolean };

export const primaryNav: NavLink[] = [
  { label: "Home", href: routes.home },
  { label: "Find My Part", href: routes.findMyPart },
  { label: "Shop by Category", href: routes.shopByCategory },
  { label: "Brands", href: routes.brands },
  { label: "About Us", href: routes.about },
  { label: "Contact", href: routes.contact },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Find My Part", href: routes.findMyPart },
      { label: "Shop by Category", href: routes.shopByCategory },
      { label: "About Us", href: routes.about },
      { label: "Contact Us", href: routes.contact },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Contact Us", href: routes.contact },
      { label: "Shipping & Delivery", href: routes.contact },
      { label: "Returns & Refunds", href: routes.contact },
      { label: "FAQ", href: routes.contact },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: routes.about },
      { label: "Privacy Policy", href: routes.privacyPolicy },
      { label: "Terms & Conditions", href: routes.termsAndConditions },
    ],
  },
];
