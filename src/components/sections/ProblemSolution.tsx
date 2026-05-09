import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    "Tu equipo interno no tiene tiempo para ejecutar marketing",
    "Gastas en publicidad sin saber qué funciona",
    "No tienes visibilidad de tus métricas ni tu ROI",
    "Tu competencia crece más rápido que tú"
  ];

  const solutions = [
    "Estrategia y ejecución completa a cargo de Partners",
    "Dashboards en tiempo real para cada peso invertido",
    "Reportes de KPIs orientados a retorno de inversión",
    "Framework probado que acelera el crecimiento"
  ];

  return (
    <section id="problema" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">El marketing B2B no debería ser una apuesta a ciegas</h2>
          <p className="text-lg text-muted-foreground">Reemplazamos el estrés y la incertidumbre por sistemas predecibles de adquisición de clientes.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 relative">
          {/* Animated Stats in center (desktop only) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col gap-6 z-10 bg-white p-6 rounded-2xl shadow-xl border border-border">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">127%</p>
              <p className="text-xs text-muted-foreground uppercase font-semibold">Más Leads</p>
            </div>
            <div className="w-full h-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">4.2x</p>
              <p className="text-xs text-muted-foreground uppercase font-semibold">ROI Promedio</p>
            </div>
            <div className="w-full h-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">98%</p>
              <p className="text-xs text-muted-foreground uppercase font-semibold">Retención</p>
            </div>
          </div>

          {/* Left Column: Problems */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-red-50/50 p-8 md:p-10 rounded-3xl border border-red-100"
          >
            <h3 className="text-2xl font-bold text-red-950 mb-8">El problema actual</h3>
            <ul className="space-y-6">
              {problems.map((prob, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <XCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-red-900/80 font-medium">{prob}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Solutions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50/50 p-8 md:p-10 rounded-3xl border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-blue-950 mb-8">La solución Partners</h3>
            <ul className="space-y-6">
              {solutions.map((sol, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg text-blue-900/80 font-medium">{sol}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
