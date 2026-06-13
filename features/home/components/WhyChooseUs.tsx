"use client";

import { Rocket, Users, Activity, Calendar, Award, Zap } from "lucide-react";
import { FadeIn, SlideUp, StaggerContainer } from "@/components/animations";

export const WhyChooseUs = () => {
  const stats = [
    { icon: Rocket, value: "50+", label: "Projects Delivered", color: "text-green-400" },
    { icon: Users, value: "20+", label: "Happy Clients", color: "text-blue-400" },
    { icon: Activity, value: "99.9%", label: "Uptime & Reliability", color: "text-purple-400" },
    { icon: Calendar, value: "5+", label: "Years of Experience", color: "text-yellow-400" },
  ];

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
    <section className="py-24 bg-[#0B101B]">
      <div className="container mx-auto px-6 lg:px-8">
        <SlideUp>
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
              Built for Performance<br />and Scale
            </h2>
          </div>
        </SlideUp>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 rounded-2xl overflow-hidden border border-gray-700/50 bg-gray-800/50">
          {stats.map((stat, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <div className="p-6 lg:p-8 text-center flex flex-col items-center justify-center border-r border-gray-700/50 last:border-r-0">
                <div className="flex items-center gap-3 text-white mb-1">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  <span className="text-3xl lg:text-4xl font-bold text-white">
                    {stat.value}
                  </span>
                </div>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Benefits */}
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