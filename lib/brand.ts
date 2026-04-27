/**
 * Centralized brand constants.
 * Change numbers here and the whole site updates.
 */

export const BRAND = {
  name: "URDENIM TRADING INDO",
  shortName: "URDENIM",
  tagline: "Premium Denim. Crafted in Indonesia. Shipped worldwide.",
  description:
    "URDENIM Trading Indo is a trusted denim supplier specializing in premium raw, selvage, and custom denim products for global markets. We combine craftsmanship, quality control, and modern production standards.",
  established: 2012,
  email: "Pturdenimtradingindo@icloud.com",
  phone: "+62 877 5170 1802",
  whatsapp: "6287751701802",
  whatsappDisplay: "+62 877 5170 1802",
  address: "Bandung, West Java — Indonesia",
  social: {
    instagram: "https://instagram.com/urdenimtrading",
    linkedin: "https://linkedin.com/company/urdenimtrading",
    x: "https://x.com/urdenimtrading",
  },
} as const;

/** Pre-built WhatsApp deep-link with a courteous default message. */
export const whatsappLink = (message = "Halo URDENIM, I'd like to request a quote.") =>
  `https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
