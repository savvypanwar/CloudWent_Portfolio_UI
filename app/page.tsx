
import { 
  Hero,
  TechnologyBar,
  // Services, 
  // Stats, 
  // Process, 
  // Portfolio, 
  // Team, 
  // Testimonials, 
  // CTA 
} from "@/features/home/components";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        <Hero />
        <TechnologyBar />
        {/* <Services />
        <Stats />
        <Process />
        <Portfolio />
        <Team />
        <Testimonials />
        <CTA /> */}
      </main>
    </div>
  );
}