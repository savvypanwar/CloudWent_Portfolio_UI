import {
  CareerHero,
  Openings,
  Perks,
  Values,
  Process,
  Faq,
  ContactCta,
} from "@/features/careers/components";
import { prisma } from "@/lib/prisma/prisma";

export const metadata = {
  title: "Careers | CloudWent",
  description: "Join CloudWent. Build scalable web, SaaS, LMS and AI products with a remote-first team that ships.",
};

export default async function CareersPage() {
  const [jobs, perks, values, steps, faqs] = await Promise.all([
    prisma.jobOpening.findMany({ where: { status: "PUBLISHED" }, orderBy: { createdAt: "desc" } }),
    prisma.perk.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.companyValue.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.processStep.findMany({ where: { page: "careers", active: true }, orderBy: { order: "asc" } }),
    prisma.faq.findMany({ where: { category: "careers" }, orderBy: { order: "asc" } }),
  ]);

  const mappedJobs = jobs.map((j) => ({
    id: j.id,
    slug: j.slug,
    title: j.title,
    department: j.department,
    location: j.location,
    type: j.type,
  }));

  const mappedPerks = perks.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    icon: p.icon,
  }));

  const mappedValues = values.map((v) => ({
    id: v.id,
    title: v.title,
  }));

  const mappedSteps = steps.map((s) => ({
    id: s.id,
    step: s.step,
    title: s.title,
    description: s.description,
    icon: s.icon,
  }));

  const mappedFaqs = faqs.map((f) => ({
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