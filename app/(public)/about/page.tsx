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

export const metadata = {
  title: "About | CloudWent",
  description: "Meet CloudWent — builders of scalable digital products that drive real impact.",
};

export default async function AboutPage() {
  const teamPreview = await getTeamMembers({ limit: 5 });

  return (
    <div className="min-h-screen bg-background dark:bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <AboutHero />
        <MissionVision />
        <Story />
        <Team members={teamPreview} />
        <Culture />
        <Testimonials />
        <AboutCta />
      </main>
    </div>
  );
}
