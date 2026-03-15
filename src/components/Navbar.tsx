"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        const top = (s as HTMLElement).offsetTop;
        if (window.scrollY >= top - 100) {
          current = s.id;
        }
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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-16 bg-[#050508]/85 backdrop-blur-md border-b border-[rgba(255,255,255,0.07)] transition-all duration-300">
      <span className="text-[1.1rem] font-bold text-gradient tracking-tight">
        luiz.dev
      </span>
      
      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 list-none items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={cn(
                "relative text-[0.875rem] font-medium transition-colors duration-200",
                activeSection === link.href.substring(1)
                  ? "text-[#34d399]"
                  : "text-[#94a3b8] hover:text-[#e2e8f0]"
              )}
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-primary transition-all duration-300 rounded-[2px] hover-nav-underline"></span>
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contato"
            className="bg-gradient-primary text-white px-5 py-2 rounded-lg text-[0.8rem] font-semibold tracking-wide hover:opacity-90 hover:-translate-y-[1px] transition-all duration-200"
          >
            Contato
          </a>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span className={cn("inline-block w-[22px] h-[2px] bg-[#e2e8f0] rounded-[2px] transition-all duration-300", isOpen && "translate-y-[7px] rotate-45")} />
        <span className={cn("inline-block w-[22px] h-[2px] bg-[#e2e8f0] rounded-[2px] transition-all duration-300", isOpen && "opacity-0")} />
        <span className={cn("inline-block w-[22px] h-[2px] bg-[#e2e8f0] rounded-[2px] transition-all duration-300", isOpen && "-translate-y-[7px] -rotate-45")} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden fixed top-16 left-0 right-0 bg-[#050508]/95 backdrop-blur-xl px-[5%] pt-5 pb-7 border-b border-[rgba(255,255,255,0.07)] flex flex-col list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block py-3 text-[1rem] text-[#94a3b8] border-b border-[rgba(255,255,255,0.07)]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contato"
              className="inline-block bg-gradient-primary text-white px-5 py-3 rounded-lg text-[0.9rem] font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
