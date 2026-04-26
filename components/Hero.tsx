"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { BRAND, whatsappLink } from "@/lib/brand";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=2200&q=80";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden pt-24"
    >
      {/* Background image + wash */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/70 to-ink-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,14,24,0.7)_75%)]" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.6) 0 1px, transparent 1px 7px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.35) 0 1px, transparent 1px 7px)",
          }}
        />
      </div>

      <div className="container relative pb-16 md:pb-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 items-end gap-12 md:grid-cols-12"
        >
          <div className="md:col-span-9">
            <motion.span variants={item} className="eyebrow">
              Est. {BRAND.established} · Bandung · Indonesia
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-8 font-display text-display-xl font-bold uppercase leading-[0.92] tracking-tight text-bone text-balance"
            >
              UR Denim
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Trading Indo</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                  className="absolute -bottom-3 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-accent via-accent/60 to-transparent"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-10 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg"
            >
              Premium raw, selvage, Japanese and custom denim — woven in
              Indonesia, finished with obsessive detail, shipped to brands that
              still care how a seam is sewn.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#products" className="btn-primary">
                Explore Products
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.aside
            variants={item}
            className="md:col-span-3 md:justify-self-end"
          >
            <dl className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-8 md:border-l md:border-white/10 md:pl-8">
              <Stat label="Years weaving" value="12+" />
              <Stat label="Countries" value="18" />
              <Stat label="Brand partners" value="140+" />
            </dl>
          </motion.aside>
        </motion.div>

        {/* Scroll hint */}
        <motion.a
          href="#products"
          aria-label="Scroll to products"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-20 flex items-center gap-4 text-[0.65rem] uppercase tracking-ultra-wide text-bone/50 hover:text-accent"
        >
          <span className="h-px w-14 bg-bone/30" />
          Scroll
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.6rem] uppercase tracking-ultra-wide text-bone/40">
        {label}
      </dt>
      <dd className="mt-2 font-display text-3xl text-bone md:text-4xl">
        {value}
      </dd>
    </div>
  );
}
