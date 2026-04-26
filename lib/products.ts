import type { Product, ProductCategory } from "@/types";

export const CATEGORIES: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "selvage", label: "Selvage" },
  { key: "raw", label: "Raw" },
  { key: "japanese", label: "Japanese" },
  { key: "stretch", label: "Stretch" },
  { key: "custom", label: "Custom" },
];

export const PRODUCTS: Product[] = [
  {
    slug: "heritage-selvage-14oz",
    title: "Heritage Selvage 14oz",
    category: "selvage",
    shortDescription:
      "Shuttle-loom selvage with a clean ID line — tight twill, soft hand, excellent fade potential.",
    longDescription:
      "A workhorse selvage woven on vintage shuttle looms. The 14oz construction hits the sweet spot between broken-in comfort and long-haul durability, with a dense right-hand twill that ages beautifully through repeated wear cycles.",
    image:
      "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=1400&q=80",
    specs: {
      weight: "14 oz",
      composition: "100% Cotton",
      width: "31–33 inches",
      origin: "Woven in Indonesia",
      finish: "Sanforized",
    },
    highlights: ["Shuttle-loom selvage", "Right-hand twill", "Clean selvage ID", "Sanforized"],
  },
  {
    slug: "blackline-selvage-13oz",
    title: "Blackline Selvage 13oz",
    category: "selvage",
    shortDescription:
      "A black-line selvage with deep indigo warp and a tighter weave for sharp high-contrast fades.",
    longDescription:
      "Our Blackline run pairs a rope-dyed indigo warp with a charcoal weft, giving a smoky interior and razor-sharp fades. Ideal for premium 5-pocket production lines.",
    image:
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=1400&q=80",
    specs: {
      weight: "13 oz",
      composition: "100% Cotton",
      width: "32 inches",
      origin: "Woven in Indonesia",
      finish: "Loomstate / unsanforized options",
    },
    highlights: ["Black-line selvage", "Rope-dyed indigo", "High-contrast fades"],
  },
  {
    slug: "raw-indigo-classic-13oz",
    title: "Raw Indigo Classic 13oz",
    category: "raw",
    shortDescription:
      "Untreated rigid denim with a balanced hand — the foundation of a proper fade journey.",
    longDescription:
      "A raw, unwashed indigo denim woven for honest wear. No softeners, no shortcuts. Built to fade to the wearer — perfect for heritage and premium casual programs.",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1400&q=80",
    specs: {
      weight: "13 oz",
      composition: "100% Cotton",
      width: "58 inches",
      origin: "Woven in Indonesia",
      finish: "Raw / unwashed",
    },
    highlights: ["Untreated rigid", "Deep indigo warp", "Vintage hand"],
  },
  {
    slug: "raw-heavyweight-16oz",
    title: "Raw Heavyweight 16oz",
    category: "raw",
    shortDescription:
      "A heavyweight workwear denim that breaks in slowly and fades dramatically.",
    longDescription:
      "A dense 16oz cotton twill intended for workwear and utility lines. The fabric starts stiff, then molds to the wearer with time. Reinforced for abrasion without losing its craft feel.",
    image:
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=1400&q=80",
    specs: {
      weight: "16 oz",
      composition: "100% Cotton",
      width: "59 inches",
      origin: "Woven in Indonesia",
    },
    highlights: ["Workwear weight", "Dense twill", "Abrasion-resistant"],
  },
  {
    slug: "kojima-inspired-15oz",
    title: "Kojima-Inspired Selvage 15oz",
    category: "japanese",
    shortDescription:
      "Japanese-style rope-dyed selvage with a slubby, textured warp for characterful fades.",
    longDescription:
      "Inspired by the Kojima tradition, this fabric pairs slub-yarn warps with a dense weft to produce deep, atmospheric fades. Supplied with a signature colored selvage ID upon request.",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1400&q=80",
    specs: {
      weight: "15 oz",
      composition: "100% Cotton",
      width: "32 inches",
      origin: "Woven in Indonesia (Japanese process)",
      finish: "Sanforized",
    },
    highlights: ["Slub warp", "Rope-dyed indigo", "Signature selvage ID"],
  },
  {
    slug: "nihon-broken-twill-12oz",
    title: "Nihon Broken Twill 12oz",
    category: "japanese",
    shortDescription:
      "Broken-twill construction for a softer drape and a distinctly Japanese fade curve.",
    longDescription:
      "A mid-weight broken-twill inspired by Japanese craft mills. The shifting weave direction mitigates leg-twist and delivers a uniquely soft drape without losing structure.",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1400&q=80",
    specs: {
      weight: "12 oz",
      composition: "100% Cotton",
      width: "33 inches",
      origin: "Woven in Indonesia",
    },
    highlights: ["Broken twill", "Anti-twist", "Soft drape"],
  },
  {
    slug: "power-stretch-11oz",
    title: "Power Stretch 11oz",
    category: "stretch",
    shortDescription:
      "High-recovery stretch denim for modern silhouettes that still look and feel like denim.",
    longDescription:
      "A lycra-blended stretch denim engineered for modern slim and skinny cuts. High recovery prevents knee-bagging, while the cotton-forward construction keeps an honest denim look.",
    image:
      "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?auto=format&fit=crop&w=1400&q=80",
    specs: {
      weight: "11 oz",
      composition: "98% Cotton / 2% Elastane",
      width: "58 inches",
      origin: "Woven in Indonesia",
    },
    highlights: ["High recovery", "2-way stretch", "Slim-fit ready"],
  },
  {
    slug: "comfort-stretch-10oz",
    title: "Comfort Stretch 10oz",
    category: "stretch",
    shortDescription:
      "A softer, lighter stretch denim designed for everyday wear and warmer climates.",
    longDescription:
      "A lightweight stretch denim with a touch of poly for rebound. Balanced hand, low shrinkage, and a consistent indigo tone — ideal for year-round casual programs.",
    image:
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=1400&q=80",
    specs: {
      weight: "10 oz",
      composition: "92% Cotton / 6% Poly / 2% Elastane",
      width: "58 inches",
      origin: "Woven in Indonesia",
    },
    highlights: ["Lightweight", "Soft hand", "4-way stretch"],
  },
  {
    slug: "custom-program",
    title: "Custom Denim Program",
    category: "custom",
    shortDescription:
      "Your spec, our mill. Weight, weave, dye, selvage ID and finish — built to your brand.",
    longDescription:
      "A dedicated development program for brands who need denim built to spec. We work with your team from yarn selection through to finishing, with tight lead times and full QC at every stage.",
    image:
      "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?auto=format&fit=crop&w=1400&q=80",
    specs: {
      weight: "8–18 oz (custom)",
      composition: "Custom blends",
      width: "Up to 63 inches",
      origin: "Woven to spec in Indonesia",
    },
    highlights: ["Bespoke weave", "Custom selvage ID", "Private-label finish", "Tight lead times"],
  },
];

export const getProductBySlug = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);
