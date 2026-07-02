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
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          label="FAQ"
          title="Team & Careers"
          className="max-w-2xl mb-12 mx-auto"
        />
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.id} className="glass-effect border-border rounded-2xl overflow-hidden transition-colors card-hover cursor-pointer">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-primary/10 hover:text-primary transition-colors transition-all duration-300"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">{f.question}</span>
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