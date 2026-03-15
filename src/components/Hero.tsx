import FadeUp from "./FadeUp";
import { ArrowRight, Download, Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-[5%] pt-[100px] pb-[60px] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(16, 185, 129, 0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 60%, rgba(5, 150, 105, 0.1) 0%, transparent 60%)'
      }} />
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-[760px] w-full mt-10 lg:mt-0">
        <FadeUp>
          <div className="inline-flex items-center gap-2 bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.3)] rounded-full px-4 py-1.5 text-[0.8rem] text-[#34d399] font-medium mb-7 tracking-wide">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Disponível para novas oportunidades PJ/CLT
            </div>
          
          <h1 className="text-[clamp(2.8rem,7vw,5rem)] font-black leading-[1.05] tracking-tight mb-4">
            Oi, sou <span className="text-gradient">Luiz</span><br />
            Frontend Engineer
          </h1>
          
          <p className="text-[clamp(1rem,2.5vw,1.3rem)] text-[#94a3b8] font-normal mb-8 max-w-[580px] leading-relaxed">
            Construo interfaces modernas, responsivas e intuitivas com foco em experiência do usuário, performance e código limpo — usando Vue, React, TypeScript e boas práticas de UI/UX.
          </p>

          <div className="flex flex-wrap gap-3.5 mb-12">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 bg-gradient-primary text-white px-7 py-3 rounded-xl font-semibold text-[0.95rem] transition-all duration-200 hover:-translate-y-0.5"
              style={{ boxShadow: "0 4px 24px rgba(16, 185, 129, 0.35)" }}
            >
              <ArrowRight className="w-4 h-4" />
              Ver Projetos
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-transparent text-[#e2e8f0] px-7 py-3 rounded-xl font-medium text-[0.95rem] border border-[rgba(255,255,255,0.07)] transition-all duration-200 hover:border-[rgba(16,185,129,0.5)] hover:bg-[rgba(16,185,129,0.08)]"
            >
              <Download className="w-4 h-4" />
              Ver Currículo em PDF
            </a>
          </div>

          <div className="flex gap-3.5 items-center">
            {[
              { icon: Github, href: "https://github.com/luizfeer", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/luiz-almeida-front", label: "LinkedIn" },
              { icon: Instagram, href: "https://instagram.com/luizalmeida.dev", label: "Instagram" },
              { icon: Mail, href: "mailto:contato@luizalmeida.dev", label: "E-mail" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : "_self"}
                rel={social.href.startsWith('http') ? "noopener" : ""}
                title={social.label}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#16161f] border border-[rgba(255,255,255,0.07)] text-[#94a3b8] hover:text-[#34d399] hover:border-[rgba(16,185,129,0.5)] hover:bg-[rgba(16,185,129,0.1)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <social.icon className="w-[18px] h-[18px]" strokeWidth={2} />
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
