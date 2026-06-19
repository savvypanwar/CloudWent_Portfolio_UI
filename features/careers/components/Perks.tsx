import { Laptop, Heart, Plane, TrendingUp, Coffee, Users } from "lucide-react";

const perksData = [
  { icon: Laptop, title: "Remote-first", desc: "Work from anywhere. Async by default with light overlap hours." },
  { icon: Heart, title: "Health & Wellness", desc: "Health stipend, mental health days and time to recover." },
  { icon: Plane, title: "Team Retreats", desc: "Twice-a-year off-sites in a new city, fully covered." },
  { icon: TrendingUp, title: "Learning Budget", desc: "$1,500/year for books, courses and conferences." },
  { icon: Coffee, title: "Home Office", desc: "Setup budget for the gear that helps you do your best work." },
  { icon: Users, title: "Real Ownership", desc: "Equity, transparent comp bands and a path to grow." },
];

export const Perks = () => {
  return (
    <section className="border-y border-border bg-background py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">BENEFITS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Perks That Actually Matter</h2>
          <p className="mt-4 text-muted-foreground">No ping-pong tables. Real support for the life you live outside work.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {perksData.map((p, i) => (
            <div
              key={p.title}
              className="glass-effect border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-primary/10 text-primary mb-4">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-1.5 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};