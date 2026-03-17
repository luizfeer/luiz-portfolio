const MONO = { fontFamily: "var(--ff-mono), monospace" };
const DISPLAY = { fontFamily: "var(--ff-display), Georgia, serif" };

export default function Footer() {
  return (
    <footer className="px-[5%] py-8 border-t border-ink/6 bg-bg">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span className="text-[1.1rem] font-bold italic text-ink" style={DISPLAY}>
          L<span className="text-rust">·</span>A
        </span>
        <p className="text-[0.6rem] tracking-[2px] uppercase text-faint" style={MONO}>
          Luiz Almeida · Carmo do Rio Claro, MG · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
