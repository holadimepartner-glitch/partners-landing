import partnersLogoFull from "../../assets/partners-logo-footer.png";
import * as Icons from "lucide-react";

const navLinks = [
  { label: "Servicios", id: "servicios" },
  { label: "Metodología", id: "metodologia" },
  { label: "Precios", id: "precios" },
  { label: "Testimonios", id: "testimonios" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground border-t border-white/10 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <img
              src={partnersLogoFull}
              alt="Partners"
              className="h-10 object-contain object-left"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Tu agencia de marketing B2B de confianza. Crecimiento medible, automatización inteligente y escalabilidad para empresas serias.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-200"
              >
                {/* Cambiado a Info para asegurar que renderice */}
                <Icons.Info className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-all duration-200"
              >
                {/* Cambiado a Camera para asegurar que renderice */}
                <Icons.Camera className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/90 font-semibold mb-4 text-sm uppercase tracking-widest">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/90 font-semibold mb-4 text-sm uppercase tracking-widest">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+584120909240" className="text-white/60 hover:text-white transition-colors text-sm">
                  +58 412 090 9240
                </a>
              </li>
              <li className="text-white/60 text-sm">
                Respuesta garantizada en 24 hrs
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white/90 font-semibold mb-4 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Términos de servicio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Partners. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white/40 text-xs">Disponible para nuevos proyectos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
