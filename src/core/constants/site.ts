export const site = {
  name: "The Pathfinder",
  fullName: "The Pathfinder Auto Parts Sales",
  tagline: "Finding the parts others can't find.",
  /** Small line under the logo in the header/footer lockup. */
  logoTagline: "If the part exists, we'll find it. The path to it.",
  description:
    "Genuine, OEM, aftermarket, obsolete and hard-to-find vehicle parts — sourced globally, delivered with confidence.",
  descriptors: ["Genuine", "OEM", "Aftermarket", "Obsolete", "Hard-to-Find"],
  /** ISO 4217-style label used for display prices until real checkout/currency handling exists. */
  currency: "TT$",
  contact: {
    email: "info@thepathfinderautoparts.com",
    phone: "+1 (868) 123-4567",
    address: "Chaguanas, Trinidad and Tobago",
    hours: "Mon–Fri, 8:00 AM – 5:00 PM",
  },
  social: {
    facebook: "https://facebook.com/thepathfinderautoparts",
    instagram: "https://instagram.com/thepathfinderautoparts",
    whatsapp: "https://wa.me/18681234567",
  },
} as const;
