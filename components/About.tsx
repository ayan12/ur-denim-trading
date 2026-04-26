"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Globe2, Factory, Leaf } from "lucide-react";
import SectionHeading from "./SectionHeading";
import StatsCounter from "./StatsCounter";
import ScrollReveal from "./ScrollReveal";
import { BRAND } from "@/lib/brand";

const COLLAGE = [
  {
    src: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=1200&q=80",
    alt: "Close-up of selvage denim weave",
    className: "col-span-6 row-span-2 aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=1200&q=80",
    alt: "Shuttle loom in operation",
    className: "col-span-6 aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1200&q=80",
    alt: "Indigo dye yarn on spools",
    className: "col-span-3 aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&w=1200&q=80",
    alt: "Denim jeans folded on a wooden surface",
    className: "col-span-3 aspect-square",
  },
];

const PILLARS = [
  {
    icon: Factory,
    title: "In-house weaving",
    body: "Shuttle looms, rapier looms and rope-dye lines under one roof — quality owned at every step.",
  },
  {
    icon: Award,
    title: "Tested & certified",
    body: "4-point roll inspection, SGS / Intertek reports, OEKO-TEX® options on request.",
  },
  {
    icon: Globe2,
    title: "Global logistics",
    body: "FOB Jakarta/Surabaya, CIF & DDP available. Reliable lanes across 4 continents.",
  },
  {
    icon: Leaf,
    title: "Responsible supply",
    body: "BCI cotton, recycled blends, low-impact indigo and water-saving finishing programs.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        {/* Collage */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-12 gap-3">
            {COLLAGE.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.9,
                  delay: 0.08 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative overflow-hidden rounded-xl border border-white/5 shadow-panel ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-6">
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Built on craftsmanship, run at modern scale."
            description={BRAND.description}
          />

          <ScrollReveal delay={0.15} className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <Stat value={12} suffix="+" label="Years weaving" />
            <Stat value={18} label="Countries exported" />
            <Stat value={140} suffix="+" label="Brand partners" />
            <Stat value={4} suffix="M+" label="Meters shipped / yr" />
          </ScrollReveal>

          <ScrollReveal delay={0.25} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#products" className="btn-primary">
              Browse collection
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              Request a mill tour
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Pillars */}
      <div className="container mt-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <ScrollReveal
              key={p.title}
              delay={0.05 * i}
              className="panel p-6 transition-colors hover:border-accent/40"
            >
              <p.icon className="h-6 w-6 text-accent" aria-hidden />
              <h3 className="mt-5 font-display text-lg text-bone">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bone/60">{p.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="border-t border-white/10 pt-5">
      <p className="font-display text-4xl text-bone md:text-5xl">
        <StatsCounter value={value} suffix={suffix} />
      </p>
      <p className="mt-2 text-[0.65rem] uppercase tracking-ultra-wide text-bone/50">
        {label}
      </p>
    </div>
  );
}
