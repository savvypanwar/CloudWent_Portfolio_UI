import { Section } from "@/components/layout/Section/Section";
import {
  TeamHero,
  TeamSection,
  TeamStats,
  CTA,
} from "@/features/team/components/";
import { getTeamMembers, teamSections } from "@/lib/team";
import { prisma } from "@/lib/prisma/prisma";

export const metadata = {
  title: "Our Team | CloudWent",
  description:
    "Meet the experts behind CloudWent. Passionate professionals building scalable digital solutions for ambitious businesses.",
};

export default async function TeamPage() {
  const [teamMembers, stats] = await Promise.all([
    getTeamMembers(),
    prisma.siteStat.findMany({ where: { section: "about" }, orderBy: { order: "asc" } }),
  ]);

  const mappedStats = stats.map((s) => ({
    value: s.value,
    label: s.label,
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <TeamHero />

        <Section variant="default" className="py-12 bg-background">
          <TeamStats stats={mappedStats} />
        </Section>

        <Section variant="default" className="py-12 bg-background">
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
                  />
                );
              })}
            </div>
          </div>
        </Section>

        <Section variant="default" className="py-12 bg-background">
          <CTA />
        </Section>
      </main>
    </div>
  );
}
