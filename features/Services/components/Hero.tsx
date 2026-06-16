"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import heroImg from "@/assets/images/hero-cloud.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* ✅ Light Mode Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      
      {/* ✅ Dark Mode Gradient */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,oklch(0.15_0.05_250)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div data-reveal>
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-card dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-primary dark:text-blue-400" /> What we do
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-dark dark:text-white">
            Services That Ship<br />
            <span className="text-gradient-hero dark:text-blue-400">Real Outcomes</span><br />
            For Your Business
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground dark:text-slate-400 max-w-md leading-relaxed">
            From a single landing page to a multi-product platform — we design, build and scale software that earns its place in your business.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#pricing" className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3.5 rounded-xl font-semibold hover:bg-surface transition dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700">
              View Pricing
            </a>
          </div>
          <div className="mt-8 flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 dark:fill-yellow-400 dark:text-yellow-400" />)}
              <span className="text-sm font-bold ml-1 text-slate-800 dark:text-slate-300">5.0</span>
              <span className="text-sm text-muted-foreground dark:text-slate-400">Trusted by 50+ teams</span>
            </div>
          </div>
        </div>

        <div className="relative" data-reveal data-delay="2">
          <Image src={heroImg} alt="CloudWent services platform" width={1024} height={1024} className="w-full max-w-xl mx-auto animate-float-slow drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
};