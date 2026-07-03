import { Check, ArrowRight, Code2, GraduationCap, Cloud, Smartphone, Sparkles, CloudCog } from "lucide-react";
import Link from "next/link";

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

interface ServicesProps {
  services: ServiceItem[];
}

export const Services = ({ services }: ServicesProps) => {
  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">
              OUR SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
              End-to-end Solutions<br />For Every Need
            </h2>
          </div>
          <Link 
            href="/services" 
            className="text-primary font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const IconComponent = iconMap[s.icon] || Code2;
            return (
              <div
                key={s.id}
                className="group glass-effect rounded-2xl p-6 border border-transparent hover:border-primary/30 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl grid place-items-center mb-4 ${s.iconBg} ${s.iconColor} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-1.5 text-foreground group-hover:text-primary transition-colors duration-300">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                <ul className="mt-4 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
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
