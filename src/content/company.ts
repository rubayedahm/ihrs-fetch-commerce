/**
 * Every fact shown on the website lives here.
 *
 * Only enter details that are true and can be checked (Companies House,
 * HMRC, your live eBay / TikTok Shop pages). Any field left as "" is
 * hidden on the site automatically, so nothing unverified is ever shown.
 */

export const company = {
  legalName: "IHRS Fetch Commerce Limited",
  shortName: "IHRS Fetch Commerce",
  tagline: "Online retail, sourced with care and delivered across the UK.",

  // Companies House, e.g. "12345678". Shown with a link to the public register.
  companyNumber: "17408571",
  // Registered office address exactly as on Companies House.
  registeredOffice: "",
  // e.g. "England and Wales"
  jurisdiction: "England and Wales",
  // e.g. "2024". Shown as "Trading since …".
  tradingSince: "",
  // e.g. "GB123456789". Leave blank if not VAT registered.
  vatNumber: "",
  // Director(s) as listed on Companies House.
  directors: [] as string[],

  // Public contact details.
  email: "",
  phone: "",

  // Optional: a Formspree (or similar) form URL. Without it the form opens the visitor's email app.
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
};

/**
 * Live sales channels. Paste the public store URLs so anyone (a bank,
 * a supplier, a customer) can open the real storefront and check it.
 */
export const channels = [
  {
    id: "ebay",
    name: "eBay",
    label: "eBay Store",
    // e.g. "https://www.ebay.co.uk/str/yourstorename"
    url: "",
    // Your eBay seller username, shown under the card.
    handle: "",
    description:
      "Our eBay storefront lists our current range with buyer protection, tracked postage and eBay's feedback system on every order.",
  },
  {
    id: "tiktok",
    name: "TikTok Shop",
    label: "TikTok Shop",
    // e.g. "https://www.tiktok.com/@yourshop"
    url: "",
    handle: "",
    description:
      "On TikTok Shop we reach customers through short-form video and live selling, with checkout and order tracking handled in-app.",
  },
];

/** Product categories you actually sell. Edit freely. */
export const categories = [
  { name: "Home & Kitchen", note: "Everyday household and kitchen essentials." },
  { name: "Health & Beauty", note: "Personal care and grooming products." },
  { name: "Electronics Accessories", note: "Chargers, cables, cases and gadgets." },
  { name: "Toys & Hobbies", note: "Gifts, games and seasonal lines." },
];
