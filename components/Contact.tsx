"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle, Send, AlertCircle, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { BRAND, whatsappLink } from "@/lib/brand";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = { name: "", email: "", company: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function validate(values: FormState): Errors {
    const errs: Errors = {};
    if (!values.name.trim()) errs.name = "Please enter your name.";
    if (!values.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = "That email doesn't look valid.";
    }
    if (!values.message.trim() || values.message.trim().length < 12) {
      errs.message = "Tell us a little more about what you need (min. 12 characters).";
    }
    return errs;
  }

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    // Simulated submit — wire to an API route or form service (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setForm(INITIAL);

    // Reset success state after a while so the form can be reused.
    setTimeout(() => setStatus("idle"), 4500);
  }

  return (
    <section id="contact" className="section">
      <div className="container grid gap-16 lg:grid-cols-12">
        {/* Left col */}
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Let's build your next denim program."
            description="Share your requirements and our sales team will come back within one business day with fabric options, pricing and lead-time indications."
          />

          <ScrollReveal delay={0.15} className="mt-10 space-y-4">
            <InfoRow icon={Mail} label="Email" value={BRAND.email} href={`mailto:${BRAND.email}`} />
            <InfoRow
              icon={MessageCircle}
              label="WhatsApp"
              value={BRAND.whatsappDisplay}
              href={whatsappLink()}
              external
            />
            <InfoRow icon={Phone} label="Phone" value={BRAND.phone} href={`tel:${BRAND.phone.replace(/\s/g, "")}`} />
            <InfoRow icon={MapPin} label="Studio" value={BRAND.address} />
          </ScrollReveal>

          <ScrollReveal delay={0.25} className="mt-10">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with us on WhatsApp
            </a>
          </ScrollReveal>
        </div>

        {/* Form */}
        <ScrollReveal delay={0.1} className="lg:col-span-7">
          <form
            noValidate
            onSubmit={onSubmit}
            aria-label="Contact form"
            className="panel p-6 md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                id="name"
                label="Name"
                value={form.name}
                onChange={(v) => onChange("name", v)}
                error={errors.name}
                autoComplete="name"
                required
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => onChange("email", v)}
                error={errors.email}
                autoComplete="email"
                required
              />
              <Field
                id="company"
                label="Company (optional)"
                value={form.company}
                onChange={(v) => onChange("company", v)}
                error={errors.company}
                autoComplete="organization"
                className="md:col-span-2"
              />

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[0.7rem] uppercase tracking-ultra-wide text-bone/50"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => onChange("message", e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Tell us about your product, volumes, fabrics of interest, target lead time…"
                  className={cn(
                    "input-base resize-y",
                    errors.message && "border-red-400/60 focus:border-red-400",
                  )}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 flex items-center gap-2 text-xs text-red-300">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary"
              >
                {status === "submitting" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-900/30 border-t-ink-900" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Inquiry
                  </>
                )}
              </button>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Chat
              </a>

              <p className="ml-auto text-xs text-bone/40">
                We reply within 1 business day.
              </p>
            </div>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-6 flex items-center gap-3 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-200"
                  role="status"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  Thanks — your message is through. We&apos;ll be in touch shortly.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const body = (
    <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-ink-800/60 p-4 transition-colors hover:border-accent/40">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-ink-900 text-accent">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-[0.6rem] uppercase tracking-ultra-wide text-bone/40">
          {label}
        </p>
        <p className="mt-1 text-sm text-bone">{value}</p>
      </div>
    </div>
  );

  if (!href) return body;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block"
    >
      {body}
    </a>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
  required,
  autoComplete,
  className,
}: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-[0.7rem] uppercase tracking-ultra-wide text-bone/50"
      >
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "input-base",
          error && "border-red-400/60 focus:border-red-400",
        )}
        required={required}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-2 text-xs text-red-300">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </p>
      )}
    </div>
  );
}
