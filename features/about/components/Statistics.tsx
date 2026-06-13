"use client";

import { FadeIn, StaggerContainer } from "@/components/animations";
import { Rocket, Users, Calendar, Award, Globe, Code } from "lucide-react";

export const Statistics = () => {
  const stats = [
    { icon: Rocket, value: "50+", label: "Projects Delivered", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Users, value: "25+", label: "Team Members", color: "text-purple-600", bg: "bg-purple-50" },
    { icon: Calendar, value: "5+", label: "Years in Business", color: "text-green-600", bg: "bg-green-50" },
    { icon: Award, value: "98%", label: "Client Satisfaction", color: "text-orange-600", bg: "bg-orange-50" },
    { icon: Globe, value: "10+", label: "Countries Served", color: "text-pink-600", bg: "bg-pink-50" },
    { icon: Code, value: "100K+", label: "Lines of Code", color: "text-indigo-600", bg: "bg-indigo-50" },
  ];

  return (
    <StaggerContainer>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, i) => (
          <FadeIn key={i} direction="up" delay={i * 0.03}>
            <div className="p-6 text-center rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 group">
              <div
                className={`h-12 w-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-gray-900 block">{stat.value}</span>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </StaggerContainer>
  );
};