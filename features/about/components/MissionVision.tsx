import { Users, Smile, Globe2, Trophy, Target, Lightbulb } from "lucide-react";

export const MissionVision = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Smile, value: "200+", label: "Projects Delivered" },
    { icon: Globe2, value: "30+", label: "Countries Served" },
    { icon: Trophy, value: "5+", label: "Years of Excellence" },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="rounded-3xl glass-effect p-10 md:p-12 border-border">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 grid place-items-center rounded-lg bg-primary/10 text-primary">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-xl text-foreground">
                  Our Mission <span className="inline-block w-6 h-0.5 bg-primary align-middle ml-2" />
                </h3>
              </div>
              <p className="mt-3 text-muted-foreground max-w-md">
                To empower businesses with innovative digital solutions that solve real problems, enhance user experiences, and create long-term value.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 grid place-items-center rounded-lg bg-primary/10 text-primary">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-xl text-foreground">
                  Our Vision <span className="inline-block w-6 h-0.5 bg-primary align-middle ml-2" />
                </h3>
              </div>
              <p className="mt-3 text-muted-foreground max-w-md">
                To be a globally trusted technology partner known for delivering transformative digital experiences.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="relative overflow-hidden rounded-2xl glass-effect p-5 hover-lift"
                data-reveal
                data-delay={String(i + 1)}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center mb-6">
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};