"use client"; // ✅ Because of useState

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqsData = [
  { q: "Are roles remote or in-office?", a: "All roles are remote-first. We're distributed across multiple time zones with 4 hours of daily overlap for collaboration." },
  { q: "What's your interview process like?", a: "A short intro call, a paid craft round that mirrors real work, and a values conversation. Most candidates finish the loop in under two weeks." },
  { q: "Do you sponsor visas?", a: "We hire as contractors or through an Employer of Record in most countries. We don't sponsor work visas at this time." },
  { q: "I don't see a role that fits. Can I still apply?", a: "Yes — send an open application. If your craft is strong and our trajectories align, we'll find a way to talk." },
  { q: "What does the comp look like?", a: "Competitive base, meaningful equity and transparent bands. We share the range up front in the first call." },
];

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Questions, Answered</h2>
        </div>
        <div className="space-y-3">
          {faqsData.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="glass-effect border-border rounded-2xl overflow-hidden transition-colors">
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