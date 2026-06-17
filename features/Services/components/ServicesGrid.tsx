import Link from "next/link";
import { ArrowRight, Check, Code2, GraduationCap, Cloud, Smartphone, Sparkles, CloudCog } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

const servicesData = [
  { 
    icon: Code2, 
    title: "Web Development", 
    desc: "Modern, responsive and high-performance websites and web applications.", 
    bullets: ["Next.js / TanStack", "SSR & SEO", "Headless CMS"], 
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-900/30"
  },
  { 
    icon: GraduationCap, 
    title: "LMS Development", 
    desc: "Feature-rich LMS platforms for education, training and corporate learning.", 
    bullets: ["Courses & quizzes", "Live classes", "Reporting"], 
    iconColor: "text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-50 dark:bg-purple-900/30"
  },
  { 
    icon: Cloud, 
    title: "SaaS Development", 
    desc: "Scalable SaaS products that help you grow your business globally.", 
    bullets: ["Multi-tenant", "Billing & auth", "Analytics"], 
    iconColor: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-50 dark:bg-emerald-900/30"
  },
  { 
    icon: Smartphone, 
    title: "Mobile Applications", 
    desc: "Cross-platform mobile apps that deliver exceptional user experiences.", 
    bullets: ["React Native", "Offline first", "Push & analytics"], 
    iconColor: "text-orange-600 dark:text-orange-400",
    iconBg: "bg-orange-50 dark:bg-orange-900/30"
  },
  { 
    icon: Sparkles, 
    title: "AI Solutions", 
    desc: "AI-powered features and automations that compound team output.", 
    bullets: ["RAG pipelines", "Agentic flows", "Fine-tuning"], 
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
    iconBg: "bg-fuchsia-50 dark:bg-fuchsia-900/30"
  },
  { 
    icon: CloudCog, 
    title: "Cloud & DevOps", 
    desc: "Secure, reliable and cost-effective cloud solutions on AWS and beyond.", 
    bullets: ["AWS / GCP / Azure", "Terraform", "Zero-downtime deploys"], 
    iconColor: "text-sky-600 dark:text-sky-400",
    iconBg: "bg-sky-50 dark:bg-sky-900/30"
  },
];

export const ServicesGrid = () => {
  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((s, i) => (
            <div
              key={s.title}
              className="group glass-effect rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl grid place-items-center ${s.iconBg} ${s.iconColor} mb-4`}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-1.5 text-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              <ul className="mt-4 space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary" /> {b}
                  </li>
                ))}
              </ul>
              <ArrowRight className="w-5 h-5 text-primary mt-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};