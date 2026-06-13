import { Section } from "@/components/layout/Section/Section";

export const metadata = {
  title: "Privacy Policy | CloudWent",
  description: "Read CloudWent's privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        <Section className="py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <div className="text-gray-600 space-y-4">
              <p>
                This Privacy Policy describes how CloudWent collects, uses, and shares your personal information when you visit our website or use our services.
              </p>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Information We Collect</h2>
              <p>
                We may collect personal information that you provide directly to us, such as your name, email address, and phone number when you fill out a contact form or apply for a job.
              </p>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
              </p>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@cloudwent.com" className="text-blue-600 hover:underline">hello@cloudwent.com</a>.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}