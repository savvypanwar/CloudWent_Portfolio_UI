"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader/SectionHeader";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqProps {
  faqs: FaqItem[];
}

export const FAQ = ({ faqs }: FaqProps) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-24 transition-colors">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      <div className="absolute inset-0 -z-10 hidden dark:block bg-background" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="FAQ"
          title="Questions, Answered"
          align="center"
          className="mb-12"
        />

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.id}
                className="rounded-2xl border border-border bg-background overflow-hidden transition-colors"
              >
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