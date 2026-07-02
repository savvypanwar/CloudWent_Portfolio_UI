import Link from "next/link";
import { ArrowRight, Check, Code2, GraduationCap, Cloud, Smartphone, Sparkles, CloudCog } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

const iconMap: Record<string, any> = {
  code: Code2,
  graduation: GraduationCap,
  cloud: Cloud,
  smartphone: Smartphone,
  sparkles: Sparkles,
  "cloud-cog": CloudCog,
};

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  iconColor: string;
  iconBg: string;
}

interface ServicesGridProps {
  services: ServiceItem[];
}

export const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">
              CAPABILITIES
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
              End-to-end Solutions<br />For Every Need
            </h2>
          </div>
          <Button asChild variant="outline" size="sm" className="glass-effect border-border hover:bg-muted/50">
            <Link href="/contact">
              Talk to us <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const IconComponent = iconMap[s.icon] || Code2;
            return (
              <div
                key={s.id}
                className="group glass-effect rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all card-hover cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl grid place-items-center ${s.iconBg} ${s.iconColor} mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-1.5 text-foreground group-hover:text-primary transition-colors duration-300">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                <ul className="mt-4 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};