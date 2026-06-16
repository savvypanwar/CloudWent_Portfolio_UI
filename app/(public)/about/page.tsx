// app/(public)/about/page.tsx

import { 
  AboutHero, 
  MissionVision, 
  Story, 
  Team, 
  Culture, 
  Testimonials,
  AboutCta
} from "@/features/about/components";

export const metadata = {
  title: "About | CloudWent",
  description: "Meet CloudWent — builders of scalable digital products that drive real impact.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B101B] flex flex-col transition-colors">
      <main className="flex-grow">
        <AboutHero />
        <MissionVision />
        <Story />
        <Team />
        <Culture />
        <Testimonials />
        <AboutCta />
      </main>
    </div>
  );
}