import { Section } from "@/components/layout/Section/Section";
// import  PageHeading  from "@/components/common/PageHeading/PageHeading";
import { PageHeading } from "@/components/common/PageHeading/PageHeading";
import { TeamHero, TeamGrid, Leadership, Skills, Projects } from "@/features/team/components";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        <TeamHero />
        <Section variant="default">
          <PageHeading
            title="Meet Our Leadership Team"
            description="Passionate experts with modern technologies and a drive for excellence."
            size="lg"
          />
          <div className="mt-8">
            <Leadership />
          </div>
        </Section>
        <Section variant="gray">
          <PageHeading
            title="Our Core Team"
            description="The talented individuals who make CloudWent possible."
            size="lg"
          />
          <div className="mt-8">
            <TeamGrid />
          </div>
        </Section>
        <Section variant="default">
          <PageHeading
            title="Our Skills & Expertise"
            description="Technologies and tools that drive our success."
            size="lg"
          />
          <div className="mt-8">
            <Skills />
          </div>
        </Section>
        <Section variant="gray">
          <PageHeading
            title="Recent Projects"
            description="Some of the amazing work delivered by our team."
            size="lg"
          />
          <div className="mt-8">
            <Projects />
          </div>
        </Section>
      </main>
    </div>
  );
}