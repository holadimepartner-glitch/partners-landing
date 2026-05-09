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

// --- COMPONENTE DE LA PÁGINA DE POLÍTICA DE PRIVACIDAD ---
function privacypolicy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-blue-600 font-bold flex items-center gap-2 cursor-pointer">
            ← Volver a Partners
          </Link>
        </div>
      </nav>

      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 font-jakarta">Política de Privacidad</h1>
        <p className="text-gray-500 mb-10">Última actualización: Mayo 2026</p>

        <div className="text-gray-700 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Introducción</h2>
            <p>En Partners, valoramos la privacidad y protección de los datos personales de nuestros usuarios, clientes, aliados comerciales y visitantes del sitio web. Al utilizar nuestro sitio web, formularios o servicios, el usuario acepta los términos aquí establecidos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">2. Información que recopilamos</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Información de contacto:</strong> Nombre, correo corporativo, teléfono, cargo y empresa.</li>
              <li><strong>Información técnica:</strong> Dirección IP, cookies, métricas de rendimiento y datos de navegación.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">3. Finalidad del tratamiento de datos</h2>
            <p>La información se utiliza para contactar prospectos, gestionar propuestas comerciales, ejecutar campañas de marketing y optimizar nuestros servicios. <strong>Partners no vende información personal a terceros.</strong></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Protección de datos</h2>
            <p>Implementamos medidas técnicas razonables para proteger la información, aunque ningún sistema digital es completamente infalible.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Propiedad Intelectual</h2>
            <p>Toda estrategia, diseño y activos digitales compartidos son propiedad intelectual de Partners, quedando prohibida su reproducción no autorizada.</p>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="text-sm italic">Para consultas relacionadas con privacidad, puede contactarnos a través de los canales oficiales publicados en este sitio web.</p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
}

// --- COMPONENTE HOME ---
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

// --- CONFIGURACIÓN DE RUTAS ---
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/politica-de-privacidad" component={privacypolicy.tsx} />
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
