"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

/**
 * Counts from 0 → value once the element enters the viewport.
 * Gracefully falls back to the final value when reduced motion is preferred.
 */
export default function StatsCounter({
  value,
  suffix = "",
  duration = 1.8,
}: StatsCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
