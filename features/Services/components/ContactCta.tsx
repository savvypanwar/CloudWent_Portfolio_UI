"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ContactCta = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 px-8 md:px-12 py-10 shadow-lg">
        
        {/* Decorative Cloud Shape */}
        <div className="absolute -left-4 -top-4 opacity-20 dark:opacity-10">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="white">
            <path d="M17.5 19a3.5 3.5 0 1 0 0-7h-1.5A5.5 5.5 0 0 0 5 12.5a5.5 5.5 0 0 0 5.5 5.5h7z" />
          </svg>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div className="text-white max-w-xl">
            <h3 className="text-3xl md:text-4xl font-extrabold">
              Ready to Build Something Amazing?
            </h3>
            <p className="mt-2 text-white/85 dark:text-white/70">
              Let's turn your ideas into scalable digital solutions that drive real results.
            </p>
          </div>

          {/* Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-600 shadow-md hover:scale-105 transition-transform dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          >
            Book a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};