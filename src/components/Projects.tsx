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
    const prev = document.body.style.overflow;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onEscape);
    };
  }, [activeProject]);

  return (
    <section id="projetos" className="px-[5%] py-[120px] bg-bg">
      <FadeUp>
        <div className="flex items-center gap-4 mb-14">
          <span className="text-[0.62rem] tracking-[3px] uppercase text-faint" style={MONO}>05</span>
          <div className="h-[1px] w-10 bg-ink/10" />
          <span className="text-[0.62rem] tracking-[3px] uppercase text-muted" style={MONO}>projetos</span>
        </div>
        <h2
          className="text-[clamp(2.5rem,6.5vw,5rem)] font-bold italic leading-[1.05] tracking-tight text-ink"
          style={DISPLAY}
        >
          Projetos em destaque
        </h2>
        <p className="text-faint text-[0.9rem] mt-4 max-w-[440px] leading-relaxed" style={BODY}>
          Produtos reais que desenvolvi, do design à produção.
        </p>
      </FadeUp>

      <LayoutGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/6 mt-14">
          {projects.map((proj, idx) => (
            <FadeUp key={proj.title} delay={0.1 + idx * 0.1} className="h-full">
              <motion.button
                layoutId={`project-card-${proj.title}`}
                type="button"
                onClick={() => setActiveProject(proj)}
                aria-label={`Abrir detalhes do projeto ${proj.title}`}
                className="group bg-bg overflow-hidden flex flex-col h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-bg hover:bg-panel transition-colors duration-300"
              >
                {/* Image area */}
                <div className="relative overflow-hidden h-[200px] bg-surface">
                  <div
                    className="project-scroll-png"
                    style={{ backgroundImage: `url(${proj.imgSrc})` }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-3 left-3 z-10 inline-flex items-center px-2.5 py-1 border border-rust/40 text-rust text-[0.6rem] font-bold tracking-[2px] uppercase"
                    style={{ ...MONO, background: "color-mix(in oklch, var(--color-bg) 85%, transparent)" }}
                  >
                    {proj.badge}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "color-mix(in oklch, var(--color-bg) 85%, transparent)" }}>
                    <span
                      className="inline-flex items-center gap-2 text-ink text-[0.68rem] tracking-[2px] uppercase border border-ink/30 px-5 py-2.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      style={MONO}
                    >
                      Ver detalhes <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-[1.2rem] font-bold italic text-ink mb-1.5" style={DISPLAY}>
                    {proj.title}
                  </div>
                  <div className="text-[0.65rem] tracking-[1.5px] uppercase text-rust mb-4" style={MONO}>
                    {proj.subtitle}
                  </div>
                  <p className="text-faint text-[0.875rem] leading-relaxed mb-5 flex-1" style={BODY}>
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        style={MONO}
                        className="border border-ink/8 text-faint px-2 py-0.5 text-[0.6rem] tracking-[1px] uppercase"
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
                className="absolute inset-0 bg-bg/65"
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
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-bg/50 to-bg/25" />

              <div className="relative h-full w-full px-4 py-6 md:px-8 md:py-10 flex items-center justify-center">
                <motion.div
                  layoutId={`project-card-${activeProject.title}`}
                  className="w-full max-w-[860px] border border-ink/15 shadow-[0_40px_100px_rgba(0,0,0,0.4)] p-7 md:p-10"
                  style={{ background: "color-mix(in oklch, var(--color-bg) 88%, transparent)", backdropFilter: "blur(24px)" }}
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div
                        className="inline-flex items-center border border-rust/40 text-rust px-2.5 py-1 text-[0.6rem] tracking-[2px] uppercase mb-4"
                        style={MONO}
                      >
                        {activeProject.badge}
                      </div>
                      <h3
                        className="text-[2rem] md:text-[2.5rem] font-bold italic text-ink leading-tight"
                        style={DISPLAY}
                      >
                        {activeProject.title}
                      </h3>
                      <p className="text-[0.68rem] tracking-[2px] uppercase text-rust mt-2" style={MONO}>
                        {activeProject.subtitle}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveProject(null)}
                      aria-label="Fechar modal"
                      className="inline-flex items-center justify-center w-9 h-9 border border-ink/15 text-faint hover:border-rust/40 hover:text-rust transition-colors shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-muted text-[0.95rem] leading-relaxed mb-7" style={BODY}>
                    {activeProject.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {activeProject.tech.map((tech) => (
                      <span
                        key={tech}
                        style={MONO}
                        className="border border-rust/30 text-rust px-2.5 py-1 text-[0.65rem] tracking-[1.5px] uppercase"
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
                      className="inline-flex items-center gap-2 bg-rust text-ink px-6 py-3 text-[0.7rem] tracking-[2px] uppercase font-bold hover:bg-rust-deep transition-colors"
                    >
                      Acessar site <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveProject(null)}
                      style={MONO}
                      className="inline-flex items-center px-6 py-3 border border-ink/15 text-faint text-[0.7rem] tracking-[2px] uppercase hover:border-rust/40 hover:text-rust transition-colors"
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
