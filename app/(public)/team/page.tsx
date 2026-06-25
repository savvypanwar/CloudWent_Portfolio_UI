import { Section } from "@/components/layout/Section/Section";
import {
  TeamHero,
  TeamSection,
  TeamStats,
  CTA,
} from "@/features/team/components/";
import { getTeamMembers, stats, teamSections } from "@/lib/team";

export const metadata = {
  title: "Our Team | CloudWent",
  description:
    "Meet the experts behind CloudWent. Passionate professionals building scalable digital solutions for ambitious businesses.",
};

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <TeamHero />

        <Section variant="default" className="py-12 bg-gray-50 dark:bg-background">
          <TeamStats stats={stats} />
        </Section>

        <Section variant="default" className="py-12 bg-gray-50 dark:bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="mt-8 ">
              {teamSections.map(({ key, label, subtitle }) => {
                const members = teamMembers.filter((member) => member.team === key);
                return (
                  <TeamSection
                    key={key}
                    label={label}
                    subtitle={subtitle}
                    members={members}
                    viewAllLink="/team"
                  />
                );
              })}
            </div>
          </div>
        </Section>

        <Section variant="default" className="py-12 bg-gray-50 dark:bg-background">
          <CTA />
        </Section>
      </main>
    </div>
  );
}
