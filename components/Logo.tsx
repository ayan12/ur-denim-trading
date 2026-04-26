import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  compact?: boolean;
}

/**
 * Brand mark — monospace-like, heavily tracked uppercase.
 * Uses a two-tone hairline under the wordmark to echo a denim rivet.
 */
export default function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="#home"
      aria-label="UR Denim Trading Indo — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        aria-hidden
        className="relative grid h-8 w-8 place-items-center rounded-sm border border-white/15 bg-ink-800 transition-colors group-hover:border-accent"
      >
        <span className="font-display text-[0.85rem] font-bold tracking-tight text-bone transition-colors group-hover:text-accent">
          UR
        </span>
        <span className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-white/5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-semibold tracking-[0.32em] text-bone transition-colors group-hover:text-accent">
          UR DENIM
        </span>
        {!compact && (
          <span className="mt-1 text-[0.6rem] uppercase tracking-[0.35em] text-bone/40">
            Trading Indo
          </span>
        )}
      </span>
    </Link>
  );
}
