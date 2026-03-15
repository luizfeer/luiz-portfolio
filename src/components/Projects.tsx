"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import FadeUp from "./FadeUp";
import { ExternalLink, X } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "ClicLaw",
      subtitle: "Ferramenta de produtividade com IA",
      desc: "Plataforma que conecta agentes de IA (Claude, Codex) ao Telegram, permitindo controlar seus processos de servidor remotamente sem precisar instalar nada. Landing page desenvolvida do zero com Next.js e animações avançadas.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      imgSrc: "/projects/cliclaw.webp?v=9",
      scrollPreview: true,
      badge: "Open Source",
      link: "https://cliclaw.luizalmeida.dev/",
    },
    {
      title: "IngressoFácil",
      subtitle: "Plataforma de ingressos para eventos",
      desc: "Sistema completo para criação e venda de ingressos com suporte a filas virtuais, salas de espera e gerenciamento de capacidade. Taxa de apenas 3% no PIX para organizadores.",
      tech: ["Vue.js", "TypeScript", "REST API", "Stripe"],
      imgSrc: "/projects/ingressofacil.webp?v=9",
      scrollPreview: true,
      badge: "Micro SaaS",
      link: "https://ingressofacil.online",
    },
    {
      title: "Litúrgico",
      subtitle: "App de leitura bíblica e litúrgica",
      desc: "Plataforma de leitura da Bíblia, Lecionário e devocionais com foco em design minimalista e experiência de leitura agradável. Suporte a múltiplas traduções e ano litúrgico.",
      tech: ["React", "TypeScript", "Markdown", "Expo"],
      imgSrc: "/projects/liturgico.webp?v=9",
      scrollPreview: true,
      badge: "App",
      link: "https://liturgico.com.br",
    },
  ];
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [activeProject]);

  return (
    <section id="projetos" className="px-[5%] py-[100px]">
      <FadeUp>
        <span className="inline-block text-[0.75rem] font-semibold tracking-[1.5px] uppercase text-[#34d399] mb-3">
          // projetos
        </span>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight mb-4 leading-[1.15]">
          Projetos em destaque
        </h2>
        <p className="text-[#94a3b8] text-[1rem] max-w-[520px] leading-relaxed">
          Produtos reais que desenvolvi, do design à produção.
        </p>
      </FadeUp>

      <LayoutGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((proj, idx) => (
            <FadeUp key={proj.title} delay={0.1 + idx * 0.1} className="h-full">
              <motion.button
                layoutId={`project-card-${proj.title}`}
                type="button"
                onClick={() => setActiveProject(proj)}
                aria-label={`Abrir detalhes do projeto ${proj.title}`}
                className="group bg-[#16161f] border border-[rgba(255,255,255,0.07)] rounded-[20px] overflow-hidden transition-all duration-300 hover:border-[rgba(16,185,129,0.5)] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(16,185,129,0.12)] flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34d399] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
              >
                <div className="relative overflow-hidden h-[210px] bg-[#13131e]">
                  <div
                    className="project-scroll-png"
                    style={{ backgroundImage: `url(${proj.imgSrc})` }}
                    aria-hidden="true"
                  />
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center px-2.5 py-1 rounded-full bg-[rgba(16,185,129,0.2)] border border-[rgba(16,185,129,0.4)] text-[#d1fae5] text-[0.68rem] font-semibold tracking-wide uppercase">
                    {proj.badge}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16161f]/90 to-transparent flex items-end justify-start p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 text-white text-[0.85rem] font-semibold bg-gradient-primary px-4 py-2 rounded-lg transition-opacity group-hover:opacity-90">
                      Ver detalhes <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 text-left">
                  <div className="text-[1.15rem] font-bold text-[#e2e8f0] mb-2">
                    {proj.title}
                  </div>
                  <div className="text-[0.82rem] text-[#34d399] font-medium mb-3">
                    {proj.subtitle}
                  </div>
                  <p className="text-[#94a3b8] text-[0.875rem] leading-[1.65] mb-5 flex-1">
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-[rgba(148,163,184,0.12)] border border-[rgba(148,163,184,0.25)] text-[#e2e8f0] px-2.5 py-1 rounded-md text-[0.75rem] font-medium"
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

        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 z-[120]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="absolute inset-0 bg-black/45"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/45 via-[#050508]/38 to-[#050508]/22" />

              <div className="relative h-full w-full px-4 py-6 md:px-8 md:py-10 flex items-center justify-center">
                <motion.div
                  layoutId={`project-card-${activeProject.title}`}
                  className="w-full max-w-[900px] rounded-2xl border border-[rgba(255,255,255,0.26)] bg-[rgba(17,24,39,0.36)] backdrop-blur-[22px] shadow-[0_30px_90px_rgba(0,0,0,0.35)] p-6 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[rgba(16,185,129,0.2)] border border-[rgba(16,185,129,0.45)] text-[#d1fae5] text-[0.68rem] font-semibold tracking-wide uppercase mb-3">
                        {activeProject.badge}
                      </div>
                      <h3 className="text-[1.8rem] md:text-[2rem] font-black text-[#f1f5f9] leading-tight">
                        {activeProject.title}
                      </h3>
                      <p className="text-[#6ee7b7] text-[0.95rem] font-semibold mt-1">
                        {activeProject.subtitle}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveProject(null)}
                      aria-label="Fechar modal"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] text-[#f1f5f9] hover:border-[rgba(16,185,129,0.45)] hover:text-[#34d399] transition-colors"
                    >
                      <X className="w-4.5 h-4.5" />
                    </button>
                  </div>

                  <p className="text-[#dbe3ef] text-[0.95rem] leading-relaxed mb-6">
                    {activeProject.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {activeProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[rgba(16,185,129,0.16)] border border-[rgba(16,185,129,0.33)] text-[#d1fae5] px-2.5 py-1 rounded-md text-[0.78rem] font-medium"
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
                      className="inline-flex items-center gap-2 bg-[#10b981] text-[#042018] px-5 py-2.5 rounded-lg font-bold text-[0.9rem] hover:bg-[#34d399] transition-colors"
                    >
                      Acessar site <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveProject(null)}
                      className="inline-flex items-center px-5 py-2.5 rounded-lg border border-[rgba(255,255,255,0.2)] text-[#f1f5f9] bg-[rgba(255,255,255,0.09)] font-semibold text-[0.9rem] hover:border-[rgba(16,185,129,0.45)] hover:text-[#34d399] transition-colors"
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
