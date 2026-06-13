import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { Section } from "@/components/layout/Section/Section";
import { PageHeading } from "@/components/common/PageHeading/PageHeading";
import { PortfolioGrid } from "@/features/portfolio/components";

export const metadata = {
  title: "Portfolio | CloudWent",
  description: "Explore our portfolio of successful digital projects, including web applications, mobile apps, AI solutions, and cloud platforms.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Portfolio Hero Section */}
        <Section className="pt-12 pb-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Featured Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of successful digital products and solutions 
              delivered to businesses across various industries.
            </p>
          </div>
        </Section>

        {/* Portfolio Grid Section */}
        <Section variant="default">
          <PortfolioGrid />
        </Section>
      </main>
      <Footer />
    </div>
  );
}