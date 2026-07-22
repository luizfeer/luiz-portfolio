import FadeUp from "./FadeUp";

const groups = [
  { number: "01", title: "Core", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { number: "02", title: "Frontend", items: ["Vue.js", "Nuxt", "React", "Next.js", "React Native"] },
  { number: "03", title: "Produto", items: ["Design Systems", "Acessibilidade", "Performance", "UI/UX"] },
  { number: "04", title: "Workflow", items: ["Git", "Vitest", "CI/CD", "Code Review"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-b-2 border-black blue-grid text-white">
      <div className="site-shell">
        <FadeUp>
          <span className="eyebrow !text-white">Ferramentas</span>
          <h2 className="section-title max-w-3xl">A stack muda. O raciocínio fica.</h2>
        </FadeUp>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {groups.map((group, index) => (
            <FadeUp key={group.title} delay={index * 0.06}>
              <article className="min-h-[230px] rounded-[18px] border-2 border-black bg-[#f3f0e8] p-7 text-black shadow-[5px_5px_0_#111] transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between border-b-2 border-black pb-4">
                  <h3 className="text-xl font-extrabold">{group.title}</h3>
                  <span className="text-sm font-extrabold text-[#3155ff]">{group.number}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item) => <span key={item} className="pill">{item}</span>)}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
