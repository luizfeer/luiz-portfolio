"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Stack", href: "#skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      document.querySelectorAll("section[id]").forEach((section) => {
        if (window.scrollY >= (section as HTMLElement).offsetTop - 140) current = section.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b-2 border-black bg-[#f3f0e8]/95 backdrop-blur-md">
      <div className="site-shell flex h-[72px] items-center justify-between">
        <a href="#hero" className="text-lg font-extrabold tracking-[-0.06em]">
          LUIZ<span className="text-[#3155ff]">/</span>ALMEIDA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={`text-sm font-bold transition-colors hover:text-[#3155ff] ${active === link.href.slice(1) ? "text-[#3155ff]" : "text-black"}`}>
              {link.label}
            </a>
          ))}
          <a href="#contato" className="rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
            Vamos conversar
          </a>
        </div>

        <button type="button" className="grid size-10 place-items-center rounded-full border-2 border-black md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-black bg-[#f3f0e8] px-5 py-5 md:hidden">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-black/15 py-3 text-lg font-bold">{link.label}</a>)}
          <a href="#contato" onClick={() => setOpen(false)} className="mt-5 block rounded-full bg-[#3155ff] px-5 py-3 text-center font-bold text-white">Vamos conversar</a>
        </div>
      )}
    </nav>
  );
}
