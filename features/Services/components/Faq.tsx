"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How long does a typical project take?", a: "Most marketing sites ship in 2–3 weeks. SaaS products usually run 6–10 weeks for a first release, then continuous iteration after launch." },
  { q: "Do you work with existing teams?", a: "Yes — we embed with in-house engineering and design teams, or run end-to-end as a dedicated squad. We adapt to your rituals." },
  { q: "What do you need from us to start?", a: "A 30-minute discovery call, any existing brand or product context, and a single point of contact. We handle the rest of the scoping." },
  { q: "Do you offer ongoing support?", a: "Every project includes 30 days of post-launch support. After that we offer monthly retainers for maintenance, growth and new features." },
  { q: "Can you sign an NDA?", a: "Absolutely. We sign mutual NDAs before any sensitive details are shared, and we follow strict data-handling practices." },
];

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-24 transition-colors">
      {/* ✅ Light Mode Gradient (Bilkul Hero jaisa) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      
      {/* ✅ Dark Mode Gradient (Bilkul Hero jaisa) */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg-background" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Left-aligned header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Questions, Answered
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-background overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-foreground">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};