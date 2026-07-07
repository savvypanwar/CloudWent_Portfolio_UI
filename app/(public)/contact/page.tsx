import { Section } from "@/components/layout/Section/Section";
import {
  ContactHero,
  ContactForm,
  ConsultBanner,
  OfficeLocation,
} from "@/features/contact/components/";
import { FAQ } from "@/features/contact/components";
import { CTA } from "@/features/home/components";
import { dummyFaqs } from "@/lib/dummy-data";

export const metadata = {
  title: "Contact Us | CloudWent",
  description: "Get in touch with CloudWent for web development, mobile apps, AI solutions, and cloud services. Let's build something amazing together.",
};

export default function ContactPage() {
  const faqs = dummyFaqs;

  const mappedFaqs = faqs.map((f) => ({
    id: f.id,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <ContactHero />
        
        <Section variant="default" className="px-4 py-12 bg-background sm:px-6 lg:px-8">
          <div className="mt-8 max-w-7xl mx-auto">
            <ContactForm />
          </div>

          <div className="mt-8 max-w-7xl mx-auto">
             <ConsultBanner />
          </div>
          <div className="mt-8 max-w-7xl mx-auto">
             <OfficeLocation />
          </div>
          <div className="mt-8 max-w-7xl mx-auto">
             <FAQ faqs={mappedFaqs} />
          </div>
          <div className="mt-8 max-w-7xl mx-auto">
             <CTA />
          </div>
        </Section>
      </main>
    </div>
  );
}