"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import type { Product, ProductCategory } from "@/types";
import { cn } from "@/lib/utils";

type Filter = ProductCategory | "all";

export default function Products() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Product | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="products" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Our Products"
          title="Denim, crafted to spec"
          description="From shuttle-loom selvage to high-recovery stretch — every fabric is developed, woven and finished under one roof."
        />

        {/* Filter bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setFilter(c.key)}
              className={cn("chip", filter === c.key && "chip-active")}
              aria-pressed={filter === c.key}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProductCard
                key={p.slug}
                product={p}
                index={i}
                onOpen={setActive}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="mt-16 text-center text-sm text-bone/50">
            No products in this category yet.
          </p>
        )}
      </div>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </section>
  );
}
