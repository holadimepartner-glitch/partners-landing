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

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
      {/* Abstract gradient blobs */}
      <div className="absolute top-1/3 right-0 w-[700px] h-[700px] opacity-25 blur-[120px] pointer-events-none rounded-full bg-gradient-to-tr from-primary/50 to-accent/40" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-15 blur-[100px] pointer-events-none rounded-full bg-primary/30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <Badge
              variant="outline"
              className="mb-6 px-3 py-1 rounded-full border-primary/20 bg-primary/5 text-primary text-sm font-medium"
            >
              Agencia de Marketing B2B #1
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] mb-6 tracking-tight">
              Convierte tu marketing en tu motor de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                crecimiento más potente
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-[560px] leading-relaxed">
              Generamos leads calificados, automatizamos procesos y escalamos tu negocio con estrategias que generan resultados medibles desde el primer mes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <Button
                size="lg"
                onClick={() => scrollTo("contacto")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all hover:-translate-y-1 h-14 px-8 text-base"
              >
                Agenda una llamada gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("metodologia")}
                className="font-semibold transition-all hover:-translate-y-1 h-14 px-8 text-base group border-border"
              >
                Ver casos de éxito
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust row */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {teamPhotos.map((photo, i) => (
                    <motion.img
                      key={i}
                      src={photo.src}
                      alt={photo.alt}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-background border border-border/20"
                      style={{ objectPosition: "top" }}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">+50 empresas B2B confían en nosotros</p>
                  <p className="text-xs text-muted-foreground">en 8 países de Latinoamérica</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: VSL Video Player + Floating Pills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-[600px]"
          >
            {/* Floating metric pills */}
            <motion.div
              className="absolute -top-6 -left-4 bg-background p-3.5 rounded-xl shadow-xl border border-border/50 z-20 flex items-center gap-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">ROI Promedio</p>
                <p className="text-lg font-bold text-foreground">4.2x</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-6 bg-background p-3.5 rounded-xl shadow-xl border border-border/50 z-20 flex items-center gap-3"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="bg-blue-100 p-2 rounded-lg text-primary">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Nuevos Leads</p>
                <p className="text-lg font-bold text-foreground">+127%</p>
              </div>
            </motion.div>

            {/* Video Container (Autoplay Loop + Controls) */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-video group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none z-20" />
              
              <iframe 
                src="https://player.vimeo.com/video/1191752584?background=1&autoplay=1&loop=1&muted=1&controls=1&title=0&byline=0&portrait=0" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                className="absolute top-0 left-0 w-full h-full z-10 scale-[1.01]"
                title="DimePartner VSL"
              ></iframe>

              {/* Hover Badge Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                <Badge className="bg-primary/90 backdrop-blur-md border-none text-white px-4 py-1.5 shadow-lg">
                  Click para activar sonido 🔊
                </Badge>
              </div>
            </div>

            {/* Bottom floating pill */}
            <motion.div
              className="absolute -bottom-4 left-8 bg-background p-3.5 rounded-xl shadow-xl border border-border/50 z-20 flex items-center gap-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="bg-pink-100 p-2 rounded-lg text-accent">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Retención</p>
                <p className="text-lg font-bold text-foreground">98%</p>
              </div>
            </motion.div>

            {/* Glow effect behind video */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full -z-10 animate-pulse" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
