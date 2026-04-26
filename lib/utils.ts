import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class strings, de-duplicating conflicting utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Standard spring for premium micro-interactions. */
export const softSpring = { type: "spring", stiffness: 120, damping: 18, mass: 0.6 } as const;

/** Easing used across reveal animations. */
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
