"use client";

import { useState } from "react";
import { Minus, Plus, HelpCircle } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FaqItem[];
}

export const FAQ = ({ faqs }: FAQProps) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-card border border-border rounded-3xl shadow-card p-8 md:p-10 grid lg:grid-cols-[3fr_1fr] gap-10 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="text-left bg-surface border border-border rounded-xl px-4 py-3.5 hover:border-primary/40 transition"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold">{f.question}</span>
                      {isOpen ? <Minus className="w-4 h-4 text-primary shrink-0" /> : <Plus className="w-4 h-4 text-muted-foreground shrink-0" />}
                    </div>
                    {isOpen && <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{f.answer}</p>}
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