import {
  Hero,
  MissionVision,
  Story,
  Team,
  Culture,
  Testimonials,
  FAQ,
  CTA,
} from "@/features/about/components";
import { getTeamMembers } from "@/lib/team";
import { dummyTestimonials, dummyFaqs } from "@/lib/dummy-data";

export const metadata = {
  title: "About | CloudWent",
  description: "Meet CloudWent — builders of scalable digital products that drive real impact.",
};

export default async function AboutPage() {
  const teamPreview = await getTeamMembers({ limit: 5 });

  const mappedTestimonials = dummyTestimonials.map((t) => ({
    id: t.id,
    content: t.content,
    name: t.name,
    role: t.role,
  }));

  const mappedFaqs = dummyFaqs.map((f) => ({
    id: f.id,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <Hero />
        <MissionVision />
        <Story />
        <Team members={teamPreview} />
        <Culture />
        <Testimonials testimonials={mappedTestimonials} />
        <FAQ faqs={mappedFaqs} />
        <CTA />
      </main>
    </div>
  );
}
