import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import FadeUp from "./FadeUp";

export default function Contact() {
  return (
    <section id="contato" className="section-pad bg-[#ff5c35]">
      <div className="site-shell">
        <FadeUp>
          <span className="eyebrow !text-black">Contato</span>
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="section-title max-w-4xl">Tem um problema interessante? Quero ouvir.</h2>
              <a href="mailto:contato@luizalmeida.dev" className="mt-9 inline-flex items-center gap-3 border-b-2 border-black pb-2 text-lg font-extrabold md:text-2xl">
                contato@luizalmeida.dev <ArrowUpRight />
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/luiz-almeida-front" },
                { icon: Github, label: "GitHub", href: "https://github.com/luizfeer" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/luizalmeida.dev" },
                { icon: Mail, label: "E-mail", href: "mailto:contato@luizalmeida.dev" },
              ].map((social) => (
                <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={social.label} className="grid size-13 place-items-center rounded-full border-2 border-black bg-[#f3f0e8] transition-transform hover:-translate-y-1">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
