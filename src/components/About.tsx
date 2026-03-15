import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="sobre" className="px-[5%] py-[100px] bg-[#0d0d14]">
      <FadeUp>
        <span className="inline-block text-[0.75rem] font-semibold tracking-[1.5px] uppercase text-[#34d399] mb-3">
          // sobre mim
        </span>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight mb-4 leading-[1.15]">
          Quem sou eu
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-14 items-center">
        <FadeUp delay={0.1}>
          <div className="text-[#94a3b8] text-[1rem] leading-relaxed space-y-5">
            <p>
              Sou <strong className="text-[#e2e8f0]">Luiz Almeida</strong>, desenvolvedor frontend de <strong className="text-[#e2e8f0]">Carmo do Rio Claro, Minas Gerais</strong>. Tenho foco em criar interfaces que não apenas funcionam, mas que as pessoas gostam de usar — responsivas, acessíveis e rápidas.
            </p>
            <p>
              Trabalho com <strong className="text-[#e2e8f0]">Vue, Nuxt, React e TypeScript</strong> no dia a dia, sempre atento à qualidade do código, performance e experiência do usuário. Acredito que grandes produtos nascem da colaboração entre design e desenvolvimento.
            </p>
            <p>
              Em meus projetos, somo mais de <strong className="text-[#e2e8f0]">5 anos de experiência</strong> desenvolvendo produtos digitais com foco em resultado, usabilidade e escalabilidade.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "5+", label: "Anos de experiência" },
              { num: "40+", label: "Projetos entregues" },
              // { num: "5+", label: "Tecnologias dominadas" },
              { num: "100%", label: "Dedicação ao craft" }
            ].map((stat) => (
              <div 
                key={stat.label}
                className="bg-[#16161f] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-6 transition-colors duration-300 hover:border-[rgba(16,185,129,0.4)]"
              >
                <div className="text-[2.2rem] font-black text-gradient tracking-tight leading-none mb-1.5">
                  {stat.num}
                </div>
                <div className="text-[0.8rem] text-[#94a3b8] font-medium">
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
