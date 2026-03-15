import FadeUp from "./FadeUp";

export default function Skills() {
  const skillGroups = [
    {
      icon: "⚡",
      title: "Linguagens",
      tags: ["JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      icon: "🧩",
      title: "Frameworks & Libs",
      tags: ["Vue.js", "Nuxt", "React", "Next.js", "React Native", "Expo", "Quasar"],
    },
    {
      icon: "🎨",
      title: "UI / UX & Styling",
      tags: ["Responsividade", "Acessibilidade", "Tailwind CSS", "Figma"],
    },
    {
      icon: "🔌",
      title: "Integração & Dados",
      tags: ["APIs REST", "Fetch / Axios", "WebSockets"],
    },
    {
      icon: "🛠️",
      title: "Ferramentas & Workflow",
      tags: ["Git / GitHub", "Vite", "Vitest", "CI/CD"],
    },
    {
      icon: "📐",
      title: "Boas práticas",
      tags: ["Component Design", "Performance", "Clean Code", "Code Review"],
    },
  ];

  return (
    <section id="skills" className="px-[5%] py-[100px] bg-[#0d0d14]">
      <FadeUp>
        <span className="inline-block text-[0.75rem] font-semibold tracking-[1.5px] uppercase text-[#34d399] mb-3">
          // skills
        </span>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight mb-4 leading-[1.15]">
          Tecnologias & ferramentas
        </h2>
        <p className="text-[#94a3b8] text-[1rem] max-w-[520px] leading-relaxed">
          O que uso no meu trabalho diário para criar interfaces de alto nível.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {skillGroups.map((group, idx) => (
          <FadeUp key={group.title} delay={0.1 + idx * 0.05} className="h-full">
            <div className="bg-[#16161f] border border-[rgba(255,255,255,0.07)] rounded-2xl p-7 transition-all duration-300 hover:border-[rgba(16,185,129,0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,185,129,0.08)] h-full flex flex-col">
              <div className="text-3xl mb-3.5">{group.icon}</div>
              <div className="text-[0.8rem] font-bold tracking-wide uppercase text-[#475569] mb-3.5">
                {group.title}
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] text-[#34d399] px-3 py-1.5 rounded-md text-[0.8rem] font-medium transition-all duration-200 hover:bg-[rgba(16,185,129,0.22)] hover:border-[rgba(16,185,129,0.5)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
