import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <ScrollReveal as="span" className="eyebrow">
          {eyebrow}
        </ScrollReveal>
      )}
      <ScrollReveal as="span" delay={0.05}>
        <h2 className="section-title text-balance">{title}</h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal as="span" delay={0.1}>
          <p
            className={cn(
              "text-bone/60 leading-relaxed text-base md:text-lg max-w-2xl text-balance",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
