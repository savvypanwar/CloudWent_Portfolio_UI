
import { 
  Hero,
  TechnologyBar,
  Services, 
  Stats, 
  WhyChooseUs,
  Process, 
  Portfolio, 
  Team, 
  Testimonials, 
  CTA 
} from "@/features/home/components";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col transition-colors">
      <main className="flex-grow">
        <Hero />
        <TechnologyBar />
        <Services />
        <Stats />
        <WhyChooseUs /> 
        <Process />
        <Portfolio />
        <Team />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}
