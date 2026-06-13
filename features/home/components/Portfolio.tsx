"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FadeIn, SlideUp, StaggerContainer } from "@/components/animations";

export const Portfolio = () => {
  const projects = [
    {
      title: "EduSmart LMS",
      description: "A comprehensive learning management system for modern education.",
      tags: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
      gradient: "from-blue-600 to-indigo-600",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    },
    {
      title: "CloudFinance",
      description: "Enterprise-grade financial platform for managing assets and investments.",
      tags: ["Next.js", "TypeScript", "Prisma", "AWS"],
      gradient: "from-purple-600 to-pink-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: "HealthCare+",
      description: "Cross-platform mobile app for healthcare providers and patients.",
      tags: ["React Native", "NestJS", "PostgreSQL", "TypeScript"],
      gradient: "from-green-600 to-emerald-600",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-[#0B101B]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <SlideUp>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                Our Portfolio
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
                Featured Projects
              </h2>
            </SlideUp>
          </div>
          <SlideUp>
            <Link
              href="/portfolio"
              className="text-blue-400 font-medium hover:underline hidden sm:block"
            >
              View all projects →
            </Link>
          </SlideUp>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}
                    ></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-semibold text-lg">
                        {project.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </StaggerContainer>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/portfolio" className="text-blue-400 font-medium hover:underline">
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  );
};