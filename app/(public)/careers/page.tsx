import {
  CareerHero,
  Openings,
  Perks,
  Values,
  Process,
  Faq,
  ContactCta,
} from "@/features/careers/components";

export const metadata = {
  title: "Careers | CloudWent",
  description: "Join CloudWent. Build scalable web, SaaS, LMS and AI products with a remote-first team that ships.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <CareerHero />
        <Openings />
        <Perks />
        <Values />
        <Process />
        <Faq />
        <ContactCta />
      </main>
    </div>
  );
}