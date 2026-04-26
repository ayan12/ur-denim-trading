/**
 * Centralized brand constants.
 * Change numbers here and the whole site updates.
 */

export const BRAND = {
  name: "UR DENIM TRADING INDO",
  shortName: "UR DENIM",
  tagline: "Premium Denim. Crafted in Indonesia. Shipped worldwide.",
  description:
    "UR Denim Trading Indo is a trusted denim supplier specializing in premium raw, selvage, and custom denim products for global markets. We combine craftsmanship, quality control, and modern production standards.",
  established: 2012,
  email: "hello@urdenimtrading.com",
  phone: "+62 812 0000 0000",
  whatsapp: "+6281200000000",
  whatsappDisplay: "+62 812 0000 0000",
  address: "Bandung, West Java — Indonesia",
  social: {
    instagram: "https://instagram.com/urdenimtrading",
    linkedin: "https://linkedin.com/company/urdenimtrading",
    x: "https://x.com/urdenimtrading",
  },
} as const;

/** Pre-built WhatsApp deep-link with a courteous default message. */
export const whatsappLink = (message = "Halo UR Denim, I'd like to request a quote.") =>
  `https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
