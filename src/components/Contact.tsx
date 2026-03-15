import FadeUp from "./FadeUp";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="px-[5%] py-[100px] bg-[#0d0d14] text-center">
      <div className="max-w-[560px] mx-auto">
        <FadeUp>
          <span className="inline-block text-[0.75rem] font-semibold tracking-[1.5px] uppercase text-[#34d399] mb-3">
            // contato
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight mb-4 leading-[1.15]">
            Vamos conversar?
          </h2>
          <p className="text-[#94a3b8] text-[1rem] max-w-[420px] mx-auto leading-relaxed">
            Estou aberto a oportunidades PJ/CLT em empresas que valorizam qualidade de código, design e experiência do usuário. Me chama!
          </p>

          <a
            href="mailto:contato@luizalmeida.dev"
            className="inline-flex items-center gap-2.5 text-[#e2e8f0] text-[1.1rem] font-semibold no-underline bg-[#16161f] border border-[rgba(255,255,255,0.07)] px-7 py-3.5 rounded-xl my-10 transition-all duration-300 hover:border-[rgba(16,185,129,0.5)] hover:bg-[rgba(16,185,129,0.08)] hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5 text-[#34d399]" />
            contato@luizalmeida.dev
          </a>

          <div className="flex justify-center flex-wrap gap-4">
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
                className="inline-flex items-center gap-2 text-[#94a3b8] text-[0.875rem] font-medium bg-[#16161f] border border-[rgba(255,255,255,0.07)] px-5 py-2.5 rounded-lg transition-all duration-200 hover:text-[#34d399] hover:border-[rgba(16,185,129,0.4)] hover:bg-[rgba(16,185,129,0.08)]"
              >
                <social.icon className="w-4 h-4" />
                {social.label}
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
