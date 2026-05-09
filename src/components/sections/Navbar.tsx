import { useState, useEffect } from "react";
import { Link } from "wouter";
import partnersLogo from "@assets/partners-logo.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <img src={partnersLogo} alt="Partners Logo" className="h-10 cursor-pointer" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollTo("servicios")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Servicios</button>
          <button onClick={() => scrollTo("metodologia")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Metodología</button>
          <button onClick={() => scrollTo("precios")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Precios</button>
          <button onClick={() => scrollTo("testimonios")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Testimonios</button>
        </div>

        <div className="flex items-center">
          <Button onClick={() => scrollTo("contacto")} className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            Agendar llamada
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
