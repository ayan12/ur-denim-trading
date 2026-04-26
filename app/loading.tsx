export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-ink-900"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-14 w-14">
          <span className="absolute inset-0 rounded-full border border-white/10" />
          <span className="absolute inset-0 rounded-full border-t border-accent animate-spin" />
        </div>
        <p className="text-xs uppercase tracking-ultra-wide text-bone/60">
          UR Denim — Loading
        </p>
      </div>
    </div>
  );
}
