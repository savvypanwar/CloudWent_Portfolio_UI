import { Section } from "@/components/layout/Section/Section";
import {
  TeamHero,
  TeamSection,
  TeamStats,
  FAQ,
  CTA,
} from "@/features/team/components/";
import { dummyStats, dummyTeamMembers, dummyFaqs } from "@/lib/dummy-data";

const teamSections = [
  { key: "leadership", label: "Leadership", subtitle: "The visionaries guiding our mission" },
  { key: "design", label: "Design", subtitle: "Creators of beautiful experiences" },
  { key: "engineering", label: "Engineering", subtitle: "Builders of scalable solutions" },
];

export const metadata = {
  title: "Our Team | CloudWent",
  description:
    "Meet the experts behind CloudWent. Passionate professionals building scalable digital solutions for ambitious businesses.",
};

export default function TeamPage() {
  const teamMembers = dummyTeamMembers;
  const stats = dummyStats;

  const mappedStats = stats.map((s) => ({
    value: s.value,
    label: s.label,
  }));

  const mappedFaqs = dummyFaqs.map((f) => ({
    id: f.id,
    question: f.question,
    answer: f.answer,
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
          <FAQ faqs={mappedFaqs} />
        </Section>

        <Section variant="default" className="py-12 bg-background">
          <CTA />
        </Section>
      </main>
    </div>
  );
}
