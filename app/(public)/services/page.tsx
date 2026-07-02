import {
  Hero,
  Services,
  Technologies,
  Workflow,
  Pricing,
  Faq,
  ContactCta,
} from "@/features/Services/components";
import {
  dummyServices,
  dummyPricingPlans,
  dummyFaqs,
  dummyProcessSteps,
  dummyTechnologies,
} from "@/lib/dummy-data";

export const metadata = {
  title: "Services | CloudWent",
  description: "End-to-end product engineering: web, mobile, SaaS, LMS, cloud and AI. Pick a plan or scope a custom build with CloudWent.",
};

export default function ServicesPage() {
  const mappedServices = dummyServices.map((s) => ({
    id: s.id,
    name: s.name,
    description: s.description,
    icon: s.icon,
    features: s.features,
    iconColor: "text-white",
    iconBg: s.color,
  }));

  const mappedPlans = dummyPricingPlans.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    sub: p.sub,
    description: p.description,
    features: p.features,
    cta: p.cta,
    featured: p.featured,
  }));

  const mappedFaqs = dummyFaqs.map((f) => ({
    id: f.id,
    question: f.question,
    answer: f.answer,
  }));

  const mappedWorkflowSteps = dummyProcessSteps.map((s) => ({
    id: s.id,
    step: s.step,
    title: s.title,
    description: s.description,
    icon: s.icon,
  }));

  const mappedTechnologies = dummyTechnologies.map((t) => ({
    id: t.id,
    name: t.name,
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <Hero />
        <Services services={mappedServices} />
        <Technologies technologies={mappedTechnologies} />
        <Workflow steps={mappedWorkflowSteps} />
        <Pricing plans={mappedPlans} />
        <Faq faqs={mappedFaqs} />
        <ContactCta />
      </main>
    </div>
  );
}
