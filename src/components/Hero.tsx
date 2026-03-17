import FadeUp from "./FadeUp";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const MONO = { fontFamily: "var(--ff-mono), monospace" };
const DISPLAY = { fontFamily: "var(--ff-display), Georgia, serif" };
const BODY = { fontFamily: "var(--ff-body), Georgia, serif" };

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-[5%] pt-[100px] pb-[60px] relative overflow-hidden"
    >
      {/* Background warm glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(196,82,42,0.07) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-[10%] left-[-8%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(196,144,58,0.05) 0%, transparent 65%)" }}
        />
      </div>

      {/* Decorative horizontal rule */}
      <div className="absolute top-16 left-[5%] right-[5%] h-[1px] bg-[rgba(237,229,208,0.06)]" />
      <div
        className="absolute top-[4.6rem] right-[5%] text-[0.62rem] tracking-[3px] text-[#52473E]"
        style={MONO}
      >
        01 / INTRO
      </div>

      <div className="relative w-full mt-8 lg:mt-0">
        {/* Available badge */}
        <FadeUp>
          <div className="flex items-center gap-3 mb-10">
            <span
              className="w-[6px] h-[6px] rounded-full bg-[#C4522A] animate-pulse-warm"
              style={{ display: "inline-block" }}
            />
            <span className="text-[0.65rem] tracking-[2.5px] uppercase text-[#52473E]" style={MONO}>
              disponível para novas oportunidades
            </span>
          </div>
        </FadeUp>

        {/* Main heading block */}
        <FadeUp delay={0.1}>
          <p
            className="text-[0.85rem] tracking-[1.5px] lowercase text-[#52473E] mb-2"
            style={MONO}
          >
            oi, sou
          </p>
          <h1
            className="text-[clamp(4.5rem,14vw,12rem)] font-black italic leading-[0.88] tracking-tight text-[#EDE5D0]"
            style={DISPLAY}
          >
            Luiz
          </h1>
          <div className="flex flex-wrap items-baseline gap-4 mt-1">
            <span
              className="text-[clamp(2rem,6vw,5.5rem)] font-bold leading-none tracking-tight text-[#EDE5D0]"
              style={DISPLAY}
            >
              Almeida
            </span>
            <span className="hidden sm:block h-[1px] w-16 bg-[rgba(237,229,208,0.18)] self-center" />
            <span
              className="text-[0.7rem] tracking-[2.5px] uppercase text-[#C4522A] self-center"
              style={MONO}
            >
              Frontend Engineer
            </span>
          </div>
        </FadeUp>

        {/* Tagline */}
        <FadeUp delay={0.2}>
          <p
            className="text-[clamp(0.95rem,1.8vw,1.15rem)] text-[#8A7E72] mt-9 max-w-[480px] leading-relaxed italic"
            style={BODY}
          >
            Construo interfaces modernas e intuitivas com Vue, React e TypeScript — com foco em UX, performance e código limpo.
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.3}>
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projetos"
              style={MONO}
              className="inline-flex items-center gap-2 bg-[#C4522A] text-[#EDE5D0] px-7 py-3.5 text-[0.7rem] tracking-[2.5px] uppercase font-bold transition-all duration-200 hover:bg-[#A8401E] hover:-translate-y-0.5"
            >
              Ver Projetos
            </a>
            <a
              href="#"
              style={MONO}
              className="inline-flex items-center gap-2 text-[#8A7E72] px-7 py-3.5 text-[0.7rem] tracking-[2.5px] uppercase border border-[rgba(237,229,208,0.12)] transition-all duration-200 hover:border-[rgba(196,82,42,0.45)] hover:text-[#EDE5D0]"
            >
              Currículo PDF
            </a>
          </div>
        </FadeUp>

        {/* Social icons */}
        <FadeUp delay={0.4}>
          <div className="flex items-center gap-3 mt-10">
            <span className="w-10 h-[1px] bg-[rgba(237,229,208,0.12)]" />
            {[
              { icon: Github, href: "https://github.com/luizfeer", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/luiz-almeida-front", label: "LinkedIn" },
              { icon: Instagram, href: "https://instagram.com/luizalmeida.dev", label: "Instagram" },
              { icon: Mail, href: "mailto:contato@luizalmeida.dev", label: "E-mail" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : "_self"}
                rel={social.href.startsWith("http") ? "noopener" : ""}
                title={social.label}
                className="flex items-center justify-center w-10 h-10 border border-[rgba(237,229,208,0.1)] text-[#52473E] hover:text-[#C4522A] hover:border-[rgba(196,82,42,0.4)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <social.icon className="w-[17px] h-[17px]" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-[5%] flex items-center gap-3">
        <span className="w-5 h-[1px] bg-[rgba(237,229,208,0.15)]" />
        <span className="text-[0.6rem] tracking-[2px] text-[#52473E]" style={MONO}>scroll</span>
      </div>
    </section>
  );
}
