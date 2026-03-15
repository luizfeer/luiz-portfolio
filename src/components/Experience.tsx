"use client";

import { useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import FadeUp from "./FadeUp";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

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
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
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
    const shouldGoPrev = info.offset.y > SWIPE_OFFSET || info.velocity.y > SWIPE_VELOCITY;
    const shouldGoNext = info.offset.y < -SWIPE_OFFSET || info.velocity.y < -SWIPE_VELOCITY;

    if (shouldGoPrev) {
      prev();
      return;
    }

    if (shouldGoNext) {
      next();
    }
  }

  const currentExperience = experiences[currentIndex];

  return (
    <section id="experiencia" className="px-[5%] py-[100px]">
      <FadeUp>
        <span className="inline-block text-[0.75rem] font-semibold tracking-[1.5px] uppercase text-[#34d399] mb-3">
          // experiência
        </span>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight mb-4 leading-[1.15]">
          Onde trabalhei
        </h2>
        <p className="text-[#94a3b8] text-[1rem] max-w-[520px] leading-relaxed">
          Minha trajetória profissional focada em produtos de impacto real.
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="mt-12">
          <div className="relative min-h-[430px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={currentExperience.company}
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
                className="relative overflow-hidden bg-[#16161f] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8 md:p-10 hover:border-[rgba(16,185,129,0.4)] transition-colors duration-300 cursor-grab active:cursor-grabbing touch-pan-y"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary" />
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[rgba(16,185,129,0.1)] blur-3xl pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-extrabold text-[#e2e8f0] mb-1">
                      {currentExperience.company}
                    </div>
                    <div className="text-gradient font-semibold text-[0.95rem]">
                      {currentExperience.role}
                    </div>
                  </div>
                  <div className="inline-flex bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.25)] text-[#34d399] px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap self-start">
                    {currentExperience.period}
                  </div>
                </div>

                <p className="text-[#94a3b8] text-sm italic mb-6">
                  {currentExperience.description}
                </p>

                <ul className="flex flex-col gap-3">
                  {currentExperience.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-[#94a3b8] text-[0.925rem] leading-relaxed"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#34d399] mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={prev}
              disabled={currentIndex === 0}
              aria-label="Experiência anterior"
              className="p-2 rounded-lg border border-[rgba(255,255,255,0.07)] text-[#94a3b8] hover:text-[#34d399] hover:border-[rgba(16,185,129,0.4)] disabled:opacity-40 disabled:pointer-events-none transition-all"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Ir para experiência ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-[#34d399]"
                      : "w-2 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.35)]"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              disabled={currentIndex === CARD_COUNT - 1}
              aria-label="Próxima experiência"
              className="p-2 rounded-lg border border-[rgba(255,255,255,0.07)] text-[#94a3b8] hover:text-[#34d399] hover:border-[rgba(16,185,129,0.4)] disabled:opacity-40 disabled:pointer-events-none transition-all"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          <p className="text-center text-[0.75rem] text-[#475569] mt-2">
            Arraste para cima/baixo ou use as setas
          </p>
        </div>
      </FadeUp>
    </section>
  );
}
