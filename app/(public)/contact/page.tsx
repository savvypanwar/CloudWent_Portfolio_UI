import { Section } from "@/components/layout/Section/Section";
import { PageHeading } from "@/components/common/PageHeading/PageHeading";
import {
  ContactHero,
  // ContactForm,
  // ContactInfo,
  // OfficeLocation,
} from "@/features/contact/components/";

export const metadata = {
  title: "Contact Us | CloudWent",
  description: "Get in touch with CloudWent for web development, mobile apps, AI solutions, and cloud services. Let's build something amazing together.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        <ContactHero />
      </main>
    </div>
  );
}