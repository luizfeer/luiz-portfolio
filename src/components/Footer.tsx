export default function Footer() {
  return (
    <footer className="border-t-2 border-black bg-[#ff5c35] py-7">
      <div className="site-shell flex flex-col gap-2 text-xs font-bold uppercase tracking-[.11em] sm:flex-row sm:justify-between">
        <span>Luiz Almeida © {new Date().getFullYear()}</span>
        <span>Carmo do Rio Claro — MG</span>
      </div>
    </footer>
  );
}
