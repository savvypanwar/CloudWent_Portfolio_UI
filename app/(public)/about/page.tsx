import {
  AboutHero,
  MissionVision,
  Story,
  Team,
  Culture,
  Testimonials,
  AboutCta,
} from "@/features/about/components";
import { dummyTestimonials } from "@/lib/dummy-data";
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
  title: "About | CloudWent",
  description: "Meet CloudWent — builders of scalable digital products that drive real impact.",
};

export default async function AboutPage() {
  const teamPreview = await getTeamPreview();

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
