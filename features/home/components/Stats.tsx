"use client";

import { Rocket, Users, Activity, Calendar, Zap, Shield, Code, Layers } from "lucide-react";
import { FadeIn } from "@/components/animations";

export const Stats = () => {
  const stats = [
    { 
      icon: Rocket, 
      value: "50+", 
      label: "Projects Delivered", 
      color: "text-green-400",
      description: "From MVPs to enterprise solutions"
    },
    { 
      icon: Users, 
      value: "20+", 
      label: "Happy Clients", 
      color: "text-blue-400",
      description: "Across 10+ industries"
    },
    { 
      icon: Activity, 
      value: "99.9%", 
      label: "Uptime & Reliability", 
      color: "text-purple-400",
      description: "Guaranteed SLA commitment"
    },
    { 
      icon: Calendar, 
      value: "5+", 
      label: "Years of Experience", 
      color: "text-yellow-400",
      description: "Building excellence since 2019"
    },
  ];

  return (
    <section className="py-12 bg-[#0B101B] border-y border-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
          {stats.map((stat, i) => (
            <FadeIn
              key={i}
              direction="up"
              delay={i * 0.1}
              className="group p-6 lg:p-8 text-center flex flex-col items-center justify-center border-r border-gray-800 last:border-r-0 hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-center gap-3 text-white mb-1">
                <stat.icon className={`h-6 w-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-3xl lg:text-4xl font-bold text-white">
                  {stat.value}
                </span>
              </div>
              <span className="text-gray-400 text-sm font-medium mb-1">{stat.label}</span>
              <span className="text-gray-500 text-xs hidden sm:block">{stat.description}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};