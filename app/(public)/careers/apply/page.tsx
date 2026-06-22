import { Section } from "@/components/layout/Section/Section";
import { PageHeading } from "@/components/common/PageHeading/PageHeading";
import { JobApplicationForm } from "@/features/careers/components/JobApplicationForm";

export const metadata = {
  title: "Apply Now | CloudWent Careers",
  description: "Submit your application to join the CloudWent team. We're looking for talented engineers, designers, and creators.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <Section variant="default" size="lg">
          <div className="max-w-3xl mx-auto">
            <PageHeading
              title="Apply for a Role"
              description="Fill out the form below to start your journey with CloudWent. We'll review your application and get back to you soon."
              className="mb-8"
            />
            <div className="glass-effect border-border rounded-3xl p-8 md:p-10 shadow-lg">
              <JobApplicationForm jobTitle="Frontend Developer" />
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}