"use client";

import { FadeIn, SlideUp } from "@/components/animations";

export const Technologies = () => {
  const technologies = [
    { name: "Next.js", icon: "NEXT." },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "TypeScript", icon: "TypeScript" },
    { name: "AWS", icon: "aws" },
    { name: "Docker", icon: "docker" },
    { name: "Vercel", icon: "Vercel" },
    { name: "PostgreSQL", icon: "PostgreSQL" },
    { name: "React Native", icon: "React" },
  ];

  return (
    <section className="py-12 border-t border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-6 lg:px-8">
        <SlideUp>
          <p className="text-center text-xs text-gray-400 uppercase tracking-wider mb-6">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 items-center opacity-60 grayscale">
            {technologies.map((tech, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <span className="text-xl font-bold text-gray-700">
                  {tech.icon}
                </span>
              </FadeIn>
            ))}
          </div>
        </SlideUp>
      </div>
    </section>
  );
};