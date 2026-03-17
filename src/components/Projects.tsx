"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import FadeUp from "./FadeUp";
import { ExternalLink, X } from "lucide-react";

const MONO = { fontFamily: "var(--ff-mono), monospace" };
const DISPLAY = { fontFamily: "var(--ff-display), Georgia, serif" };
const BODY = { fontFamily: "var(--ff-body), Georgia, serif" };

const projects = [
  {
    title: "ClicLaw",
    subtitle: "Ferramenta de produtividade com IA",
    desc: "Plataforma que conecta agentes de IA (Claude, Codex) ao Telegram, permitindo controlar seus processos de servidor remotamente sem precisar instalar nada. Landing page desenvolvida do zero com Next.js e animações avançadas.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imgSrc: "/projects/cliclaw.webp?v=9",
    badge: "Open Source",
    link: "https://cliclaw.luizalmeida.dev/",
  },
  {
    title: "IngressoFácil",
    subtitle: "Plataforma de ingressos para eventos",
    desc: "Sistema completo para criação e venda de ingressos com suporte a filas virtuais, salas de espera e gerenciamento de capacidade. Taxa de apenas 3% no PIX para organizadores.",
    tech: ["Vue.js", "TypeScript", "REST API", "Stripe"],
    imgSrc: "/projects/ingressofacil.webp?v=9",
    badge: "Micro SaaS",
    link: "https://ingressofacil.online",
  },
  {
    title: "Litúrgico",
    subtitle: "App de leitura bíblica e litúrgica",
    desc: "Plataforma de leitura da Bíblia, Lecionário e devocionais com foco em design minimalista e experiência de leitura agradável. Suporte a múltiplas traduções e ano litúrgico.",
    tech: ["React", "TypeScript", "Markdown", "Expo"],
    imgSrc: "/projects/liturgico.webp?v=9",
    badge: "App",
    link: "https://liturgico.com.br",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (!activeProject) return;
    const previousOverflow = document.body.style.overflow;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [activeProject]);

  return (
    <section id="projetos" className="px-[5%] py-[120px]">
      <FadeUp>
        <div className="flex items-center gap-4 mb-14">
          <span className="text-[0.62rem] tracking-[3px] uppercase text-[#52473E]" style={MONO}>05</span>
          <div className="h-[1px] w-10 bg-[rgba(237,229,208,0.1)]" />
          <span className="text-[0.62rem] tracking-[3px] uppercase text-[#8A7E72]" style={MONO}>projetos</span>
        </div>
        <h2
          className="text-[clamp(2.5rem,6.5vw,5rem)] font-bold italic leading-[1.05] tracking-tight text-[#EDE5D0]"
          style={DISPLAY}
        >
          Projetos em destaque
        </h2>
        <p className="text-[#52473E] text-[0.9rem] mt-4 max-w-[440px] leading-relaxed" style={BODY}>
          Produtos reais que desenvolvi, do design à produção.
        </p>
      </FadeUp>

      <LayoutGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(237,229,208,0.06)] mt-14">
          {projects.map((proj, idx) => (
            <FadeUp key={proj.title} delay={0.1 + idx * 0.1} className="h-full">
              <motion.button
                layoutId={`project-card-${proj.title}`}
                type="button"
                onClick={() => setActiveProject(proj)}
                aria-label={`Abrir detalhes do projeto ${proj.title}`}
                className="group bg-[#080605] overflow-hidden flex flex-col h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4522A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080605] hover:bg-[#1a1511] transition-colors duration-300"
              >
                {/* Image area */}
                <div className="relative overflow-hidden h-[200px] bg-[#0d0a08]">
                  <div
                    className="project-scroll-png"
                    style={{ backgroundImage: `url(${proj.imgSrc})` }}
                    aria-hidden="true"
                  />
                  {/* Badge */}
                  <div
                    className="absolute top-3 left-3 z-10 inline-flex items-center px-2.5 py-1 border border-[rgba(196,82,42,0.4)] bg-[rgba(8,6,5,0.8)] text-[#C4522A] text-[0.6rem] font-bold tracking-[2px] uppercase"
                    style={MONO}
                  >
                    {proj.badge}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[rgba(8,6,5,0.85)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className="inline-flex items-center gap-2 text-[#EDE5D0] text-[0.68rem] tracking-[2px] uppercase border border-[rgba(237,229,208,0.3)] px-5 py-2.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      style={MONO}
                    >
                      Ver detalhes <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">
                  <div
                    className="text-[1.2rem] font-bold italic text-[#EDE5D0] mb-1.5"
                    style={DISPLAY}
                  >
                    {proj.title}
                  </div>
                  <div
                    className="text-[0.65rem] tracking-[1.5px] uppercase text-[#C4522A] mb-4"
                    style={MONO}
                  >
                    {proj.subtitle}
                  </div>
                  <p className="text-[#52473E] text-[0.875rem] leading-relaxed mb-5 flex-1" style={BODY}>
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        style={MONO}
                        className="border border-[rgba(237,229,208,0.08)] text-[#52473E] px-2 py-0.5 text-[0.6rem] tracking-[1px] uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            </FadeUp>
          ))}
        </div>

        {/* Project modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 z-[120]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div
                className="absolute inset-0 bg-[#080605]/60"
                onClick={() => setActiveProject(null)}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 project-modal-scroll-bg"
                style={{ backgroundImage: `url(${activeProject.imgSrc})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 project-modal-aurora" aria-hidden="true" />
              <div className="absolute inset-0 project-modal-grain" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080605]/70 via-[#080605]/50 to-[#080605]/30" />

              <div className="relative h-full w-full px-4 py-6 md:px-8 md:py-10 flex items-center justify-center">
                <motion.div
                  layoutId={`project-card-${activeProject.title}`}
                  className="w-full max-w-[860px] border border-[rgba(237,229,208,0.15)] bg-[rgba(13,10,8,0.88)] backdrop-blur-[24px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] p-7 md:p-10"
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div
                        className="inline-flex items-center border border-[rgba(196,82,42,0.4)] text-[#C4522A] px-2.5 py-1 text-[0.6rem] tracking-[2px] uppercase mb-4"
                        style={MONO}
                      >
                        {activeProject.badge}
                      </div>
                      <h3
                        className="text-[2rem] md:text-[2.5rem] font-bold italic text-[#EDE5D0] leading-tight"
                        style={DISPLAY}
                      >
                        {activeProject.title}
                      </h3>
                      <p
                        className="text-[0.68rem] tracking-[2px] uppercase text-[#C4522A] mt-2"
                        style={MONO}
                      >
                        {activeProject.subtitle}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveProject(null)}
                      aria-label="Fechar modal"
                      className="inline-flex items-center justify-center w-9 h-9 border border-[rgba(237,229,208,0.15)] text-[#52473E] hover:border-[rgba(196,82,42,0.4)] hover:text-[#C4522A] transition-colors shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[#8A7E72] text-[0.95rem] leading-relaxed mb-7" style={BODY}>
                    {activeProject.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {activeProject.tech.map((tech) => (
                      <span
                        key={tech}
                        style={MONO}
                        className="border border-[rgba(196,82,42,0.3)] text-[#C4522A] px-2.5 py-1 text-[0.65rem] tracking-[1.5px] uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={MONO}
                      className="inline-flex items-center gap-2 bg-[#C4522A] text-[#EDE5D0] px-6 py-3 text-[0.7rem] tracking-[2px] uppercase font-bold hover:bg-[#A8401E] transition-colors"
                    >
                      Acessar site <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveProject(null)}
                      style={MONO}
                      className="inline-flex items-center px-6 py-3 border border-[rgba(237,229,208,0.15)] text-[#52473E] text-[0.7rem] tracking-[2px] uppercase hover:border-[rgba(196,82,42,0.4)] hover:text-[#C4522A] transition-colors"
                    >
                      Voltar
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}
