
import {
  Hero,
  ServicesGrid,
  Technologies,
  Workflow,
  Pricing,
  Faq,
  ContactCta,
} from "@/features/Services/components";

export const metadata = {
  title: "Services | CloudWent",
  description: "End-to-end product engineering: web, mobile, SaaS, LMS, cloud and AI. Pick a plan or scope a custom build with CloudWent.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col transition-colors">
      <main className="flex-grow">
        <Hero />
        <ServicesGrid />
        <Technologies />
        <Workflow />
        <Pricing />
        <Faq />
        <ContactCta />
      </main>
    </div>
  );
}