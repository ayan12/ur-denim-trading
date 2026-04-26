"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * First-paint loader. Fades out once the window fires `load`
 * (or after a safety timeout). Uses reduced-motion preferences.
 */
export default function Loader() {
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const hide = () => setVisible(false);
    // Safety cap — never block the page indefinitely.
    const cap = window.setTimeout(hide, 1600);
    if (document.readyState === "complete") {
      window.setTimeout(hide, 400);
    } else {
      window.addEventListener("load", hide, { once: true });
    }
    return () => {
      window.clearTimeout(cap);
      window.removeEventListener("load", hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[999] grid place-items-center bg-ink-900"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={reduce ? false : { scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <span className="font-display text-3xl tracking-[0.4em] text-bone">
                UR DENIM
              </span>
              <motion.span
                className="absolute inset-x-0 -bottom-3 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              />
            </motion.div>
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[0.65rem] uppercase tracking-ultra-wide text-bone/40"
            >
              Crafting your experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
