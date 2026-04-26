"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onOpen: (p: Product) => void;
  index?: number;
}

export default function ProductCard({ product, onOpen, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-ink-800/70 shadow-panel"
    >
      {/* Image */}
      <button
        type="button"
        onClick={() => onOpen(product)}
        className="relative aspect-[4/5] w-full overflow-hidden"
        aria-label={`View ${product.title} details`}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />

        <span className="absolute left-5 top-5 chip bg-ink-900/60 backdrop-blur">
          {product.category}
        </span>

        <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-bone/90 text-ink-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </button>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl text-bone">{product.title}</h3>
          <span className="mt-1 shrink-0 text-[0.65rem] uppercase tracking-ultra-wide text-bone/40">
            {product.specs.weight}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-bone/60">
          {product.shortDescription}
        </p>

        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={() => onOpen(product)}
            className="link-underline inline-flex items-center gap-2 text-xs uppercase tracking-ultra-wide text-accent"
          >
            View details
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
