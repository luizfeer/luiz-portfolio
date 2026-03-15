export default function Footer() {
  return (
    <footer className="text-center px-[5%] py-8 text-[0.825rem] text-[#475569] border-t border-[rgba(255,255,255,0.07)] bg-[#050508]">
      <p>
        Desenvolvido por <span className="font-semibold text-gradient">Luiz Almeida</span> · Carmo do Rio Claro, MG · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
