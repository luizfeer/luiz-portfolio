import FadeUp from "./FadeUp";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const MONO = { fontFamily: "var(--ff-mono), monospace" };
const DISPLAY = { fontFamily: "var(--ff-display), Georgia, serif" };
const BODY = { fontFamily: "var(--ff-body), Georgia, serif" };

export default function Contact() {
  return (
    <section id="contato" className="px-[5%] py-[120px] bg-[#0d0a08]">
      <div className="max-w-[640px]">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <span className="text-[0.62rem] tracking-[3px] uppercase text-[#52473E]" style={MONO}>06</span>
            <div className="h-[1px] w-10 bg-[rgba(237,229,208,0.1)]" />
            <span className="text-[0.62rem] tracking-[3px] uppercase text-[#8A7E72]" style={MONO}>contato</span>
          </div>

          <h2
            className="text-[clamp(2.8rem,7vw,6rem)] font-bold italic leading-[1] tracking-tight text-[#EDE5D0]"
            style={DISPLAY}
          >
            Vamos
            <br />
            conversar?
          </h2>

          <p className="text-[#8A7E72] text-[1rem] mt-7 max-w-[420px] leading-relaxed" style={BODY}>
            Estou aberto a oportunidades PJ/CLT em empresas que valorizam qualidade de código, design
            e experiência do usuário.
          </p>

          {/* Email button */}
          <a
            href="mailto:contato@luizalmeida.dev"
            style={MONO}
            className="inline-flex items-center gap-3 border border-[rgba(237,229,208,0.12)] text-[#8A7E72] px-7 py-4 text-[0.7rem] tracking-[2px] uppercase mt-10 transition-all duration-300 hover:border-[rgba(196,82,42,0.5)] hover:text-[#C4522A] hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" strokeWidth={1.5} />
            contato@luizalmeida.dev
          </a>

          {/* Social links */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/luiz-almeida-front" },
              { icon: Github, label: "GitHub", href: "https://github.com/luizfeer" },
              { icon: Instagram, label: "Instagram", href: "https://instagram.com/luizalmeida.dev" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={MONO}
                className="inline-flex items-center gap-2 text-[#52473E] text-[0.65rem] tracking-[1.5px] uppercase border border-[rgba(237,229,208,0.08)] px-5 py-2.5 transition-all duration-200 hover:text-[#C4522A] hover:border-[rgba(196,82,42,0.35)]"
              >
                <social.icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                {social.label}
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
