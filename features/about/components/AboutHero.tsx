// features/about/components/AboutHero.tsx
"use client";

import Link from "next/link";
import { ArrowRight, Lightbulb, ShieldCheck, Award, Target, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import heroImg from "@/assets/images/hero-cloud.png";

export const AboutHero = () => {
  const values = [
    { icon: Lightbulb, title: "Innovation", text: "We embrace new ideas and tech.", pos: "top-4 left-0" },
    { icon: ShieldCheck, title: "Integrity", text: "We build trust through transparency.", pos: "top-4 right-0" },
    { icon: Award, title: "Excellence", text: "We deliver quality in everything we do.", pos: "bottom-8 left-0" },
    { icon: Target, title: "Impact", text: "We create solutions that drive growth.", pos: "bottom-8 right-0" },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,oklch(0.15_0.05_250)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-reveal>
            <div className="inline-flex items-center gap-2 bg-card dark:bg-slate-800 border border-border dark:border-slate-700 rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground dark:text-slate-400 shadow-card">
              <Sparkles className="w-3.5 h-3.5 text-primary dark:text-blue-400" /> Who We Are
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-dark dark:text-white">
              Building Digital Solutions That Drive <span className="text-primary dark:text-blue-400">Real Impact</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground dark:text-slate-400 max-w-xl leading-relaxed">
              At CloudWent, we combine modern technologies, creative thinking, and a passion for excellence to build
              scalable digital products that help businesses grow and thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition dark:bg-blue-500 dark:hover:bg-blue-600">
                Our Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-card dark:bg-slate-800 border border-border dark:border-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-surface dark:hover:bg-slate-700 transition">
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-indigo-800 border-2 border-white dark:border-slate-950" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="font-semibold text-dark dark:text-white">5.0</span>
                  <span className="text-muted-foreground dark:text-slate-400 text-sm">(50+ Reviews)</span>
                </div>
                <p className="text-sm text-muted-foreground dark:text-slate-400">Trusted by 50+ companies worldwide</p>
              </div>
            </div>
          </div>

          <div className="relative" data-reveal="scale" data-delay="2">
            {/* Desktop layout */}
            <div className="relative h-[480px] hidden md:block">
              <Image src={heroImg} alt="CloudWent" className="absolute inset-0 w-full h-full object-contain animate-float-slow drop-shadow-2xl" />
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`absolute ${v.pos} bg-card/90 dark:bg-slate-800/90 backdrop-blur border border-border dark:border-slate-700 rounded-2xl p-4 shadow-elegant max-w-[200px] hover-lift`}
                  data-reveal
                  data-delay={String(i + 1)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 grid place-items-center rounded-lg bg-primary/10 dark:bg-blue-900/30 text-primary dark:text-blue-400 shrink-0">
                      <v.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm text-dark dark:text-white">{v.title}</div>
                      <p className="text-xs text-muted-foreground dark:text-slate-400 mt-0.5">{v.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile layout */}
            <div className="md:hidden">
              <Image src={heroImg} alt="CloudWent" className="w-full max-w-sm mx-auto animate-float-slow drop-shadow-2xl" />
              <div className="grid grid-cols-2 gap-3 mt-6">
                {values.map((v, i) => (
                  <div
                    key={v.title}
                    className="bg-card dark:bg-slate-800 border border-border dark:border-slate-700 rounded-2xl p-4 shadow-elegant"
                    data-reveal
                    data-delay={String(i + 1)}
                  >
                    <div className="w-9 h-9 grid place-items-center rounded-lg bg-primary/10 dark:bg-blue-900/30 text-primary dark:text-blue-400 mb-2">
                      <v.icon className="w-5 h-5" />
                    </div>
                    <div className="font-semibold text-sm text-dark dark:text-white">{v.title}</div>
                    <p className="text-xs text-muted-foreground dark:text-slate-400 mt-0.5">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}