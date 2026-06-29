"use client";

import { Zap, Award, Users, Target, Shield, Star, Sparkles } from "lucide-react";
import { FadeIn, SlideUp, StaggerContainer } from "@/components/animations";
import { SectionHeader } from "@/components/layout/SectionHeader/SectionHeader";

const iconMap: Record<string, any> = {
  zap: Zap,
  award: Award,
  users: Users,
  target: Target,
  shield: Shield,
  star: Star,
  sparkles: Sparkles,
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
          <SectionHeader
            label="Why Choose Us"
            title={<>Built for Performance<br />and Scale</>}
            className="mb-12"
          />
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