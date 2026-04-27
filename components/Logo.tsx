import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  compact?: boolean;
}

/**
 * Brand mark — heavy geometric sans matching the URDENIM wordmark.
 */
export default function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="#home"
      aria-label="URDENIM Trading Indo — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        aria-hidden
        className="relative grid h-9 w-9 place-items-center rounded-sm border border-white/15 bg-ink-800 transition-colors group-hover:border-accent"
      >
        <span className="font-display text-base text-bone transition-colors group-hover:text-accent">
          U
        </span>
        <span className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-white/5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base tracking-tight text-bone transition-colors group-hover:text-accent">
          URDENIM
        </span>
        {!compact && (
          <span className="mt-1 font-display text-[0.55rem] tracking-[0.25em] text-bone/50">
            TRADING INDO
          </span>
        )}
      </span>
    </Link>
  );
}
