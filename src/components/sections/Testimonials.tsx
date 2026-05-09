import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import valentinPhoto from "@assets/lucia-faria.png";
import danielPhoto from "@assets/luca-osarewa.png";

const testimonials = [
  {
    name: "Lucía Faria",
    role: "Directora Comercial",
    company: "TechCorp Latam",
    photo: valentinPhoto,
    quote:
      "En 3 meses Partners triplicó nuestros leads calificados. El ROI superó el 400% en el primer trimestre. Nunca pensé que el marketing digital podría tener un impacto tan medible y rápido en nuestros resultados comerciales.",
    metric: "+400% ROI",
    metricColor: "bg-primary/10 text-primary",
  },
  {
    name: "Luca Osarewa",
    role: "CEO & Founder",
    company: "Innova Group",
    photo: danielPhoto,
    quote:
      "Pasamos de 50 a 300 leads mensuales en menos de 6 meses. La metodología P.A.R.T.N.E.R.S es la más efectiva que hemos probado. El equipo es altamente profesional y cada decisión está orientada a resultados reales.",
    metric: "50 → 300 leads/mes",
    metricColor: "bg-accent/10 text-accent",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-lg text-muted-foreground">
            Empresas que transformaron su crecimiento con la metodología Partners.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="relative bg-background rounded-2xl border border-border/60 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed mb-8 text-base italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-border"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap ${t.metricColor}`}>
                  {t.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
