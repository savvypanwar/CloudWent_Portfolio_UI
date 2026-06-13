// import { Navbar } from "@/components/layout/Navbar/Navbar";
// import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section/Section";
import { PageHeading }  from "@/components/common/PageHeading/PageHeading";
import { Hero, Story, Values, Statistics, TeamPreview, CTA } from "@/features/about/components/index";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Section variant="default">
          <PageHeading
            title="Our Story"
            description="From a small idea to a global digital solutions provider."
            size="lg"
          />
          <div className="mt-8">
            <Story />
          </div>
        </Section>
        <Section variant="gray">
          <PageHeading
            title="Our Core Values"
            description="The principles that guide everything we do at CloudWent."
            size="lg"
          />
          <div className="mt-8">
            <Values />
          </div>
        </Section>
        <Section variant="default">
          <PageHeading
            title="Company Statistics"
            description="The numbers behind our success story."
            size="lg"
          />
          <div className="mt-8">
            <Statistics />
          </div>
        </Section>
        <Section variant="gray">
          <PageHeading
            title="Meet Our Team"
            description="The talented individuals powering CloudWent's innovation."
            size="lg"
          />
          <div className="mt-8">
            <TeamPreview />
          </div>
        </Section>
        <CTA />
      </main>
    </div>
  );
}