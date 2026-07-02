import { Rocket, Users, ShieldCheck, Calendar } from "lucide-react";

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
};

export const Stats = ({ stats }: StatsProps) => {
  return (
    <section className="py-10 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-dark p-6 md:p-8 shadow-glow">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,oklch(0.6_0.2_260)_0%,transparent_50%)]" />
          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
            {stats.map((stat, i) => {
              const IconComponent = iconMap[stat.icon] || Rocket;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-start card-hover border border-transparent hover:border-white/10 rounded-xl p-2 transition-all duration-300 group"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.boxColor} border ${stat.borderColor} group-hover:scale-110 transition-transform duration-300`}
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