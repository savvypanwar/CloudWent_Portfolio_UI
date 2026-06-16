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
    <section className="py-24 bg-white dark:bg-[#0B101B] transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        {/* ✅ Left-aligned header */}
        <div className="max-w-2xl mb-12" data-reveal>
          <p className="text-xs font-bold tracking-[0.2em] text-primary dark:text-blue-400 mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark dark:text-white">
            Questions, Answered
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden shadow-sm transition-colors"
                data-reveal
                data-delay={String((i % 4) + 1)}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-gray-900 dark:text-white">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">{f.a}</p>
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