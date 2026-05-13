import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Users, ArrowRight } from "lucide-react";
import ruth from "@assets/ruth-auerbach.png";
import antony from "@assets/antony-yacoub.png";
import fernando from "@assets/fernando-chiu.png";
import adam from "@assets/adam-sullivan.png";

const teamPhotos = [
  { src: ruth, alt: "Ejecutiva de marketing" },
  { src: antony, alt: "Director de estrategia" },
  { src: fernando, alt: "Consultor B2B" },
  { src: adam, alt: "CEO empresa cliente" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Componente de botones para no repetir código
  const CTAButtons = ({ className }: { className?: string }) => (
    <div className={className}>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <Button
          size="lg"
          onClick={() => scrollTo("contacto")}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 h-14 px-8 text-base w-full sm:w-auto"
        >
          Agenda una llamada gratuita
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => scrollTo("metodologia")}
          className="font-semibold transition-all hover:-translate-y-1 h-14 px-8 text-base group w-full sm:w-auto"
        >
          Ver casos de éxito
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      <div className="flex items-center gap-3 mt-6 justify-center lg:justify-start">
        <div className="flex -space-x-3">
          {teamPhotos.map((photo, i) => (
            <img key={i} src={photo.src} alt={photo.alt} className="w-10 h-10 rounded-full object-cover ring-2 ring-background border border-border/20" style={{ objectPosition: "top" }} />
          ))}
        </div>
        <p className="text-sm font-semibold text-foreground">+50 empresas confían</p>
      </div>
    </div>
  );

  return (
    <section className="relative pt-24 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
      {/* Background Blobs */}
      <div className="absolute top-1/3 right-0 w-[700px] h-[700px] opacity-25 blur-[120px] pointer-events-none rounded-full bg-gradient-to-tr from-primary/50 to-accent/40" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-15 blur-[100px] pointer-events-none rounded-full bg-primary/30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start"
          >
            <Badge variant="outline" className="mb-6 px-3 py-1 rounded-full border-primary/20 bg-primary/5 text-primary text-sm font-medium">
              Agencia de Marketing B2B #1
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] mb-6 tracking-tight text-left">
              Convierte tu marketing en tu motor de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                crecimiento más potente
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-[560px] leading-relaxed text-left">
              Generamos leads calificados, automatizamos procesos y escalamos tu negocio con estrategias medibles.
            </p>

            {/* CTA para Web (Oculto en móvil) */}
            <CTAButtons className="hidden lg:block w-full" />
          </motion.div>

          {/* COLUMNA DERECHA: VIDEO Y PILLS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[600px] flex flex-col gap-6 lg:ml-auto"
          >
            {/* Video Container */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-200/20 shadow-2xl bg-black aspect-video group cursor-pointer">
              <iframe 
                src="https://player.vimeo.com/video/1191752584?background=1&autoplay=1&loop=1&muted=1&controls=1" 
                className="absolute top-0 left-0 w-full h-full z-10 scale-[1.01]"
                allow="autoplay; fullscreen"
              />
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                <Badge className="bg-primary/90 backdrop-blur-md text-white px-4 py-1.5">Activar sonido 🔊</Badge>
              </div>
            </div>

            {/* Pills Container */}
            <div className="flex flex-wrap lg:contents gap-3 justify-center lg:justify-start">
              <motion.div 
                className="static lg:absolute lg:-top-6 lg:-left-4 bg-background p-3 rounded-xl shadow-md border border-border/50 z-20 flex items-center gap-3 min-w-[130px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm lg:text-lg font-bold">4.2x ROI</span>
              </motion.div>

              <motion.div 
                className="static lg:absolute lg:-bottom-2 lg:-right-6 bg-background p-3 rounded-xl shadow-md border border-border/50 z-20 flex items-center gap-3 min-w-[130px]"
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm lg:text-lg font-bold">+127% Leads</span>
              </motion.div>

              <motion.div 
                className="static lg:absolute lg:-bottom-10 lg:-left-2 bg-background p-3 rounded-xl shadow-md border border-border/50 z-20 flex items-center gap-3 min-w-[130px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <BarChart3 className="w-4 h-4 text-accent" />
                <span className="text-sm lg:text-lg font-bold">98% Retención</span>
              </motion.div>
            </div>

            {/* CTA para Móvil (Oculto en escritorio) */}
            <CTAButtons className="block lg:hidden w-full mt-4" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
