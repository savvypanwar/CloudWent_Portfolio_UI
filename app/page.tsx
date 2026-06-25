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

export default async function HomePage() {
  const teamPreview = await getTeamMembers({ limit: 5 });

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col transition-colors">
      <main className="flex-grow">
        <Hero />
        <TechnologyBar />
        <Services />
        <Stats />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        <Team members={teamPreview} />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}
