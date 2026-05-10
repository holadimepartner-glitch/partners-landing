import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Shield, Clock, Lock, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z
    .string()
    .trim()
    .email("Ingresa un email válido")
    .refine((v) => !v.toLowerCase().endsWith("@gmail.com") && !v.toLowerCase().endsWith("@hotmail.com") && !v.toLowerCase().endsWith("@yahoo.com"), {
      message: "Por favor usa tu email corporativo",
    }),
  website: z.string().trim().url("Ingresa una URL válida (ej: https://tuempresa.com)"),
  leadMagnet: z.enum(["casodeestudio", "whitepaper", "auditoria"], {
    required_error: "Selecciona un recurso",
  }),
});

type FormValues = z.infer<typeof schema>;

const leadMagnets = [
  { id: "casodeestudio", label: "Caso de estudio" },
  { id: "whitepaper", label: "Whitepaper estratégico" },
  { id: "auditoria", label: "Auditoría gratuita" },
] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      leadMagnet: "auditoria",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzji2D6qoCyG8Fkdy07BLznhn_z20PnCvEoe3KoAnJDzkKPSyOcgmxViS6RNDuUy99t1w/exec", {
        method: "POST",
  body: JSON.stringify({
    name: values.name,
    email: values.email,
    website: values.website,
    message: values.leadMagnet
  }
        // Enviamos los campos con nombres simples para evitar errores de validación en Formspree
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          website: values.website,
          message: `Recurso solicitado: ${values.leadMagnet}`
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data.errors ? data.errors.map((e: any) => e.message).join(", ") : "Error al enviar el formulario.");
      }
    } catch (err) {
      setError("Error de conexión. Inténtalo de nuevo más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-foreground overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Da el primer paso hacia tu crecimiento
            </h2>
            <p className="text-lg text-white/70">
              Cuéntanos sobre tu empresa y recibe tu auditoría gratuita en menos de 24 horas.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">¡Solicitud enviada!</h3>
              <p className="text-white/70 text-lg">
                Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-white text-sm flex items-center gap-2 mb-4">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/90 font-medium">Nombre completo</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Tu nombre y apellido"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary h-12"
                          />
                        </FormControl>
                        <FormMessage className="text-accent" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/90 font-medium">Email corporativo</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="tu@empresa.com"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary h-12"
                          />
                        </FormControl>
                        <FormMessage className="text-accent" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/90 font-medium">URL de tu sitio web</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="https://tuempresa.com"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary h-12"
                          />
                        </FormControl>
                        <FormMessage className="text-accent" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="leadMagnet"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/90 font-medium">
                          ¿Qué te gustaría recibir?
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            value={field.value}
                            onValueChange={field.onChange}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2"
                          >
                            {leadMagnets.map((option) => (
                              <div key={option.id}>
                                <RadioGroupItem
                                  value={option.id}
                                  id={option.id}
                                  className="sr-only peer"
                                />
                                <Label
                                  htmlFor={option.id}
                                  className="flex items-center justify-center p-3 rounded-xl border border-white/20 text-white/70 text-sm font-medium cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/20 peer-data-[state=checked]:text-white hover:border-white/40"
                                >
                                  {option.label}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-accent" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-primary text-white hover:bg-primary/90 font-bold text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02] active:scale-[0.99]"
                  >
                    {isSubmitting ? "Enviando..." : "Solicitar mi auditoría gratuita"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
          >
            {[
              { icon: Shield, text: "Sin compromisos" },
              { icon: Clock, text: "Respuesta en 24 horas" },
              { icon: Lock, text: "100% confidencial" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
                <Icon className="w-4 h-4" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
