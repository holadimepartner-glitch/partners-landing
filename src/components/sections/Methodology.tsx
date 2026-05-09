import { motion } from "framer-motion";

export default function Methodology() {
  const steps = [
    { letter: "P", title: "Posicionamiento estratégico" },
    { letter: "A", title: "Atracción de leads calificados" },
    { letter: "R", title: "Retención y nurturing" },
    { letter: "T", title: "Tráfico de alta conversión" },
    { letter: "N", title: "Narrativa de marca" },
    { letter: "E", title: "Ecosistema digital" },
    { letter: "R", title: "Reporting y optimización" },
    { letter: "S", title: "Escalabilidad" }
  ];

  return (
    <section id="metodologia" className="py-24 bg-foreground text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra metodología: el Framework P.A.R.T.N.E.R.S</h2>
          <p className="text-lg text-white/70">Un sistema probado paso a paso para construir un motor de crecimiento predecible para empresas B2B.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 relative ${
                  i % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : "text-left"
                }`}
              >
                <div className="md:w-1/2" />
                
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center border-4 border-foreground z-10 shadow-[0_0_20px_rgba(39,154,241,0.5)]">
                  <span className="text-2xl font-bold font-mono">{step.letter}</span>
                </div>

                <div className="pl-20 md:pl-0 md:w-1/2">
                  <div className={`bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors ${
                    i % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 max-w-4xl mx-auto text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-medium text-white/90 leading-relaxed italic border-l-4 border-accent pl-8 text-left md:text-center md:border-l-0 md:border-t-4 md:pt-8 md:pl-0">
            "Nuestros procesos están diseñados específicamente para el ciclo de venta B2B, donde la toma de decisiones requiere una imagen impecable y sistemas que no fallen."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
