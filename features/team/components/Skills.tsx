"use client";

import { FadeIn, StaggerContainer } from "@/components/animations";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Backend",
      skills: ["Node.js", "NestJS", "Python", "GraphQL", "REST APIs"],
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "Firebase"],
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "NLP"],
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      title: "Design & UX",
      skills: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping"],
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
  ];

  return (
    <StaggerContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => (
          <FadeIn key={i} direction="up" delay={i * 0.05}>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`h-10 w-10 rounded-lg ${category.bg} ${category.color} flex items-center justify-center`}
                >
                  <span className="text-lg font-bold">{category.title.charAt(0)}</span>
                </div>
                <h3 className={`text-lg font-semibold ${category.color}`}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </StaggerContainer>
  );
};