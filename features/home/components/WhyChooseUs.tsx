"use client";

import { Zap, Award, Users } from "lucide-react";
import { FadeIn, SlideUp, StaggerContainer } from "@/components/animations";

const iconMap: Record<string, any> = {
  zap: Zap,
  award: Award,
  users: Users,
};

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseUsProps {
  benefits: BenefitItem[];
}

export const WhyChooseUs = ({ benefits }: WhyChooseUsProps) => {
  return (
    <section className="relative overflow-hidden py-24 transition-colors">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,oklch(0.15_0.05_250)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <SlideUp>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-primary mb-3">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
                Built for Performance<br />and Scale
              </h2>
            </div>
          </div>
        </SlideUp>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const IconComponent = iconMap[benefit.icon] || Zap;
              return (
                <FadeIn key={benefit.id} direction="up" delay={i * 0.1}>
                  <div className="p-6 rounded-2xl glass-effect border-border hover:shadow-lg hover:-translate-y-1 transition-all">
                    <div className="h-12 w-12 rounded-xl bg-primary/20 text-primary dark:bg-primary/20 dark:text-primary flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};