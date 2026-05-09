import { motion } from "framer-motion";
import { Check, Minus, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Presencia y Autoridad",
    price: "$350",
    period: "/mes",
    ideal: "Empresas que necesitan validar su marca y mantener presencia profesional constante.",
    features: [
      "Estrategia mensual de posicionamiento de marca",
      "8-10 piezas de diseño gráfico profesional",
      "Identidad visual de alto impacto para confianza corporativa",
      "Gestión de mensajes y comentarios (Lun - Vie)",
      "Automatización básica de bienvenida para leads",
      "Análisis de KPIs de alcance e interacción",
    ],
    cta: "Comenzar ahora",
    highlighted: false,
    glowColor: "rgba(39,154,241,0.08)",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Tracción y Conversión",
    price: "$850",
    period: "/mes",
    ideal: "Empresas que buscan generar leads y construir una comunidad activa.",
    badge: "Más Elegido",
    features: [
      "Estrategia avanzada con embudo de contenidos",
      "Contenido orientado a Awareness, Consideration y Conversion",
      "15-20 piezas (Diseño + Reels + Video corto)",
      "Gestión proactiva de comunidad",
      "Escalado estratégico de leads a ventas",
      "2 automatizaciones inteligentes",
      "Captación de leads por DM + seguimiento automatizado",
      "Dashboard avanzado de métricas y conversión",
      "Análisis de competencia",
      "Optimización SEO para Instagram y LinkedIn",
    ],
    cta: "Elegir Growth",
    highlighted: true,
    glowColor: "rgba(39,154,241,0.25)",
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Ecosistema Digital Pro",
    price: "$2,000",
    period: "/mes",
    ideal: "Empresas que quieren delegar completamente su marketing y escalar operaciones.",
    features: [
      "Consultoría estratégica 360°",
      "Alineación con objetivos comerciales",
      "Producción de contenido premium según necesidad estratégica",
      "Cobertura de eventos o sesiones de contenido",
      "Gestión prioritaria de reputación de marca",
      "Ecosistema completo de CRM y automatización",
      "Nurturing de leads y automatización de ventas",
      "Auditoría profunda de rendimiento",
      "Medición de ROI directo",
      "Reuniones estratégicas 1-a-1",
      "Gestión de pauta publicitaria incluida",
    ],
    cta: "Contactar ventas",
    highlighted: false,
    glowColor: "rgba(234,82,111,0.08)",
  },
];

const comparisonFeatures = [
  { feature: "Estrategia mensual", essential: true, growth: true, scale: true },
  { feature: "Diseño gráfico profesional", essential: true, growth: true, scale: true },
  { feature: "Automatización de leads", essential: "Básica", growth: "Avanzada (x2)", scale: "Ecosistema completo" },
  { feature: "Dashboard de métricas", essential: false, growth: true, scale: true },
  { feature: "Gestión de comunidad", essential: false, growth: true, scale: true },
  { feature: "Captación por DM", essential: false, growth: true, scale: true },
  { feature: "Análisis de competencia", essential: false, growth: true, scale: true },
  { feature: "SEO LinkedIn & Instagram", essential: false, growth: true, scale: true },
  { feature: "Gestión de pauta publicitaria", essential: false, growth: false, scale: true },
  { feature: "Consultoría estratégica 360°", essential: false, growth: false, scale: true },
  { feature: "Reuniones estratégicas 1-a-1", essential: false, growth: false, scale: true },
  { feature: "Medición de ROI directo", essential: false, growth: false, scale: true },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === false) return <Minus className="w-4 h-4 text-muted-foreground/30 mx-auto" />;
  return <span className="text-xs font-semibold text-primary">{value}</span>;
}

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inversión inteligente para crecer
          </h2>
          <p className="text-lg text-muted-foreground">
            Tres planes diseñados para cada etapa de tu crecimiento
          </p>
        </motion.div>

        {/* Trust block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-16 bg-primary/5 border border-primary/15 rounded-2xl p-6 text-center"
        >
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-medium">
            "Nuestros procesos están diseñados específicamente para el ciclo de venta B2B, donde la toma de decisiones requiere una imagen impecable y sistemas que no fallen."
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{
                y: plan.highlighted ? -6 : -4,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className={`relative rounded-2xl border flex flex-col cursor-default group ${
                plan.highlighted
                  ? "bg-foreground border-transparent shadow-2xl scale-[1.04]"
                  : "bg-white border-border shadow-sm hover:border-primary/30 hover:shadow-lg"
              }`}
              style={
                plan.highlighted
                  ? { boxShadow: `0 20px 60px -10px ${plan.glowColor}, 0 4px 24px -4px rgba(0,0,0,0.2)` }
                  : undefined
              }
            >
              {/* Glow effect on hover for non-highlighted */}
              {!plan.highlighted && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `0 0 30px 0px ${plan.glowColor}` }}
                />
              )}

              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="flex items-center gap-1.5 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold py-2 px-4 rounded-full shadow-lg shadow-primary/30">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                    <Sparkles className="w-3 h-3" />
                  </span>
                </div>
              )}

              <div className={`p-7 pb-5 border-b ${plan.highlighted ? "border-white/10" : "border-border/50"}`}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-primary">
                  {plan.name}
                </p>
                <h3 className={`text-xl font-bold mb-4 ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                  {plan.tagline}
                </h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className={`text-4xl font-extrabold tracking-tight ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.highlighted ? "text-white/50" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-white/65" : "text-muted-foreground"}`}>
                  {plan.ideal}
                </p>
              </div>

              <div className="p-7 pt-5 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, fi) => (
                    <motion.li
                      key={fi}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: fi * 0.04 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
                        plan.highlighted ? "bg-primary/25" : "bg-primary/10"
                      }`}>
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className={`text-sm leading-relaxed ${plan.highlighted ? "text-white/75" : "text-muted-foreground"}`}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8"
                >
                  <Button
                    data-testid={`button-cta-${plan.id}`}
                    className={`w-full h-12 font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-primary text-white shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 hover:bg-primary/90"
                        : "bg-foreground text-white hover:bg-foreground/90 hover:shadow-md"
                    }`}
                    style={
                      plan.highlighted
                        ? { boxShadow: "0 4px 20px -4px rgba(39,154,241,0.5)" }
                        : undefined
                    }
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-border bg-background/60">
            <h3 className="text-lg font-bold text-foreground">Comparativa completa de planes</h3>
            <p className="text-sm text-muted-foreground mt-1">Todo lo que incluye cada plan, sin letra pequeña.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground w-1/2">Funcionalidad</th>
                  <th className="text-center p-4 text-sm font-semibold text-foreground">Essential</th>
                  <th className="text-center p-4 text-sm font-bold text-primary bg-primary/5">Growth</th>
                  <th className="text-center p-4 text-sm font-semibold text-foreground">Scale</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className={`border-b border-border/40 hover:bg-primary/5 transition-colors ${
                      i % 2 === 0 ? "" : "bg-background/40"
                    }`}
                  >
                    <td className="p-4 text-sm text-foreground font-medium">{row.feature}</td>
                    <td className="p-4 text-center"><FeatureValue value={row.essential} /></td>
                    <td className="p-4 text-center bg-primary/5"><FeatureValue value={row.growth} /></td>
                    <td className="p-4 text-center"><FeatureValue value={row.scale} /></td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
