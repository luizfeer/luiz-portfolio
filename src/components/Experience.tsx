import { ArrowUpRight } from "lucide-react";
import FadeUp from "./FadeUp";

const experiences = [
  {
    company: "Conexa",
    role: "Frontend Engineer",
    period: "2022 — agora",
    description: "Produtos digitais de saúde em grande escala, com fluxos críticos para profissionais e pacientes.",
    highlights: ["Interfaces e formulários complexos", "Componentes reutilizáveis e acessíveis", "Integrações REST e foco em performance"],
  },
  {
    company: "Pruvo",
    role: "Tech Lead Frontend",
    period: "2022 — 2023",
    description: "EdTech focada em inovação na educação e aplicação de avaliações.",
    highlights: ["Arquitetura da interface", "Liderança técnica do time", "Soluções escaláveis e sustentáveis"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="section-pad border-b-2 border-black bg-[#111] text-white">
      <div className="site-shell">
        <FadeUp>
          <span className="eyebrow !text-[#b9ff66]">Experiência</span>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title max-w-2xl">Experiência que virou repertório.</h2>
            <p className="max-w-md text-[#aaa8a1]">Atuação em produtos reais, times multidisciplinares e decisões que precisam funcionar fora do Figma.</p>
          </div>
        </FadeUp>

        <div className="mt-16 border-t border-white/25">
          {experiences.map((experience, index) => (
            <FadeUp key={experience.company} delay={index * 0.08}>
              <article className="group grid gap-7 border-b border-white/25 py-9 transition-colors hover:bg-white/[.035] md:grid-cols-[180px_1fr_1fr_32px] md:px-5">
                <div className="text-sm font-bold text-[#b9ff66]">{experience.period}</div>
                <div>
                  <h3 className="text-3xl font-extrabold tracking-[-.04em]">{experience.company}</h3>
                  <div className="mt-1 text-sm font-bold text-[#aaa8a1]">{experience.role}</div>
                </div>
                <div>
                  <p className="mb-5 text-[#d2d0ca]">{experience.description}</p>
                  <ul className="space-y-2 text-sm text-[#8f8d87]">
                    {experience.highlights.map((item) => <li key={item} className="flex gap-2 before:content-['—']">{item}</li>)}
                  </ul>
                </div>
                <ArrowUpRight className="text-[#b9ff66] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
