"use client";

import Link from "next/link";
import { ArrowRight, Headphones } from "lucide-react";

export const ConsultBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-[#0B101B] dark:to-[#0B101B] text-white rounded-3xl px-8 py-8 flex flex-wrap items-center justify-between gap-6 relative overflow-hidden shadow-lg dark:shadow-blue-900/20">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_50%,oklch(0.6_0.2_260)_0%,transparent_50%)] dark:opacity-10 pointer-events-none" />
        
        <div className="relative flex items-center gap-5 z-10">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/20 dark:bg-blue-500/10 grid place-items-center text-blue-400 dark:text-blue-300">
            <Headphones className="w-8 h-8" />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-blue-400 dark:text-blue-300">
              HAVE A PROJECT IDEA?
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-1">
              Book a Free Consultation
            </h3>
            <p className="text-sm text-white/65 dark:text-slate-300 mt-1 max-w-md">
              Let's discuss your goals and how we can help you bring them to life.
            </p>
          </div>
        </div>

        <Link
          href="#form"
          className="relative inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 px-6 py-3.5 rounded-xl font-semibold hover:scale-[1.02] transition shadow-md dark:shadow-slate-900/50"
        >
          Book a Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};