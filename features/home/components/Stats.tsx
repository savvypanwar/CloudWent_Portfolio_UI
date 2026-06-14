// src/features/home/components/Stats.tsx

"use client";

import { Rocket, Users, ShieldCheck, Calendar } from "lucide-react";

export const Stats = () => {
  const stats = [
    {
      icon: Rocket,
      value: "50+",
      label: "Projects Delivered",
      iconColor: "text-teal-400",
      boxColor: "bg-teal-400/10",
      borderColor: "border-teal-400/20",
    },
    {
      icon: Users,
      value: "20+",
      label: "Happy Clients",
      iconColor: "text-blue-400",
      boxColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
    },
    {
      icon: ShieldCheck,
      value: "99.9%",
      label: "Uptime & Reliability",
      iconColor: "text-yellow-400",
      boxColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/20",
    },
    {
      icon: Calendar,
      value: "5+",
      label: "Years of Experience",
      iconColor: "text-lime-400",
      boxColor: "bg-lime-400/10",
      borderColor: "border-lime-400/20",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Main Container */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0B101B] p-6 md:p-8">
          
          {/* Blue Glow on Left Side */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,oklch(0.6_0.2_260)_0%,transparent_50%)]" />

          {/* Grid */}
          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-start"
              >
                {/* Icon Box */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.boxColor} border ${stat.borderColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-2xl font-bold text-white md:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-400 md:text-sm">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};