const technologies = [
  "React", "TypeScript", "Next.js", "TanStack", "Node.js", "Python",
  "PostgreSQL", "Supabase", "AWS", "GCP", "Docker", "Kubernetes",
  "Tailwind", "Figma", "OpenAI", "LangChain",
];

export const Technologies = () => {
  return (
    <section className="border-y border-border bg-background dark:bg-dark py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">
            TECH STACK
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Tools we trust in production
          </h2>
          <p className="mt-4 text-muted-foreground">
            Battle-tested across dozens of launches. No résumé-driven choices.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {technologies.map((t, i) => (
            <span
              key={t}
              className="px-5 py-2.5 rounded-full glass-effect border-border text-sm font-semibold text-foreground hover:bg-muted/50 hover:-translate-y-0.5 transition-all"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};