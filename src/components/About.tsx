import FadeUp from "./FadeUp";

const MONO = { fontFamily: "var(--ff-mono), monospace" };
const DISPLAY = { fontFamily: "var(--ff-display), Georgia, serif" };
const BODY = { fontFamily: "var(--ff-body), Georgia, serif" };

export default function About() {
  return (
    <section id="sobre" className="px-[5%] py-[120px] bg-[#0d0a08]">
      <FadeUp>
        <div className="flex items-center gap-4 mb-14">
          <span className="text-[0.62rem] tracking-[3px] uppercase text-[#52473E]" style={MONO}>02</span>
          <div className="h-[1px] w-10 bg-[rgba(237,229,208,0.1)]" />
          <span className="text-[0.62rem] tracking-[3px] uppercase text-[#8A7E72]" style={MONO}>sobre mim</span>
        </div>
        <h2
          className="text-[clamp(2.5rem,6.5vw,5rem)] font-bold italic leading-[1.05] tracking-tight text-[#EDE5D0]"
          style={DISPLAY}
        >
          Quem sou eu
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mt-16 items-start">
        <FadeUp delay={0.1}>
          <div className="space-y-6" style={BODY}>
            <p className="text-[#8A7E72] text-[1rem] leading-relaxed">
              Sou{" "}
              <strong className="text-[#EDE5D0] font-semibold">Luiz Almeida</strong>, desenvolvedor
              frontend de{" "}
              <strong className="text-[#EDE5D0] font-semibold">
                Carmo do Rio Claro, Minas Gerais
              </strong>
              . Tenho foco em criar interfaces que não apenas funcionam, mas que as pessoas gostam de
              usar — responsivas, acessíveis e rápidas.
            </p>
            <p className="text-[#8A7E72] text-[1rem] leading-relaxed">
              Trabalho com{" "}
              <strong className="text-[#EDE5D0] font-semibold">
                Vue, Nuxt, React e TypeScript
              </strong>{" "}
              no dia a dia, sempre atento à qualidade do código, performance e experiência do usuário.
              Acredito que grandes produtos nascem da colaboração entre design e desenvolvimento.
            </p>
            <p className="text-[#8A7E72] text-[1rem] leading-relaxed">
              Em meus projetos, acumulo mais de{" "}
              <strong className="text-[#EDE5D0] font-semibold">5 anos de experiência</strong>{" "}
              desenvolvendo produtos digitais com foco em resultado, usabilidade e escalabilidade.
            </p>
          </div>
        </FadeUp>

        {/* Stats grid with gap-px editorial trick */}
        <FadeUp delay={0.2}>
          <div className="grid grid-cols-2 gap-px bg-[rgba(237,229,208,0.06)]">
            {[
              { num: "5+", label: "Anos de\nexperiência" },
              { num: "40+", label: "Projetos\nentregues" },
              { num: "100%", label: "Dedicação\nao craft" },
              { num: "∞", label: "Curiosidade\ntécnica" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0d0a08] p-8 hover:bg-[#1a1511] transition-colors duration-300 group"
              >
                <div
                  className="text-[3.2rem] font-black italic leading-none mb-2 text-gradient"
                  style={DISPLAY}
                >
                  {stat.num}
                </div>
                <div
                  className="text-[0.62rem] text-[#52473E] tracking-[1.5px] uppercase group-hover:text-[#8A7E72] transition-colors whitespace-pre-line"
                  style={MONO}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
