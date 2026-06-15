"use client";

import { Rocket, Users, ShieldCheck, Calendar } from "lucide-react";

interface TeamStatsProps {
  stats: {
    value: string;
    label: string;
  }[];
}

export const TeamStats = ({ stats }: TeamStatsProps) => {
  // Assign colors to each stat (matching Home page style)
  const colorPalette = [
    { icon: Rocket, iconColor: "text-teal-400", boxColor: "bg-teal-400/10", borderColor: "border-teal-400/20" },
    { icon: Users, iconColor: "text-blue-400", boxColor: "bg-blue-400/10", borderColor: "border-blue-400/20" },
    { icon: ShieldCheck, iconColor: "text-yellow-400", boxColor: "bg-yellow-400/10", borderColor: "border-yellow-400/20" },
    { icon: Calendar, iconColor: "text-lime-400", boxColor: "bg-lime-400/10", borderColor: "border-lime-400/20" },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        
        {/* Main Container */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0B101B] p-6 md:p-8">
          
          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,oklch(0.6_0.2_260)_0%,transparent_50%)]" />

          {/* Grid */}
          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
            {stats.map((stat, i) => {
              const { icon: Icon, iconColor, boxColor, borderColor } = colorPalette[i % colorPalette.length];
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-start"
                >
                  {/* Icon Box */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${boxColor} border ${borderColor}`}>
                    <Icon className={`h-5 w-5 ${iconColor}`} />
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};