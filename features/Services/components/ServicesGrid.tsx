"use client";

import Link from "next/link";
import { ArrowRight, Check, Code2, GraduationCap, Cloud, Smartphone, Sparkles, CloudCog } from "lucide-react";

const servicesData = [
  { 
    icon: Code2, 
    title: "Web Development", 
    desc: "Modern, responsive and high-performance websites and web applications.", 
    bullets: ["Next.js / TanStack", "SSR & SEO", "Headless CMS"], 
    color: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-100 dark:border-blue-800"
  },
  { 
    icon: GraduationCap, 
    title: "LMS Development", 
    desc: "Feature-rich LMS platforms for education, training and corporate learning.", 
    bullets: ["Courses & quizzes", "Live classes", "Reporting"], 
    color: "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-100 dark:border-purple-800"
  },
  { 
    icon: Cloud, 
    title: "SaaS Development", 
    desc: "Scalable SaaS products that help you grow your business globally.", 
    bullets: ["Multi-tenant", "Billing & auth", "Analytics"], 
    color: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-100 dark:border-emerald-800"
  },
  { 
    icon: Smartphone, 
    title: "Mobile Applications", 
    desc: "Cross-platform mobile apps that deliver exceptional user experiences.", 
    bullets: ["React Native", "Offline first", "Push & analytics"], 
    color: "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    borderColor: "border-orange-100 dark:border-orange-800"
  },
  { 
    icon: Sparkles, 
    title: "AI Solutions", 
    desc: "AI-powered features and automations that compound team output.", 
    bullets: ["RAG pipelines", "Agentic flows", "Fine-tuning"], 
    color: "bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400",
    borderColor: "border-fuchsia-100 dark:border-fuchsia-800"
  },
  { 
    icon: CloudCog, 
    title: "Cloud & DevOps", 
    desc: "Secure, reliable and cost-effective cloud solutions on AWS and beyond.", 
    bullets: ["AWS / GCP / Azure", "Terraform", "Zero-downtime deploys"], 
    color: "bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400",
    borderColor: "border-sky-100 dark:border-sky-800"
  },
];

export const ServicesGrid = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0B101B] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12" data-reveal>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary dark:text-blue-400 mb-3">
              CAPABILITIES
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark dark:text-white">
              End-to-end Solutions<br />For Every Need
            </h2>
          </div>
          <Link href="/contact" className="text-primary dark:text-blue-400 font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
            Talk to us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((s, i) => (
            <div
              key={s.title}
              className="group bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              data-reveal
              data-delay={String((i % 3) + 1)}
            >
              <div className={`w-12 h-12 rounded-xl grid place-items-center ${s.color} mb-4`}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1.5">
                {s.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {s.desc}
              </p>
              <ul className="mt-4 space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <Check className="w-4 h-4 text-primary dark:text-blue-400" /> {b}
                  </li>
                ))}
              </ul>
              <ArrowRight className="w-5 h-5 text-primary dark:text-blue-400 mt-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};