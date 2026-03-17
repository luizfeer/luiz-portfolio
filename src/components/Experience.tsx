"use client";

import { useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import FadeUp from "./FadeUp";
import { ChevronDown, ChevronUp } from "lucide-react";

const MONO = { fontFamily: "var(--ff-mono), monospace" };
const DISPLAY = { fontFamily: "var(--ff-display), Georgia, serif" };
const BODY = { fontFamily: "var(--ff-body), Georgia, serif" };

const experiences = [
  {
    company: "Conexa",
    role: "Frontend Engineer",
    period: "05/2022 – presente · Remoto",
    description:
      "Maior ecossistema digital de saúde da América Latina, com foco em telemedicina, saúde mental e gestão de saúde para empresas.",
    bullets: [
      "Desenvolvo e mantenho interfaces para produtos de saúde digital de grande escala, utilizados por milhares de profissionais de saúde e pacientes.",
      "Crio e evoluo componentes reutilizáveis, formulários complexos e fluxos críticos de atendimento, garantindo consistência e acessibilidade.",
      "Faço integração com APIs REST com foco em performance, tratamento de erros e boas práticas de frontend.",
      "Colaboro de perto com times de design e backend para garantir uma experiência coesa, rastreável e de alta qualidade para o usuário final.",
    ],
  },
  {
    company: "Pruvo",
    role: "Tech Lead Frontend",
    period: "02/2022 – 04/2023 · Remoto",
    description:
      "EdTech startup focused on innovation in education and exam applications.",
    bullets: [
      "Acted as Frontend Tech Lead, designing the architecture of the system's user interface.",
      "Led the development team to deliver scalable, maintainable, and high-performance solutions.",
    ],
  },
];

const CARD_COUNT = experiences.length;
const SWIPE_OFFSET = 60;
const SWIPE_VELOCITY = 600;

const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
  }),
  center: { y: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    y: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.98,
  }),
};

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function goTo(index: number) {
    const next = Math.max(0, Math.min(index, CARD_COUNT - 1));
    if (next === currentIndex) return;
    setDirection(next > currentIndex ? 1 : -1);
    setCurrentIndex(next);
  }

  function next() {
    if (currentIndex >= CARD_COUNT - 1) return;
    setDirection(1);
    setCurrentIndex((prev) => prev + 1);
  }

  function prev() {
    if (currentIndex <= 0) return;
    setDirection(-1);
    setCurrentIndex((prev) => prev - 1);
  }

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (info.offset.y > SWIPE_OFFSET || info.velocity.y > SWIPE_VELOCITY) {
      prev();
    } else if (info.offset.y < -SWIPE_OFFSET || info.velocity.y < -SWIPE_VELOCITY) {
      next();
    }
  }

  const exp = experiences[currentIndex];

  return (
    <section id="experiencia" className="px-[5%] py-[120px]">
      <FadeUp>
        <div className="flex items-center gap-4 mb-14">
          <span className="text-[0.62rem] tracking-[3px] uppercase text-[#52473E]" style={MONO}>03</span>
          <div className="h-[1px] w-10 bg-[rgba(237,229,208,0.1)]" />
          <span className="text-[0.62rem] tracking-[3px] uppercase text-[#8A7E72]" style={MONO}>experiência</span>
        </div>
        <h2
          className="text-[clamp(2.5rem,6.5vw,5rem)] font-bold italic leading-[1.05] tracking-tight text-[#EDE5D0]"
          style={DISPLAY}
        >
          Onde trabalhei
        </h2>
        <p className="text-[#52473E] text-[0.9rem] mt-4 max-w-[440px] leading-relaxed" style={BODY}>
          Minha trajetória profissional focada em produtos de impacto real.
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="mt-12">
          <div className="relative min-h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={exp.company}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: "spring", stiffness: 280, damping: 28 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.12}
                onDragEnd={handleDragEnd}
                className="relative overflow-hidden bg-[#1a1511] border border-[rgba(237,229,208,0.07)] rounded-none p-8 md:p-10 hover:border-[rgba(196,82,42,0.35)] transition-colors duration-300 cursor-grab active:cursor-grabbing touch-pan-y"
              >
                {/* Left accent bar */}
                <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#C4522A] to-[#C4903A]" />

                {/* Warm background glow */}
                <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(196,82,42,0.08) 0%, transparent 65%)" }}
                />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-7">
                  <div>
                    <div
                      className="text-[1.6rem] font-bold italic text-[#EDE5D0] mb-1"
                      style={DISPLAY}
                    >
                      {exp.company}
                    </div>
                    <div
                      className="text-[0.7rem] tracking-[2px] uppercase text-[#C4522A]"
                      style={MONO}
                    >
                      {exp.role}
                    </div>
                  </div>
                  <div
                    className="inline-flex border border-[rgba(196,82,42,0.25)] text-[#52473E] px-3.5 py-1.5 text-[0.65rem] tracking-[1.5px] uppercase whitespace-nowrap self-start"
                    style={MONO}
                  >
                    {exp.period}
                  </div>
                </div>

                <p className="text-[#52473E] text-[0.875rem] italic mb-6 leading-relaxed" style={BODY}>
                  {exp.description}
                </p>

                <ul className="flex flex-col gap-3.5">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-[#8A7E72] text-[0.9rem] leading-relaxed" style={BODY}>
                      <span className="text-[#C4522A] mt-[6px] shrink-0 text-[0.5rem]">◆</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-6">
            <button
              type="button"
              onClick={prev}
              disabled={currentIndex === 0}
              aria-label="Experiência anterior"
              className="p-2 border border-[rgba(237,229,208,0.1)] text-[#52473E] hover:text-[#C4522A] hover:border-[rgba(196,82,42,0.4)] disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Ir para experiência ${index + 1}`}
                  className={`h-[3px] rounded-none transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-[#C4522A]"
                      : "w-3 bg-[rgba(237,229,208,0.15)] hover:bg-[rgba(237,229,208,0.3)]"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              disabled={currentIndex === CARD_COUNT - 1}
              aria-label="Próxima experiência"
              className="p-2 border border-[rgba(237,229,208,0.1)] text-[#52473E] hover:text-[#C4522A] hover:border-[rgba(196,82,42,0.4)] disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <p className="text-center text-[0.6rem] tracking-[2px] text-[#52473E] mt-3 uppercase" style={MONO}>
            arraste ou use as setas
          </p>
        </div>
      </FadeUp>
    </section>
  );
}
