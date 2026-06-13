"use client";

import { FadeIn, SlideUp, StaggerContainer } from "@/components/animations";
import { Calendar, Rocket, Users, Zap } from "lucide-react";

export const Story = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <StaggerContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <FadeIn direction="up">
              <h3 className="text-2xl font-bold text-gray-900">How We Started</h3>
              <p className="text-gray-600 leading-relaxed">
                CloudWent was born out of a simple belief: that every business deserves 
                access to world-class digital solutions. What began as a small team of 
                developers in 2019 has grown into a global digital agency trusted by 
                companies across industries.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p className="text-gray-600 leading-relaxed">
                Over the years, we've expanded our expertise across web development, 
                mobile applications, AI solutions, and cloud infrastructure — all while 
                maintaining our commitment to quality, innovation, and client success.
              </p>
            </FadeIn>
          </div>
          <div className="space-y-6">
            <FadeIn direction="up" delay={0.2}>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses of all sizes with digital solutions that drive 
                growth, streamline operations, and create exceptional user experiences. 
                We believe technology should be an enabler, not a barrier.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-900">Our Promise</h4>
                </div>
                <p className="text-blue-700 text-sm leading-relaxed">
                  We don't just build software — we build long-term partnerships 
                  built on trust, transparency, and measurable results. Your success 
                  is our success.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </StaggerContainer>
    </div>
  );
};