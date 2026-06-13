"use client";

import { FadeIn, StaggerContainer } from "@/components/animations";
import { Shield, Sparkles, Users, Zap, Heart, Globe } from "lucide-react";

export const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity First",
      desc: "We believe in honest, transparent communication and doing the right thing every time.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Sparkles,
      title: "Innovation Driven",
      desc: "We stay ahead of the curve by embracing modern technologies and creative solutions.",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Users,
      title: "Client Partnership",
      desc: "We treat our clients as partners, working together to achieve their business goals.",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Zap,
      title: "Excellence Every Time",
      desc: "We never settle for 'good enough' — we deliver quality that exceeds expectations.",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: Heart,
      title: "People First",
      desc: "Our team is our greatest asset. We invest in their growth, well-being, and success.",
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
    {
      icon: Globe,
      title: "Global Impact",
      desc: "We build solutions that work across borders, cultures, and scales of operation.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <StaggerContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, i) => (
          <FadeIn key={i} direction="up" delay={i * 0.05}>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div
                className={`h-12 w-12 rounded-xl ${value.bg} ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </StaggerContainer>
  );
};