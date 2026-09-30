import { routes } from "./routes";

export type NavLink = {
  label: string;
  href: string;
  disabled?: boolean;
  /** Desktop mega menu — grouped links shown in a full-width panel under the navbar. */
  megaMenu?: { title: string; links: { label: string; href: string }[] }[];
};

// Nav-owned copy of the category/brand lists. Point hrefs at real catalog routes in Phase 2.
const categoryLinks = [
  "Engine",
  "Transmission",
  "Suspension",
  "Braking System",
  "Electrical",
  "Body Parts",
  "Steering",
  "Cooling System",
  "Exhaust System",
  "Fuel System",
].map((label) => ({ label, href: `${routes.parts}?category=${encodeURIComponent(label)}` }));

const brandLinks = [
  "Toyota",
  "Lexus",
  "Honda",
  "Nissan",
  "Mazda",
  "Subaru",
  "Mitsubishi",
  "Isuzu",
  "Hyundai",
  "Kia",
  "Ford",
  "Chevrolet",
  "BMW",
  "Audi",
].map((label) => ({ label, href: routes.brands }));

export const primaryNav: NavLink[] = [
  { label: "Home", href: routes.home },
  { label: "Find My Part", href: routes.findMyPart },
    {
    label: "Shop by Category",
    href: routes.parts,
    megaMenu: [
      { title: "Drivetrain & Engine", links: categoryLinks.slice(0, 4) },
      { title: "Chassis & Body", links: categoryLinks.slice(4, 7) },
      { title: "Systems", links: categoryLinks.slice(7) },
    ],
  },
  {
    label: "Brands",
    href: routes.brands,
    megaMenu: [
      { title: "Japanese", links: brandLinks.slice(0, 8) },
      { title: "Korean & American", links: brandLinks.slice(8, 12) },
      { title: "European", links: brandLinks.slice(12) },
    ],
  },
  { label: "About Us", href: routes.about },
  { label: "Contact", href: routes.contact },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Find My Part", href: routes.findMyPart },
      { label: "Parts Catalogue", href: routes.parts },
      { label: "Search by Part Number", href: routes.searchPartNumber },
      { label: "Hard-to-Find Parts", href: routes.partRequest },
      { label: "Dealer Inventory", href: routes.dealer },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "About Us", href: routes.about },
      { label: "Contact Us", href: routes.contact },
      { label: "Shipping & Delivery", href: routes.contact },
      { label: "Returns & Refunds", href: routes.contact },
      { label: "Terms & Conditions", href: routes.termsAndConditions },
      { label: "Privacy Policy", href: routes.privacyPolicy },
    ],
  },
  {
    title: "My Account",
    links: [
      { label: "My Garage", href: routes.accountGarage },
      { label: "Orders", href: routes.accountOrders },
      { label: "Quotes & Requests", href: routes.accountQuotes },
      { label: "Track a Request", href: routes.quotes },
      { label: "Account Settings", href: routes.accountSection("settings") },
    ],
  },
  {
    title: "Our Network",
    links: [
      { label: "Local Dealers", href: routes.about },
      { label: "Regional Partners", href: routes.about },
      { label: "International Suppliers", href: routes.about },
      { label: "Sourcing Network", href: routes.about },
    ],
  },
];
