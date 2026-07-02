"use client";

import Link from "next/link";
import { ArrowRight, Headphones } from "lucide-react";

export const ConsultBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-900 text-primary-foreground rounded-3xl px-8 py-8 flex flex-wrap items-center justify-between gap-6 relative overflow-hidden shadow-lg dark:shadow-blue-900/20">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_50%,oklch(0.6_0.2_260)_0%,transparent_50%)] dark:opacity-10 pointer-events-none" />
        
        <div className="relative flex items-center gap-5 z-10">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/20 dark:bg-primary/10 grid place-items-center text-blue-400 dark:text-primary">
            <Headphones className="w-8 h-8" />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-blue-400 dark:text-primary">
              HAVE A PROJECT IDEA?
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-1">
              Book a Free Consultation
            </h3>
            <p className="text-sm text-white/65 dark:text-muted-foreground mt-1 max-w-md">
              Let's discuss your goals and how we can help you bring them to life.
            </p>
          </div>
        </div>

        <Link
          href="#form"
          className="relative inline-flex items-center gap-2 bg-card text-blue-600 dark:text-primary px-6 py-3.5 rounded-xl font-semibold hover:scale-[1.02] transition shadow-md dark:shadow-background/50 hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Book a Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};