export type ProductCategory =
  | "selvage"
  | "raw"
  | "japanese"
  | "stretch"
  | "custom";

export interface Product {
  slug: string;
  title: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;
  image: string;
  specs: {
    weight: string; // oz
    composition: string;
    width: string;
    origin: string;
    finish?: string;
  };
  highlights: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
