import {
  CareerHero,
  Openings,
  Perks,
  Values,
  Process,
  Faq,
  ContactCta,
} from "@/features/careers/components";
import {
  dummyJobOpenings,
  dummyPerks,
  dummyCompanyValues,
  dummyProcessSteps,
  dummyCareerFaqs,
} from "@/lib/dummy-data";

export const metadata = {
  title: "Careers | CloudWent",
  description: "Join CloudWent. Build scalable web, SaaS, LMS and AI products with a remote-first team that ships.",
};

export default function CareersPage() {
  const mappedJobs = dummyJobOpenings.map((j) => ({
    id: j.id,
    slug: j.slug,
    title: j.title,
    department: j.department,
    location: j.location,
    type: j.type,
  }));

  const mappedPerks = dummyPerks.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    icon: p.icon,
  }));

  const mappedValues = dummyCompanyValues.map((v) => ({
    id: v.id,
    title: v.title,
  }));

  const mappedSteps = dummyProcessSteps.map((s) => ({
    id: s.id,
    step: s.step,
    title: s.title,
    description: s.description,
    icon: s.icon,
  }));

  const mappedFaqs = dummyCareerFaqs.map((f) => ({
    id: f.id,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <CareerHero />
        <Openings jobs={mappedJobs} />
        <Perks perks={mappedPerks} />
        <Values values={mappedValues} />
        <Process steps={mappedSteps} />
        <Faq faqs={mappedFaqs} />
        <ContactCta />
      </main>
    </div>
  );
}
