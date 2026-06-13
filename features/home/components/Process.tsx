import { Search, FileText, PenTool, Code, CheckCircle, Rocket } from "lucide-react";

export const Process = () => {
  const steps = [
    { icon: Search, number: "01", title: "Discover", desc: "Understand your business needs and project goals" },
    { icon: FileText, number: "02", title: "Plan", desc: "Create a strategic roadmap with clear milestones" },
    { icon: PenTool, number: "03", title: "Design", desc: "Craft beautiful, intuitive interfaces" },
    { icon: Code, number: "04", title: "Develop", desc: "Build robust, scalable code using modern technologies" },
    { icon: CheckCircle, number: "05", title: "Test", desc: "Rigorously test for quality, performance, and security" },
    { icon: Rocket, number: "06", title: "Launch", desc: "Deploy, monitor, and support your solution for growth" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Process</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">A Proven Process<br />For Successful Delivery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="relative mb-4">
                <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="absolute -top-2 -right-2 text-xs font-bold text-gray-400 bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};