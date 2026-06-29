import { Rocket, Users, ShieldCheck, Calendar, Code, Award, Clock } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader/SectionHeader";

interface StatItem {
  icon: string;
  value: string;
  label: string;
  iconColor: string;
  boxColor: string;
  borderColor: string;
}

interface StatsProps {
  stats: StatItem[];
}

const iconMap: Record<string, any> = {
  rocket: Rocket,
  users: Users,
  shield: ShieldCheck,
  calendar: Calendar,
  code: Code,
  award: Award,
  clock: Clock,
};

export const Stats = ({ stats }: StatsProps) => {
  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="Our Impact" title="Numbers That Speak" align="center" className="mb-12" />
        <div className="relative overflow-hidden rounded-3xl bg-dark p-6 md:p-8 shadow-glow">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,oklch(0.6_0.2_260)_0%,transparent_50%)]" />
          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
            {stats.map((stat, i) => {
              const IconComponent = iconMap[stat.icon] || Rocket;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-start"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.boxColor} border ${stat.borderColor}`}
                  >
                    <IconComponent className={`h-5 w-5 ${stat.iconColor}`} />
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-2xl font-bold text-white md:text-3xl">
                      {stat.value}
                    </span>
                    <span className="text-xs text-muted-foreground md:text-sm">
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