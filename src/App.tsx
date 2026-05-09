import { Switch, Route, Router as WouterRouter, Link } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Features from "@/components/sections/Features";
import Methodology from "@/components/sections/Methodology";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import CalendlyWidget from "@/components/CalendlyWidget";

const queryClient = new QueryClient();

// COMPONENTE DE POLÍTICA DE PRIVACIDAD ACTUALIZADO
function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white font-jakarta">
      <nav className="border-b bg-gray-50 py-4 sticky top-0 z-10">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-blue-600 font-bold flex items-center gap-2 cursor-pointer hover:text-blue-800 transition-colors">
            ← Volver a Partners
          </Link>
        </div>
      </nav>

      <article className="container mx-auto px-6 py-16 max-w-4xl text-gray-800">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Política de Privacidad — Partners</h1>
        <p className="text-gray-500 mb-12 pb-4 border-b">Última actualización: Mayo 2026</p>

        <div className="space-y-10 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Introducción</h2>
            <p>En Partners, valoramos la privacidad y protección de los datos personales de nuestros usuarios, clientes, aliados comerciales y visitantes del sitio web. La presente Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos, protegemos y tratamos la información proporcionada a través de nuestros canales digitales, formularios, campañas, plataformas y servicios.</p>
            <p className="mt-4">Al utilizar nuestro sitio web, formularios, automatizaciones, servicios o interactuar con cualquier activo digital administrado por Partners, el usuario acepta los términos establecidos en esta Política de Privacidad.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Información que recopilamos</h2>
            <p>Partners puede recopilar información personal y corporativa de manera directa o automática, incluyendo, pero no limitada a:</p>
            <ul className="list-disc pl-6 mt-4 space-y-4">
              <li><strong>Información de contacto:</strong> Nombre y apellido, correo electrónico corporativo, número telefónico, cargo empresarial, nombre de la empresa y sitio web.</li>
              <li><strong>Información comercial y técnica:</strong> Datos de campañas publicitarias, presupuestos, métricas de rendimiento e historial de interacción con formularios.</li>
              <li><strong>Recopilación automática:</strong> Dirección IP, navegador, dispositivo, cookies y eventos de conversión.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Finalidad del tratamiento de datos</h2>
            <p>La información recopilada se utiliza para contactar prospectos, gestionar propuestas, ejecutar campañas de marketing, automatizar procesos comerciales y mejorar la experiencia del usuario. <strong>Partners no vende información personal a terceros.</strong></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Protección y almacenamiento</h2>
            <p>Implementamos medidas técnicas y organizativas para proteger la información contra acceso no autorizado o pérdida. No obstante, no se puede garantizar seguridad absoluta frente a ataques externos maliciosos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Uso de cookies</h2>
            <p>Utilizamos cookies y píxeles (Google Analytics, Meta Pixel, LinkedIn Insight Tag, etc.) para analítica web, remarketing y personalización de contenido.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Compartición con terceros</h2>
            <p>Compartiremos información solo cuando sea necesario para la prestación de servicios, como plataformas publicitarias, CRMs o servicios de hosting.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Confidencialidad y propiedad intelectual</h2>
            <p>Toda información estratégica y activos digitales (Estrategias, Frameworks, Diseños, Sistemas) son propiedad intelectual de Partners y se consideran confidenciales.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Limitación de responsabilidad</h2>
            <p>Partners no garantiza resultados financieros específicos, ya que estos dependen de factores externos como el mercado, presupuesto publicitario y algoritmos de plataformas digitales.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Responsabilidad sobre terceros</h2>
            <p>Partners no se hace responsable por caídas de plataformas externas, bloqueos de cuentas o cambios en políticas de Meta, Google o LinkedIn.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Derechos del usuario</h2>
            <p>El usuario tiene derecho a solicitar acceso, corrección, eliminación o limitación del tratamiento de sus datos a través de nuestros canales oficiales.</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t pt-10">
            <div>
              <h2 className="text-xl font-bold mb-2">11. Retención de datos</h2>
              <p className="text-sm text-gray-600">Conservamos la información el tiempo necesario para cumplimiento contractual y obligaciones legales.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">12. Enlaces externos</h2>
              <p className="text-sm text-gray-600">No nos responsabilizamos por las políticas de privacidad de sitios externos enlazados.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">13. Modificaciones</h2>
              <p className="text-sm text-gray-600">Podemos actualizar esta política en cualquier momento. La versión más reciente estará siempre en la web.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">14. Contacto</h2>
              <p className="text-sm text-gray-600">Para consultas legales, contáctenos mediante los canales oficiales publicados.</p>
            </div>
          </section>

          <section className="bg-gray-900 text-white p-8 rounded-2xl mt-12">
            <h2 className="text-2xl font-bold mb-4">15. Aceptación</h2>
            <p className="text-gray-300">El uso del sitio web y de los servicios de Partners implica la aceptación expresa de esta Política de Privacidad y del tratamiento de datos descrito.</p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <ProblemSolution />
        <Features />
        <Methodology />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <CalendlyWidget />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/politica-de-privacidad" component={PrivacyPolicyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
