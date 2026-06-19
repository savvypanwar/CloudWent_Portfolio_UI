import { Search, MessageSquare, ClipboardCheck, Handshake, ShieldCheck } from "lucide-react";

const processData = [
  { icon: Search, title: "Apply", desc: "Send your CV or portfolio — we read every application." },
  { icon: MessageSquare, title: "Intro Call", desc: "A 30-minute chat to get to know each other." },
  { icon: ClipboardCheck, title: "Craft Round", desc: "A short, paid take-home or live working session." },
  { icon: Handshake, title: "Offer", desc: "Reference checks, offer letter and welcome to the team." },
];

export const Process = () => {
  return (
    <section className="py-24 border-y border-border bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">HIRING PROCESS</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-16">Simple, Respectful<br />Of Your Time</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px border-t-2 border-dashed border-border" />
          {processData.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="mx-auto w-20 h-20 rounded-full glass-effect border-border grid place-items-center text-primary relative z-10">
                <s.icon className="w-8 h-8" />
              </div>
              <div className="text-xs font-bold text-muted-foreground mt-3">0{i + 1}</div>
              <h3 className="font-bold text-lg mt-1 text-foreground">{s.title}</h3>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-sm text-muted-foreground inline-flex items-center gap-2 justify-center w-full">
          <ShieldCheck className="w-4 h-4 text-primary" /> Paid craft rounds. Feedback at every stage, even if it's a no.
        </div>
      </div>
    </section>
  );
};