import { motion } from "framer-motion";
import { LayoutDashboard, Cog, PieChart, MousePointerClick, MessageSquareText, Megaphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Dashboards en tiempo real",
      description: "Toma decisiones basadas en datos, no en suposiciones. Monitorea cada KPI importante en un solo lugar."
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Automatización de procesos",
      description: "Genera leads en piloto automático mientras tu equipo comercial se enfoca en cerrar ventas."
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Reporting inteligente",
      description: "Análisis de KPIs orientado a retorno de inversión. Sabrás exactamente qué funciona y qué no."
    },
    {
      icon: <MousePointerClick className="w-6 h-6" />,
      title: "Optimización de conversión",
      description: "Transforma visitantes en clientes con embudos estratégicos diseñados para el ciclo de venta B2B."
    },
    {
      icon: <MessageSquareText className="w-6 h-6" />,
      title: "Gestión de comunidad",
      description: "Construye relaciones duraderas con tu audiencia B2B y posiciona tu marca como autoridad."
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Pauta publicitaria",
      description: "Maximiza cada dólar invertido con campañas de alto rendimiento hiper-segmentadas."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Todo lo que necesitas para escalar</h2>
          <p className="text-lg text-muted-foreground">Un ecosistema digital completo diseñado exclusivamente para acelerar el crecimiento B2B.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feat, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="h-full border-border/50 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-background">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feat.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
