import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { Section } from "@/components/layout/Section/Section";
import { PageHeading } from "@/components/common/PageHeading/PageHeading";
import {
  ContactHero,
  ContactForm,
  ContactInfo,
  OfficeLocation,
} from "@/features/contact/components/";

export const metadata = {
  title: "Contact Us | CloudWent",
  description: "Get in touch with CloudWent for web development, mobile apps, AI solutions, and cloud services. Let's build something amazing together.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContactHero />

        <Section variant="default">
          <PageHeading
            title="Get in Touch"
            description="Fill out the form below and we'll get back to you within 24 hours."
            size="lg"
          />
        </Section>

        <Section variant="gray">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <ContactInfo />
              <div className="mt-8">
                <OfficeLocation />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}