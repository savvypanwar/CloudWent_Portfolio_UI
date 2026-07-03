import {
  AboutHero,
  MissionVision,
  Story,
  Team,
  Culture,
  Testimonials,
  AboutCta,
} from "@/features/about/components";
import { dummyTestimonials, dummyTeamMembers, dummyFaqs } from "@/lib/dummy-data";

export const metadata = {
  title: "About | CloudWent",
  description: "Meet CloudWent — builders of scalable digital products that drive real impact.",
};

export default function AboutPage() {
  const teamPreview = dummyTeamMembers.slice(0, 5);

  const mappedTestimonials = dummyTestimonials.map((t) => ({
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
