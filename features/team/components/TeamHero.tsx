"use client";

import { FadeIn, SlideUp, TextReveal } from "@/components/animations";
import { Users } from "lucide-react";

export const TeamHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-700 py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-white/10 mb-6">
              <Users className="h-4 w-4" />
              Our Team
            </div>
          </FadeIn>
          
          <SlideUp delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
              <TextReveal text="Experts Behind" delay={0.2} />
              <br />
              <span className="text-blue-200">
                <TextReveal text="Your Success" delay={0.4} />
              </span>
            </h1>
          </SlideUp>
          
          <SlideUp delay={0.4}>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Passionate professionals with expertise in modern technologies, cloud solutions, 
              and AI-driven innovation, dedicated to building digital products that transform businesses.
            </p>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};