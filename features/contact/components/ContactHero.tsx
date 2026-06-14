"use client";

import Image from "next/image";
import { ArrowRight, Play, Star, Sparkles, Zap, Target } from "lucide-react";
import heroImg from "@/assets/images/hero-cloud.png";

export const ContactHero = () => {
  const badges = [
    { icon: Zap, title: "Quick Response", desc: "We reply within 24h", pos: "top-8 left-2" },
    { icon: Sparkles, title: "Expert Support", desc: "Technical experts", pos: "top-8 right-2" },
    { icon: Target, title: "Project Focused", desc: "Results that scale", pos: "bottom-12 right-0" },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div data-reveal>
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-card">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Let's Talk
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-dark">
            Let's Build Something<br />
            <span className="text-blue-600">Amazing</span> Together
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
            Have a project in mind or need expert digital solutions? We'd love to hear from you. Our team is ready to turn your ideas into scalable, powerful digital products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#form" className="inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-6 py-3.5 rounded-xl font-semibold shadow-glow hover:opacity-95 transition">
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/" className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3.5 rounded-xl font-semibold hover:bg-surface transition">
              View Our Work <Play className="w-4 h-4 fill-current" />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-5">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className={`w-11 h-11 rounded-full border-2 border-background bg-gradient-to-br ${["from-blue-400 to-blue-600","from-purple-400 to-purple-600","from-pink-400 to-rose-500","from-amber-400 to-orange-500"][i-1]}`} />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                <span className="text-sm font-bold ml-1">5.0</span>
                <span className="text-sm text-muted-foreground">(50+ Reviews)</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">Trusted by 50+ companies worldwide</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image src={heroImg} alt="Contact CloudWent" width={1024} height={1024} className="w-full max-w-xl mx-auto animate-float-slow drop-shadow-2xl" />
          <div className="absolute inset-0 pointer-events-none">
            {badges.map((b, i) => (
              <div key={b.title} className={`absolute ${b.pos} bg-card rounded-2xl shadow-card border border-border px-3 py-2.5 flex items-center gap-2.5 animate-float`} style={{ animationDelay: `${i * 0.5}s` }}>
                <span className="w-9 h-9 rounded-xl grid place-items-center bg-primary/10 text-primary">
                  <b.icon className="w-4.5 h-4.5" />
                </span>
                <div>
                  <div className="text-xs font-bold leading-tight">{b.title}</div>
                  <div className="text-[10px] text-muted-foreground">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};