"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const MONO = { fontFamily: "var(--ff-mono), monospace" };
const DISPLAY = { fontFamily: "var(--ff-display), Georgia, serif" };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        const top = (s as HTMLElement).offsetTop;
        if (window.scrollY >= top - 100) current = s.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projetos" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#080605]/92 backdrop-blur-md border-b border-[rgba(237,229,208,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between px-[5%] h-16">
        {/* Brand mark */}
        <a
          href="#"
          className="text-[1.5rem] font-black italic tracking-tight text-[#EDE5D0] hover:text-[#C4522A] transition-colors duration-300"
          style={DISPLAY}
        >
          L<span className="text-[#C4522A]">·</span>A
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={MONO}
                className={cn(
                  "text-[0.68rem] tracking-[2.5px] uppercase transition-colors duration-200",
                  activeSection === link.href.substring(1)
                    ? "text-[#C4522A]"
                    : "text-[#52473E] hover:text-[#8A7E72]"
                )}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              style={MONO}
              className="text-[0.68rem] tracking-[2.5px] uppercase px-5 py-2 border border-[#C4522A] text-[#C4522A] hover:bg-[#C4522A] hover:text-[#080605] transition-all duration-200"
            >
              Contato
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span className={cn("block w-5 h-[1px] bg-[#EDE5D0] transition-all duration-300", isOpen && "translate-y-[6px] rotate-45")} />
          <span className={cn("block w-5 h-[1px] bg-[#EDE5D0] transition-all duration-300", isOpen && "opacity-0")} />
          <span className={cn("block w-5 h-[1px] bg-[#EDE5D0] transition-all duration-300", isOpen && "-translate-y-[6px] -rotate-45")} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#080605]/97 backdrop-blur-xl px-[5%] pt-6 pb-8 border-b border-[rgba(237,229,208,0.06)]">
          <ul className="flex flex-col gap-5 list-none mb-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={MONO}
                  className="block text-[0.75rem] tracking-[2.5px] uppercase text-[#52473E] hover:text-[#EDE5D0] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            style={MONO}
            className="inline-block text-[0.75rem] tracking-[2.5px] uppercase border border-[#C4522A] text-[#C4522A] px-6 py-3 hover:bg-[#C4522A] hover:text-[#080605] transition-all"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  );
}
