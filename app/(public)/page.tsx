import {
  Hero,
  TechnologyBar,
  Services,
  Stats,
  WhyChooseUs,
  Process,
  Portfolio,
  Team,
  Testimonials,
  CTA,
} from "@/features/home/components";
import { getTeamMembers } from "@/lib/team";
import { prisma } from "@/lib/prisma/prisma";

export const metadata = {
  title: "CloudWent | Building Scalable Digital Solutions",
  description: "We build scalable web applications, LMS platforms, SaaS products, and AI solutions for ambitious businesses.",
};

export default async function HomePage() {
  const [teamPreview, stats, services, projects, testimonials, processSteps, benefits] = await Promise.all([
    getTeamMembers({ limit: 5 }),
    prisma.siteStat.findMany({ where: { section: "home" }, orderBy: { order: "asc" } }),
    prisma.service.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.project.findMany({ where: { status: "PUBLISHED" }, orderBy: { order: "asc" }, take: 3 }),
    prisma.testimonial.findMany({ where: { featured: true }, orderBy: { order: "asc" }, take: 3 }),
    prisma.processStep.findMany({ where: { page: "home", active: true }, orderBy: { order: "asc" } }),
    prisma.companyValue.findMany({ where: { active: true }, orderBy: { order: "asc" }, take: 3 }),
  ]);

  const mappedStats = stats.map((stat) => ({
    icon: stat.icon,
    value: stat.value,
    label: stat.label,
    iconColor: "text-white",
    boxColor: "bg-white/10",
    borderColor: "border-white/20",
  }));

  const mappedServices = services.map((s) => ({
    id: s.id,
    name: s.name,
    description: s.description,
    icon: s.icon,
    color: s.color,
  }));

  const mappedProjects = projects.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    tags: p.tags,
    image: p.image,
    stack: p.stack,
  }));

  const mappedTestimonials = testimonials.map((t) => ({
    id: t.id,
    content: t.content,
    name: t.name,
    role: t.role,
    rating: t.rating,
  }));

  const mappedProcessSteps = processSteps.map((s) => ({
    id: s.id,
    step: s.step,
    title: s.title,
    description: s.description,
    icon: s.icon,
  }));

  const mappedBenefits = benefits.map((b) => ({
    id: b.id,
    title: b.title,
    description: b.description,
    icon: b.icon,
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <Hero />
        <TechnologyBar />
        <Services services={mappedServices} />
        <Stats stats={mappedStats} />
        <WhyChooseUs benefits={mappedBenefits} />
        <Process steps={mappedProcessSteps} />
        <Portfolio projects={mappedProjects} />
        <Team members={teamPreview} />
        <Testimonials testimonials={mappedTestimonials} />
        <CTA />
      </main>
    </div>
  );
}
