// app/(public)/careers/page.tsx (complete fixed code)

import { Section } from "@/components/layout/Section/Section";
import {CareerHero} from "@/features/careers/components/";

export const metadata = {
  title: "Careers | CloudWent",
  description: "Join the CloudWent team. We're looking for talented engineers, designers, and creators to build the future of digital solutions.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col transition-colors">
      <main className="flex-grow">
        <CareerHero />
        <Section className="py-24 bg-white dark:bg-slate-950">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-gray-600 dark:text-slate-300 mb-8">
              We're always looking for talented, passionate individuals to join the CloudWent mission. 
              Check back soon for open positions or send us your resume.
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}