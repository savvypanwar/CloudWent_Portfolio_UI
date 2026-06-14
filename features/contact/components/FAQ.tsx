"use client";

import { useState } from "react";
import { Minus, Plus, HelpCircle } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    { q: "How quickly will you respond to my inquiry?", a: "We respond to all inquiries within 24 hours on business days." },
    { q: "What industries do you work with?", a: "Education, fintech, healthcare, e-commerce, and SaaS across many verticals." },
    { q: "What information should I include in my message?", a: "Project goals, timeline, budget range, and any technical constraints." },
    { q: "Can you help with an ongoing project?", a: "Absolutely — we routinely join existing teams to ship and stabilise." },
    { q: "Do you offer free consultations?", a: "Yes. The first 30-minute discovery call is on us." },
    { q: "Do you sign NDA for projects?", a: "Yes, we're happy to sign your NDA or provide our standard one." },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-card border border-border rounded-3xl shadow-card p-8 md:p-10 grid lg:grid-cols-[3fr_1fr] gap-10 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-dark mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="text-left bg-surface border border-border rounded-xl px-4 py-3.5 hover:border-primary/40 transition"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold">{f.q}</span>
                      {isOpen ? <Minus className="w-4 h-4 text-primary shrink-0" /> : <Plus className="w-4 h-4 text-muted-foreground shrink-0" />}
                    </div>
                    {isOpen && <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{f.a}</p>}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:grid place-items-center">
            <div className="w-40 h-40 rounded-3xl bg-gradient-primary grid place-items-center shadow-glow">
              <HelpCircle className="w-20 h-20 text-white/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};