"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { FAQS } from "@/lib/faqs";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers, before you ask."
          description="The most common questions we get from brands, importers and private-label teams."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <ul className="divide-y divide-white/5 rounded-2xl border border-white/5 bg-ink-800/60 shadow-panel">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.question}>
                  <ScrollReveal delay={0.04 * i}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-white/[0.02] md:px-8"
                    >
                      <span className="flex items-baseline gap-5">
                        <span className="hidden font-display text-xs text-accent md:inline">
                          {(i + 1).toString().padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg text-bone md:text-xl">
                          {f.question}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-bone/70 transition-all",
                          isOpen && "rotate-45 border-accent text-accent",
                        )}
                        aria-hidden
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          role="region"
                          aria-labelledby={`faq-trigger-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-7 text-sm leading-relaxed text-bone/70 md:px-8 md:text-base md:pl-16">
                            {f.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </ScrollReveal>
                </li>
              );
            })}
          </ul>

          <ScrollReveal delay={0.2} className="mt-12 text-center">
            <p className="text-sm text-bone/60">
              Still have a question?{" "}
              <a href="#contact" className="text-accent link-underline">
                Ask the team directly →
              </a>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
