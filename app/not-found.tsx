import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 text-display-lg">Page not found</h1>
      <p className="mt-4 max-w-md text-bone/60">
        The thread you followed doesn&apos;t exist here. Let&apos;s get you back to the mill.
      </p>
      <Link href="/" className="btn-primary mt-10">
        Back to Home
      </Link>
    </section>
  );
}
