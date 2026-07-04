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
import {
  dummyStats,
  dummyServices,
  dummyProjects,
  dummyTestimonials,
  dummyProcessSteps,
  dummyBenefits,
  dummyFaqs,
} from "@/lib/dummy-data";
import { getTeamMembers } from "@/lib/team";

async function getTeamPreview() {
  try {
    const members = await getTeamMembers();
    return members.slice(0, 5);
  } catch {
    return [];
  }
}

export const metadata = {
  title: "CloudWent | Building Scalable Digital Solutions",
  description: "We build scalable web applications, LMS platforms, SaaS products, and AI solutions for ambitious businesses.",
};

export default async function HomePage() {
  const teamPreview = await getTeamPreview();

  const mappedStats = dummyStats.map((stat) => ({
    icon: stat.icon,
    value: stat.value,
    label: stat.label,
    iconColor: "text-primary-background",
    boxColor: "bg-background/10",
    borderColor: "border-white/20",
  }));

  const mappedServices = dummyServices.map((s) => ({
    id: s.id,
    name: s.name,
    description: s.description,
    icon: s.icon,
    features: s.features,
    iconColor: "text-white",
    iconBg: s.color,
  }));

  const mappedProjects = dummyProjects.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    tags: p.tags,
    image: p.image,
    stack: p.stack,
  }));

  const mappedTestimonials = dummyTestimonials.map((t) => ({
    id: t.id,
    content: t.content,
    name: t.name,
    role: t.role,
    rating: t.rating,
  }));

  const mappedProcessSteps = dummyProcessSteps.map((s) => ({
    id: s.id,
    step: s.step,
    title: s.title,
    description: s.description,
    icon: s.icon,
  }));

  const mappedBenefits = dummyBenefits.map((b) => ({
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
