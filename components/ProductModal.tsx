"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { X, MessageCircle, ArrowUpRight } from "lucide-react";
import type { Product } from "@/types";
import { whatsappLink } from "@/lib/brand";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  /* ESC to close + body-scroll lock */
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-end justify-center bg-ink-900/80 p-4 backdrop-blur-md sm:items-center"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-card md:grid-cols-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close product details"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-ink-900/70 text-bone/80 backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-square md:col-span-2 md:aspect-auto">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink-900/60 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col gap-6 p-8 md:col-span-3 md:p-10">
              <div>
                <span className="chip">{product.category}</span>
                <h3
                  id="product-modal-title"
                  className="mt-4 font-display text-3xl text-bone md:text-4xl"
                >
                  {product.title}
                </h3>
                <p className="mt-4 leading-relaxed text-bone/70">
                  {product.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 rounded-xl border border-white/5 bg-ink-900/50 p-5">
                <SpecRow label="Weight" value={product.specs.weight} />
                <SpecRow label="Composition" value={product.specs.composition} />
                <SpecRow label="Width" value={product.specs.width} />
                <SpecRow label="Origin" value={product.specs.origin} />
                {product.specs.finish && (
                  <SpecRow label="Finish" value={product.specs.finish} />
                )}
              </div>

              <ul className="flex flex-wrap gap-2">
                {product.highlights.map((h) => (
                  <li key={h} className="chip">
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={`#contact?product=${encodeURIComponent(product.title)}`}
                  onClick={onClose}
                  className="btn-primary"
                >
                  Request Quote
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={whatsappLink(
                    `Hi UR Denim, I'd like to request a quote for ${product.title}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.6rem] uppercase tracking-ultra-wide text-bone/40">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-bone">{value}</dd>
    </div>
  );
}
