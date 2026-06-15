import { Section } from "@/components/layout/Section/Section";
import { PageHeading } from "@/components/common/PageHeading/PageHeading";
import {
  TeamHero,
  TeamSection,
  TeamStats,
  CTA,
} from "@/features/team/components/";
import { teamMembers, teamSections, stats } from "@/lib/team-data";

export const metadata = {
  title: "Our Team | CloudWent",
  description: "Meet the experts behind CloudWent. Passionate professionals building scalable digital solutions for ambitious businesses.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B101B] flex flex-col transition-colors">
      <main className="flex-grow">
        {/* Hero Section */}
        <TeamHero />
        
        {/* Stats Section */}
        <Section variant="default" className="py-12 bg-gray-50 dark:bg-[#0B101B]">
          <TeamStats stats={stats} />
        </Section>

        {/* Team Sections */}
        <Section variant="default" className="py-12 bg-gray-50 dark:bg-[#0B101B]">
          <div className="max-w-7xl mx-auto">
            <PageHeading
              title="Our Team"
              description="Passionate professionals with expertise in modern technologies."
            />
            <div className="mt-8 space-y-16">
              {teamSections.map(({ key, label, subtitle }) => {
                const members = teamMembers.filter((m) => m.team === key);
                return (
                  <TeamSection
                    key={key}
                    label={label}
                    subtitle={subtitle}
                    members={members}
                  />
                );
              })}
            </div>
          </div>
        </Section>

        <Section variant="default" className="py-12 bg-gray-50 dark:bg-[#0B101B]">
          <CTA  />
        </Section>
      </main>
    </div>
  );
}