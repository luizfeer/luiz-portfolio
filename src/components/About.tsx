import FadeUp from "./FadeUp";

const stats = [
  { value: "5+", label: "anos de experiência" },
  { value: "40+", label: "projetos entregues" },
  { value: "100%", label: "compromisso com o craft" },
];

export default function About() {
  return (
    <section id="sobre" className="section-pad border-b-2 border-black bg-[#faf8f2]">
      <div className="site-shell">
        <FadeUp>
          <span className="eyebrow">Sobre mim</span>
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <h2 className="section-title">Não é só tela bonita. É produto que funciona.</h2>
            <div className="body-copy space-y-5 text-[1.05rem]">
              <p>Sou desenvolvedor frontend de Carmo do Rio Claro, Minas Gerais. Trabalho no encontro entre engenharia e design para criar experiências digitais úteis, acessíveis e rápidas.</p>
              <p>No dia a dia, transformo fluxos complexos em interfaces simples com <strong className="text-black">Vue, Nuxt, React e TypeScript</strong>. Gosto de sistemas bem pensados, código que o time consegue evoluir e detalhes que o usuário percebe — mesmo sem saber explicar.</p>
            </div>
          </div>
        </FadeUp>

        <div className="mt-16 grid overflow-hidden rounded-[20px] border-2 border-black md:grid-cols-3">
          {stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={0.08 * index} className={`p-7 md:p-9 ${index > 0 ? "border-t-2 border-black md:border-l-2 md:border-t-0" : ""} ${index === 1 ? "bg-[#b9ff66]" : "bg-[#f3f0e8]"}`}>
              <div className="text-5xl font-extrabold tracking-[-.07em] md:text-6xl">{stat.value}</div>
              <div className="mt-2 text-sm font-bold text-[#5d5b55]">{stat.label}</div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
