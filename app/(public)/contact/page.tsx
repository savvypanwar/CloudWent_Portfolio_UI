import { Section } from "@/components/layout/Section/Section";
import { PageHeading } from "@/components/common/PageHeading/PageHeading";
import {
  ContactHero,
  ContactForm,
  ConsultBanner,
} from "@/features/contact/components/";

export const metadata = {
  title: "Contact Us | CloudWent",
  description: "Get in touch with CloudWent for web development, mobile apps, AI solutions, and cloud services. Let's build something amazing together.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B101B] flex flex-col transition-colors">
      <main className="flex-grow">
        {/* Hero Section */}
        <ContactHero />
        
        {/* Contact Form Section */}
        <Section variant="default" className="py-12 bg-gray-50 dark:bg-[#0B101B]">
          <div className="mt-8 max-w-7xl mx-auto">
            <ContactForm />
          </div>

          <div className="mt-8 max-w-7xl mx-auto">
             <ConsultBanner />
          </div>

         
        </Section>
      </main>
    </div>
  );
}