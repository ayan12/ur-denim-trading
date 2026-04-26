"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { easeOutExpo } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "ul" | "span";
  once?: boolean;
}

/**
 * Scroll-triggered fade + lift. Automatically respects
 * prefers-reduced-motion and only animates once into view.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  y = 28,
  className,
  as: As = "div",
  once = true,
}: ScrollRevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = reduce
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: easeOutExpo, delay },
        },
      };

  const MotionTag = motion[As as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
