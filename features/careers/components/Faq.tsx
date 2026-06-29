"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqProps {
  faqs: FaqItem[];
}

export const Faq = ({ faqs }: FaqProps) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Questions, Answered</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.id} className="glass-effect border-border rounded-2xl overflow-hidden transition-colors">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-foreground">{f.question}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.answer}</p>
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