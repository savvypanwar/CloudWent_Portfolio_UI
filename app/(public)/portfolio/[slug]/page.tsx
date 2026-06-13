import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { Section } from "@/components/layout/Section/Section";
import {
  ProjectHero,
  ProjectGallery,
  ProjectTechStack,
  ProjectResults,
} from "@/features/portfolio/components";

export default function PortfolioDetailPage() {
  // In a real app, fetch project data based on slug
  const project = {
    title: "EduSmart LMS",
    description:
      "A comprehensive learning management system for modern education, featuring AI-powered recommendations, real-time analytics, and seamless integration with existing tools.",
    client: "EduSmart Inc.",
    date: "December 2024",
    role: "Lead Full Stack Developer",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "AWS", "TypeScript", "Prisma"],
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&sat=-100",
    ],
    results: [
      { label: "Student Engagement", value: "+45%", description: "Increase in active users" },
      { label: "Time Saved", value: "20h", description: "Per week for instructors" },
      { label: "Course Completion", value: "92%", description: "Student completion rate" },
      { label: "Platform Uptime", value: "99.9%", description: "Guaranteed SLA" },
    ],
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ProjectHero
          title={project.title}
          description={project.description}
          client={project.client}
          date={project.date}
          role={project.role}
        />
        <Section variant="default">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Gallery</h2>
          <ProjectGallery images={project.images} />
        </Section>
        <Section variant="gray">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <ProjectTechStack technologies={project.technologies} />
        </Section>
        <Section variant="default">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Results</h2>
          <ProjectResults results={project.results} />
        </Section>
      </main>
      <Footer />
    </div>
  );
}