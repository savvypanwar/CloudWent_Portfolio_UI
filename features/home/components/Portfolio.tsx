
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import portfolioLms from "@/assets/images/portfolio-lms.jpg";
import portfolioFinance from "@/assets/images/portfolio-finance.jpg";
import portfolioHealth from "@/assets/images/portfolio-health.jpg";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "EduSmart LMS",
      desc: "A comprehensive learning management system for modern education.",
      tag: "LMS Platform",
      tagColor: "bg-blue-500",
      image: portfolioLms,
      stack: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
    },
    {
      id: 2,
      title: "CloudFinance",
      desc: "SaaS platform for financial management and analytics.",
      tag: "SaaS Product",
      tagColor: "bg-amber-500",
      image: portfolioFinance,
      stack: ["Next.js", "TypeScript", "Prisma", "AWS"],
    },
    {
      id: 3,
      title: "HealthCare+",
      desc: "Cross-platform mobile app for healthcare booking and patient management.",
      tag: "Mobile App",
      tagColor: "bg-emerald-500",
      image: portfolioHealth,
      stack: ["React Native", "NestJS", "PostgreSQL"],
    },
  ];

  return (
    <section id="work" className="bg-[#0B101B] text-white py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_30%,oklch(0.5_0.18_270)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-blue-400 mb-3">
              OUR PORTFOLIO
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Featured Projects
            </h2>
          </div>
          <Link href="#" className="text-blue-400 font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/40 transition group"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-black/30">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className={`inline-block text-[10px] font-bold tracking-wider px-2.5 py-1 rounded ${project.tagColor} text-white mb-3`}>
                  {project.tag.toUpperCase()}
                </span>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-white/60 mt-1.5 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.stack.map((s) => (
                    <span key={s} className="text-[11px] font-medium px-2 py-1 rounded bg-white/10 text-white/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Navigation Buttons */}
        <div className="flex justify-center gap-3 mt-10">
          <button className="w-11 h-11 rounded-full border border-white/30 grid place-items-center hover:bg-white/10 transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-11 h-11 rounded-full border border-white/30 grid place-items-center hover:bg-white/10 transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};