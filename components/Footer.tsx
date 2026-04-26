import { Instagram, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";
import Logo from "./Logo";
import { BRAND, whatsappLink } from "@/lib/brand";
import { NAV_LINKS } from "@/lib/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/5 bg-ink-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="container grid gap-12 py-20 md:grid-cols-12">
        {/* Brand col */}
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-bone/60">
            Premium denim woven, cut and shipped from Indonesia. Selvage, raw,
            Japanese-style, stretch and custom programs for global brands that
            care about craftsmanship.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <SocialLink href={BRAND.social.instagram} label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={BRAND.social.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={BRAND.social.x} label="X / Twitter">
              <Twitter className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={`mailto:${BRAND.email}`} label="Email">
              <Mail className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={whatsappLink()} label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        {/* Quick links */}
        <div className="md:col-span-3">
          <p className="text-[0.7rem] uppercase tracking-ultra-wide text-accent">
            Explore
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-bone/70 transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <p className="text-[0.7rem] uppercase tracking-ultra-wide text-accent">
            Get in touch
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="text-bone/60">{BRAND.address}</li>
            <li>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-bone hover:text-accent link-underline"
              >
                {BRAND.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone hover:text-accent link-underline"
              >
                WhatsApp · {BRAND.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline" />

      <div className="container flex flex-col items-start justify-between gap-4 py-6 text-xs text-bone/40 md:flex-row md:items-center">
        <p>
          © {year} {BRAND.name}. All rights reserved.
        </p>
        <p>
          Designed with craft · Built on Next.js · Hosted on Vercel
        </p>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-bone/70 transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
    >
      {children}
    </a>
  );
}
