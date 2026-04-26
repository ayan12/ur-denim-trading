"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/nav";
import { whatsappLink } from "@/lib/brand";
import { cn } from "@/lib/utils";

/**
 * Sticky navbar with scroll-state (solidifies on scroll), active-section
 * tracking, and a full-screen mobile menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  /* Lock scroll when the mobile menu is open */
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  /* Active-section tracking via IntersectionObserver */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-ink-900/80 backdrop-blur-lg"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Logo compact={scrolled} />

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-ink-800/60 p-1.5 backdrop-blur md:flex"
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const active = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[0.78rem] uppercase tracking-[0.22em] transition-colors",
                  active ? "text-ink-900" : "text-bone/70 hover:text-bone",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-bone"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
          <a href="#contact" className="btn-primary">
            Inquire
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-ink-800/60 md:hidden"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-[90] bg-ink-900/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              aria-label="Mobile"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="container flex flex-col gap-2 py-10"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className="flex items-center justify-between border-b border-white/5 py-5 font-display text-3xl text-bone"
                >
                  <span>{link.label}</span>
                  <span className="text-xs uppercase tracking-ultra-wide text-bone/30">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-ghost w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Send an Inquiry
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
