import { MessageSquare } from "lucide-react";

export const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-700 py-24 lg:py-32">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-white/10 mb-6">
            <MessageSquare className="h-4 w-4" />
            Contact Us
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
            Let's Build
            <br />
            <span className="text-blue-200">Something Amazing</span>
          </h1>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to learn more about our services? 
            Reach out and let's start a conversation about your digital goals.
          </p>
        </div>
      </div>
    </section>
  );
};