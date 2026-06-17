"use client";

import { Zap, Award, Users } from "lucide-react";
import { FadeIn, SlideUp, StaggerContainer } from "@/components/animations";

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Fast Delivery",
      desc: "We deliver projects on time, every time, with agile methodology.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      desc: "Rigorous testing and code reviews ensure the highest quality.",
    },
    {
      icon: Users,
      title: "Client-First",
      desc: "Your success is our success. We prioritize your business goals.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 transition-colors">
      {/* Light Mode Gradient (Bilkul Hero jaisa) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      {/* Dark Mode Gradient (Bilkul Hero jaisa) */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,oklch(0.15_0.05_250)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <SlideUp>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-primary mb-3">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground dark:text-white">
                Built for Performance<br />and Scale
              </h2>
            </div>
          </div>
        </SlideUp>

        {/* Benefits Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="p-6 rounded-2xl glass-effect dark:bg-slate-800/60 dark:border-white/10 border-border hover:shadow-lg hover:-translate-y-1 transition-all">
                  {/* Icon Box */}
                  <div className="h-12 w-12 rounded-xl bg-primary/20 text-primary dark:bg-blue-500/20 dark:text-blue-400 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  {/* Title & Desc */}
                  <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground dark:text-slate-300 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};