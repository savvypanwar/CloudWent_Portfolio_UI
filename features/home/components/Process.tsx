import { 
  Search, 
  FileText, 
  PenTool, 
  Code, 
  CheckCircle, 
  Rocket 
} from "lucide-react";

export const Process = () => {
  const steps = [
    { 
      icon: Search, 
      number: "01", 
      title: "Discover", 
      desc: "We understand your business and goals",
      color: "text-blue-600"
    },
    { 
      icon: FileText, 
      number: "02", 
      title: "Plan", 
      desc: "We analyze and create a strategy",
      color: "text-amber-600"
    },
    { 
      icon: PenTool, 
      number: "03", 
      title: "Design", 
      desc: "We design intuitive and engaging UI/UX",
      color: "text-emerald-600"
    },
    { 
      icon: Code, 
      number: "04", 
      title: "Develop", 
      desc: "We build with clean and scalable code",
      color: "text-purple-600"
    },
    { 
      icon: CheckCircle, 
      number: "05", 
      title: "Test", 
      desc: "We ensure quality through rigorous testing",
      color: "text-pink-600"
    },
    { 
      icon: Rocket, 
      number: "06", 
      title: "Launch", 
      desc: "We deploy and support your long-term growth",
      color: "text-teal-600"
    },
  ];

  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">
            OUR PROCESS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            A Proven Process<br />For Successful Delivery
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 relative">
          
          {/* Dashed Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px border-t-2 border-dashed border-border" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center group">
              {/* ✅ Icon Circle (Fixed with grid place-items-center) */}
              <div className="mx-auto w-20 h-20 rounded-full grid place-items-center glass-effect border-border shadow-sm group-hover:shadow-md transition">
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>

              {/* Step Number */}
              <div className="text-xs font-bold text-muted-foreground mt-3">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-foreground mt-1">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed max-w-[180px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};