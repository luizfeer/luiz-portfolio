import FadeUp from "./FadeUp";

const MONO = { fontFamily: "var(--ff-mono), monospace" };
const DISPLAY = { fontFamily: "var(--ff-display), Georgia, serif" };

const skillGroups = [
  { num: "01", title: "Linguagens", tags: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { num: "02", title: "Frameworks & Libs", tags: ["Vue.js", "Nuxt", "React", "Next.js", "React Native", "Expo", "Quasar"] },
  { num: "03", title: "UI / UX & Styling", tags: ["Responsividade", "Acessibilidade", "Tailwind CSS", "Figma"] },
  { num: "04", title: "Integração & Dados", tags: ["APIs REST", "Fetch / Axios", "WebSockets"] },
  { num: "05", title: "Ferramentas", tags: ["Git / GitHub", "Vite", "Vitest", "CI/CD"] },
  { num: "06", title: "Boas práticas", tags: ["Component Design", "Performance", "Clean Code", "Code Review"] },
];

export default function Skills() {
  return (
    <section id="skills" className="px-[5%] py-[120px] bg-surface">
      <FadeUp>
        <div className="flex items-center gap-4 mb-14">
          <span className="text-[0.62rem] tracking-[3px] uppercase text-faint" style={MONO}>04</span>
          <div className="h-[1px] w-10 bg-ink/10" />
          <span className="text-[0.62rem] tracking-[3px] uppercase text-muted" style={MONO}>skills</span>
        </div>
        <h2
          className="text-[clamp(2.5rem,6.5vw,5rem)] font-bold italic leading-[1.05] tracking-tight text-ink"
          style={DISPLAY}
        >
          Tecnologias
        </h2>
        <p className="text-faint text-[0.9rem] mt-4 max-w-[440px] leading-relaxed" style={MONO}>
          O que uso no dia a dia para criar interfaces de alto nível.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/6 mt-14">
        {skillGroups.map((group, idx) => (
          <FadeUp key={group.title} delay={0.05 + idx * 0.05} className="h-full">
            <div className="bg-surface p-7 h-full flex flex-col hover:bg-panel transition-colors duration-300 group">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[0.62rem] tracking-[2px] uppercase text-rust" style={MONO}>
                  {group.num}
                </span>
                <div className="h-[1px] flex-1 mx-4 bg-ink/6 group-hover:bg-rust/20 transition-colors" />
              </div>
              <div
                className="text-[0.8rem] font-bold tracking-wide uppercase text-faint mb-4 group-hover:text-muted transition-colors"
                style={MONO}
              >
                {group.title}
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    style={MONO}
                    className="border border-ink/8 text-faint px-2.5 py-1 text-[0.65rem] tracking-[1px] uppercase transition-all duration-200 group-hover:border-rust/30 group-hover:text-muted"
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
