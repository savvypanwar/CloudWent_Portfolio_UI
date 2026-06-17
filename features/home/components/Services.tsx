import { 
  Code2, 
  GraduationCap, 
  Cloud, 
  Smartphone, 
  Sparkles, 
  CloudCog,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

export const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      desc: "Modern, responsive and high-performance websites and web applications.",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      icon: GraduationCap,
      title: "LMS Development",
      desc: "Feature-rich LMS platforms for education, training and corporate learning.",
      color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
      icon: Cloud,
      title: "SaaS Development",
      desc: "Scalable SaaS products that help you grow your business globally.",
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      desc: "Cross-platform mobile apps that deliver exceptional user experiences.",
      color: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    },
    {
      icon: Sparkles,
      title: "AI Solutions",
      desc: "AI-powered solutions to automate processes and unlock new opportunities.",
      color: "bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-900/30 dark:text-fuchsia-400",
    },
    {
      icon: CloudCog,
      title: "Cloud & DevOps",
      desc: "Secure, reliable and cost-effective cloud solutions on AWS and beyond.",
      color: "bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400",
    },
  ];

  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div 
              key={s.title} 
              className="group glass-effect rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl grid place-items-center ${s.color} mb-4`}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-1.5 text-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              <ArrowRight className="w-5 h-5 text-primary mt-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};