
import {
  Hero,
  ServicesGrid,
  Technologies,
  Workflow,
  Pricing,
  Faq,
  ContactCta,
} from "@/features/Services/components";
import { prisma } from "@/lib/prisma/prisma";

export const metadata = {
  title: "Services | CloudWent",
  description: "End-to-end product engineering: web, mobile, SaaS, LMS, cloud and AI. Pick a plan or scope a custom build with CloudWent.",
};

export default async function ServicesPage() {
  const [services, plans, faqs, workflowSteps, technologies] = await Promise.all([
    prisma.service.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.pricingPlan.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.faq.findMany({ where: { category: "services" }, orderBy: { order: "asc" } }),
    prisma.processStep.findMany({ where: { page: "services", active: true }, orderBy: { order: "asc" } }),
    prisma.technology.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
  ]);

  const mappedServices = services.map((s) => ({
    id: s.id,
    name: s.name,
    description: s.description,
    icon: s.icon,
    features: s.features,
    iconColor: s.color.split(" ").filter((token: string) => token.startsWith("text-") || token.startsWith("dark:text-")).join(" ") || "text-blue-600 dark:text-primary",
    iconBg: s.color.split(" ").filter((token: string) => token.startsWith("bg-") || token.startsWith("dark:bg-")).join(" ") || "bg-primary/10",
  }));

  const mappedPlans = plans.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    sub: p.sub,
    description: p.description,
    features: p.features,
    cta: p.cta,
    featured: p.featured,
  }));

  const mappedFaqs = faqs.map((f) => ({
    id: f.id,
    question: f.question,
    answer: f.answer,
  }));

  const mappedWorkflowSteps = workflowSteps.map((s) => ({
    id: s.id,
    step: s.step,
    title: s.title,
    description: s.description,
    icon: s.icon,
  }));

  const mappedTechnologies = technologies.map((t) => ({
    id: t.id,
    name: t.name,
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <Hero />
        <ServicesGrid services={mappedServices} />
        <Technologies technologies={mappedTechnologies} />
        <Workflow steps={mappedWorkflowSteps} />
        <Pricing plans={mappedPlans} />
        <Faq faqs={mappedFaqs} />
        <ContactCta />
      </main>
    </div>
  );
}