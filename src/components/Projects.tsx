"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import FadeUp from "./FadeUp";

const projects = [
  {
    title: "ClicLaw",
    number: "01",
    category: "Open source · IA",
    summary: "Controle agentes de IA pelo Telegram, de qualquer lugar.",
    description: "Plataforma que conecta agentes como Claude e Codex ao Telegram, permitindo acompanhar e controlar processos de servidor remotamente. Landing page construída do zero com Next.js e motion design.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/projects/cliclaw.webp?v=9",
    link: "https://cliclaw.luizalmeida.dev/",
    color: "#b9ff66",
  },
  {
    title: "IngressoFácil",
    number: "02",
    category: "Micro SaaS · Eventos",
    summary: "Venda de ingressos simples para quem organiza e para quem compra.",
    description: "Sistema completo para criação e venda de ingressos com filas virtuais, salas de espera e gerenciamento de capacidade.",
    tech: ["Vue.js", "TypeScript", "REST API", "Stripe"],
    image: "/projects/ingressofacil.webp?v=9",
    link: "https://ingressofacil.online",
    color: "#ffb7e5",
  },
  {
    title: "Litúrgico",
    number: "03",
    category: "Produto · Conteúdo",
    summary: "Leitura bíblica e litúrgica com calma, contexto e foco.",
    description: "Plataforma para leitura da Bíblia, Lecionário e devocionais, com múltiplas traduções e foco em uma experiência confortável.",
    tech: ["React", "TypeScript", "Markdown", "Expo"],
    image: "/projects/liturgico.webp?v=9",
    link: "https://liturgico.com.br",
    color: "#ffca56",
  },
];

type Project = (typeof projects)[number];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [active]);

  return (
    <section id="projetos" className="section-pad border-b-2 border-black">
      <div className="site-shell">
        <FadeUp>
          <span className="eyebrow">Projetos selecionados</span>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title max-w-3xl">Trabalho que saiu do slide e chegou nas pessoas.</h2>
            <p className="max-w-sm text-[#5d5b55]">Produtos pensados e construídos de ponta a ponta, com impacto real.</p>
          </div>
        </FadeUp>

        <div className="mt-16 space-y-7">
          {projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.07}>
              <button type="button" onClick={() => setActive(project)} className="group grid w-full overflow-hidden rounded-[20px] border-2 border-black bg-[#faf8f2] text-left shadow-[6px_6px_0_#111] transition-transform hover:-translate-y-1 lg:grid-cols-[1.05fr_.95fr]">
                <div className="flex min-h-[330px] flex-col p-7 md:p-10">
                  <div className="flex items-start justify-between">
                    <span className="pill" style={{ backgroundColor: project.color }}>{project.category}</span>
                    <span className="text-sm font-extrabold text-[#3155ff]">{project.number}</span>
                  </div>
                  <div className="mt-auto pt-20">
                    <h3 className="text-[clamp(2.4rem,5vw,5rem)] font-extrabold leading-none tracking-[-.065em]">{project.title}</h3>
                    <div className="mt-6 flex items-end justify-between gap-6 border-t-2 border-black pt-5">
                      <p className="max-w-lg text-base font-semibold text-[#55534e] md:text-lg">{project.summary}</p>
                      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-black text-white transition-transform group-hover:rotate-45"><ArrowUpRight /></span>
                    </div>
                  </div>
                </div>
                <div className="relative min-h-[300px] overflow-hidden border-t-2 border-black bg-[#d9d6ce] lg:border-l-2 lg:border-t-0">
                  <div className="project-scroll-png" style={{ backgroundImage: `url(${project.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </button>
            </FadeUp>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[100] grid place-items-center p-4 md:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute inset-0 bg-black/70" onClick={() => setActive(null)} aria-label="Fechar detalhes" />
            <div className="absolute inset-0 project-modal-scroll-bg opacity-25" style={{ backgroundImage: `url(${active.image})` }} />
            <motion.article initial={{ y: 30, scale: .98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: .98 }} className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[22px] border-2 border-black bg-[#f3f0e8] p-7 shadow-[8px_8px_0_#3155ff] md:p-11">
              <div className="flex items-start justify-between gap-5">
                <span className="pill" style={{ backgroundColor: active.color }}>{active.category}</span>
                <button type="button" onClick={() => setActive(null)} className="grid size-11 place-items-center rounded-full border-2 border-black" aria-label="Fechar"><X size={19} /></button>
              </div>
              <h3 className="mt-12 text-[clamp(3rem,8vw,6rem)] font-extrabold leading-none tracking-[-.07em]">{active.title}</h3>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#55534e]">{active.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">{active.tech.map((item) => <span key={item} className="pill bg-white">{item}</span>)}</div>
              <a href={active.link} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#3155ff] px-6 py-3.5 font-extrabold text-white">Visitar projeto <ArrowUpRight size={19} /></a>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
