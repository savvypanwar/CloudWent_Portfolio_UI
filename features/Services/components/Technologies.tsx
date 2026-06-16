"use client";

const technologies = [
  "React", "TypeScript", "Next.js", "TanStack", "Node.js", "Python",
  "PostgreSQL", "Supabase", "AWS", "GCP", "Docker", "Kubernetes",
  "Tailwind", "Figma", "OpenAI", "LangChain",
];

export const Technologies = () => {
  return (
    <section className="border-y border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-[#0B101B] py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
         <div className="max-w-2xl mb-14" data-reveal>
          <p className="text-xs font-bold tracking-[0.2em] text-primary dark:text-blue-400 mb-3">
           TECH STACK
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark dark:text-white">
             Tools we trust in production
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
             Battle-tested across dozens of launches. No résumé-driven choices.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {technologies.map((t, i) => (
            <span
              key={t}
              className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-0.5 transition-all"
              data-reveal
              data-delay={String((i % 6) + 1)}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};