import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Users, ArrowRight } from "lucide-react";
import ruth from "@assets/Ruth_Abuerbach_1778287286088.png";
import antony from "@assets/Antony_Yacoub_1778287286094.png";
import fernando from "@assets/Fernando_Chiu_1778287286096.png";
import adam from "@assets/Adam_Sullivan_1778287286098.png";

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
      {/* Abstract gradient blob */}
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
                data-testid="button-hero-primary"
                onClick={() => scrollTo("contacto")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all hover:-translate-y-1 h-14 px-8 text-base"
              >
                Agenda una llamada gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                data-testid="button-hero-secondary"
                onClick={() => scrollTo("metodologia")}
                className="font-semibold transition-all hover:-translate-y-1 h-14 px-8 text-base group border-border"
              >
                Ver casos de éxito
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust row: avatars + company names */}
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
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-white border border-border/20"
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

          {/* Right Column: Dashboard Mockup + Photo Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-[580px]"
          >
            {/* Floating metric pills */}
            <motion.div
              className="absolute -top-6 -left-4 bg-white p-3.5 rounded-xl shadow-xl border border-border/50 z-20 flex items-center gap-3"
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
              className="absolute top-1/2 -right-6 bg-white p-3.5 rounded-xl shadow-xl border border-border/50 z-20 flex items-center gap-3"
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

            <motion.div
              className="absolute -bottom-4 left-8 bg-white p-3.5 rounded-xl shadow-xl border border-border/50 z-20 flex items-center gap-3"
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

            {/* Main dashboard card */}
            <div className="bg-[#171c2d] rounded-2xl p-6 shadow-2xl relative z-10 overflow-hidden border border-white/10 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              {/* Dashboard header */}
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-white/50 text-xs font-mono">partners-dashboard.app</div>
              </div>

              {/* Photo grid row */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {teamPhotos.map((photo, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                    className="relative aspect-square rounded-xl overflow-hidden ring-1 ring-white/10"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </motion.div>
                ))}
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span className="text-xs font-medium text-white/60">Conversión de Leads</span>
                    <span className="text-xs font-bold text-green-400">+24.5%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span className="text-xs font-medium text-white/60">Costo por Adquisición</span>
                    <span className="text-xs font-bold text-green-400">-12.3%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "45%" }}
                      transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>

                {/* Bar chart */}
                <div className="h-24 mt-4 relative flex items-end justify-between gap-1.5 border-l border-b border-white/10 pl-2">
                  {[35, 55, 42, 68, 60, 82, 95].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: "0%" }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: 0.9 + i * 0.08, ease: "easeOut" }}
                      className="w-full rounded-t-sm bg-white/15 hover:bg-primary/70 transition-colors cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
