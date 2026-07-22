import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import FadeUp from "./FadeUp";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden border-b-2 border-black pt-[72px]">
      <div className="site-shell grid min-h-[calc(100vh-72px)] items-center gap-12 py-14 lg:grid-cols-[1fr_310px]">
        <FadeUp>
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border-2 border-black bg-[#b9ff66] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em]">
            <span className="size-2 rounded-full bg-black" /> Disponível para novos desafios
          </div>

          <h1 className="display-title text-balance">
            Eu construo produtos digitais que <span className="text-[#3155ff]">fazem sentido.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 border-t-2 border-black pt-7 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-[clamp(1rem,2vw,1.25rem)] font-medium leading-relaxed text-[#494741]">
              Sou Luiz Almeida, Frontend Engineer. Transformo complexidade em interfaces claras, rápidas e gostosas de usar.
            </p>
            <a href="#projetos" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#3155ff] px-6 py-3.5 font-extrabold text-white transition-transform hover:-translate-y-1">
              Ver meu trabalho <ArrowDownRight size={19} />
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.12} className="hidden lg:block">
          <div className="brutal-card rotate-2 bg-[#ff5c35] p-7 text-black">
            <div className="mb-20 flex items-start justify-between">
              <span className="text-xs font-extrabold uppercase tracking-[.16em]">Frontend<br />Engineer</span>
              <ArrowUpRight size={32} strokeWidth={2.5} />
            </div>
            <div className="text-[4.7rem] font-extrabold leading-none tracking-[-.08em]">5+</div>
            <p className="mt-2 max-w-[180px] font-bold leading-tight">anos unindo engenharia, produto e design.</p>
          </div>
          <div className="mt-7 flex gap-3">
            <a href="https://github.com/luizfeer" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-12 place-items-center rounded-full border-2 border-black hover:bg-black hover:text-white"><Github size={19} /></a>
            <a href="https://linkedin.com/in/luiz-almeida-front" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-12 place-items-center rounded-full border-2 border-black hover:bg-black hover:text-white"><Linkedin size={19} /></a>
          </div>
        </FadeUp>
      </div>

      <div className="absolute -bottom-16 -right-16 -z-10 size-72 rounded-full border-[42px] border-[#3155ff]/10" />
    </section>
  );
}
