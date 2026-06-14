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
    <section className="bg-[#0B101B] text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative ">
        <SlideUp>
  <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
    <div>
      <span className="text-xs font-bold tracking-[0.2em] text-primary mb-3 text-blue-400">
        Why Choose Us
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">
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
                <div className="p-6 rounded-2xl border border-gray-700/50 bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                  <div className="h-12 w-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};