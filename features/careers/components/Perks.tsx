import { Laptop, Heart, Plane, TrendingUp, Coffee, Users } from "lucide-react";

const iconMap: Record<string, any> = {
  laptop: Laptop,
  heart: Heart,
  plane: Plane,
  "trending-up": TrendingUp,
  coffee: Coffee,
  users: Users,
};

interface PerkItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface PerksProps {
  perks: PerkItem[];
}

export const Perks = ({ perks }: PerksProps) => {
  return (
    <section className="border-y border-border bg-background py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">BENEFITS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Perks That Actually Matter</h2>
          <p className="mt-4 text-muted-foreground">No ping-pong tables. Real support for the life you live outside work.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {perks.map((p) => {
            const IconComponent = iconMap[p.icon] || Heart;
            return (
              <div
                key={p.id}
                className="glass-effect border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all card-hover cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl grid place-items-center bg-primary/10 text-primary mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-1.5 text-foreground group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};