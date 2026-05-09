import { Link } from "wouter";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white font-bold text-xl">Partners</div>
          <nav className="flex gap-8">
            <Link href="/politica-de-privacidad">
              <a className="text-white/60 hover:text-primary transition-colors text-sm">Privacidad</a>
            </Link>
            <Link href="/terminos-de-servicio">
              <a className="text-white/60 hover:text-primary transition-colors text-sm">Términos</a>
            </Link>
          </nav>
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} Partners. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
