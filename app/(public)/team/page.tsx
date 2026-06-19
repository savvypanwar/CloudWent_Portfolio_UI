import { Section } from "@/components/layout/Section/Section";
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
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        {/* Hero Section */}
        <TeamHero />
        
        {/* Stats Section */}
        <Section variant="default" className="py-12 bg-gray-50 dark:bg-background">
          <TeamStats stats={stats} />
        </Section>

        {/* Team Sections */}
        <Section variant="default" className="py-12 bg-gray-50 dark:bg-background">
          <div className="max-w-7xl mx-auto">
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

        <Section variant="default" className="py-12 bg-gray-50 dark:bg-background">
          <CTA  />
        </Section>
      </main>
    </div>
  );
}