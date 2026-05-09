import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tiempo tarda en verse resultados?",
    a: "Desde el primer mes comenzamos a generar métricas positivas y tráfico. Resultados significativos en leads y conversión se ven entre los 60 y 90 días de trabajo constante.",
  },
  {
    q: "¿Trabajan con empresas de cualquier tamaño?",
    a: "Sí. Tenemos planes adaptados desde startups en crecimiento hasta corporaciones establecidas. Cada estrategia se diseña según el contexto y objetivos específicos de tu empresa.",
  },
  {
    q: "¿Puedo pausar o cancelar mi plan?",
    a: "Sí. Puedes pausar o cancelar en cualquier momento sin penalidades ni contratos forzosos. Creemos en relaciones a largo plazo basadas en resultados, no en contratos.",
  },
  {
    q: "¿Qué diferencia a Partners de otras agencias?",
    a: "Nuestra metodología P.A.R.T.N.E.R.S es un framework exclusivo diseñado 100% para el ciclo de venta B2B. No somos una agencia de contenidos; somos un socio estratégico de crecimiento con foco en ROI.",
  },
  {
    q: "¿Incluyen reportes de resultados?",
    a: "Sí. Todos los planes incluyen reportes mensuales con KPIs claros, y los planes Growth y Scale cuentan con acceso a un dashboard en tiempo real para que veas tu desempeño cuando quieras.",
  },
  {
    q: "¿Pueden integrarse con nuestro CRM?",
    a: "Absolutamente. Nos integramos con HubSpot, Salesforce, Pipedrive, Monday.com y otras plataformas CRM líderes para garantizar una sincronización perfecta de leads y datos.",
  },
  {
    q: "¿Manejan publicidad pagada?",
    a: "El plan Scale incluye gestión completa de pauta publicitaria en Meta, LinkedIn y Google. Los planes Essential y Growth se enfocan en estrategia orgánica y de contenidos.",
  },
  {
    q: "¿Trabajan solo con redes sociales o también con sitios web?",
    a: "Trabajamos en todo el ecosistema digital: redes sociales, LinkedIn, email marketing, SEO y landing pages. El enfoque depende del plan y de los objetivos comerciales de tu empresa.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitas saber antes de dar el primer paso.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl border border-border/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                data-testid={`faq-toggle-${i}`}
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left gap-4 group"
              >
                <span className="font-semibold text-foreground text-sm md:text-base group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === i ? "bg-primary text-white" : "bg-background border border-border"
                }`}>
                  {openIndex === i
                    ? <Minus className="w-4 h-4" />
                    : <Plus className="w-4 h-4" />
                  }
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
