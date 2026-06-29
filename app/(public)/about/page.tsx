import {
  AboutHero,
  MissionVision,
  Story,
  Team,
  Culture,
  Testimonials,
  AboutCta,
} from "@/features/about/components";
import { getTeamMembers } from "@/lib/team";
import { prisma } from "@/lib/prisma/prisma";

export const metadata = {
  title: "About | CloudWent",
  description: "Meet CloudWent — builders of scalable digital products that drive real impact.",
};

export default async function AboutPage() {
  const [teamPreview, testimonials] = await Promise.all([
    getTeamMembers({ limit: 5 }),
    prisma.testimonial.findMany({ where: { featured: true }, orderBy: { order: "asc" }, take: 3 }),
  ]);

  const mappedTestimonials = testimonials.map((t) => ({
    id: t.id,
    content: t.content,
    name: t.name,
    role: t.role,
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <AboutHero />
        <MissionVision />
        <Story />
        <Team members={teamPreview} />
        <Culture />
        <Testimonials testimonials={mappedTestimonials} />
        <AboutCta />
      </main>
    </div>
  );
}
