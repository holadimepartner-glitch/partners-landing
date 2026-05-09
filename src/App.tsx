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

// --- PÁGINA DE POLÍTICA DE PRIVACIDAD ---
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
        <div className="space-y-10 leading-relaxed text-lg text-justify">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Introducción</h2>
            <p>En Partners, valoramos la privacidad y protección de los datos personales de nuestros usuarios, clientes, aliados comerciales y visitantes del sitio web. Al utilizar nuestro sitio web, formularios o servicios, el usuario acepta los términos establecidos en esta Política de Privacidad.</p>
          </section>
          {/* Secciones 2 a 15 de privacidad aquí */}
          <section className="bg-gray-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">15. Aceptación</h2>
            <p className="text-gray-300">El uso del sitio web y de los servicios de Partners implica la aceptación expresa de esta Política de Privacidad.</p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
}

// --- PÁGINA DE TÉRMINOS DE SERVICIO ---
function TermsOfServicePage() {
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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Términos de Servicio — Partners</h1>
        <p className="text-gray-500 mb-12 pb-4 border-b">Última actualización: Mayo 2026</p>

        <div className="space-y-10 leading-relaxed text-lg text-justify">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Definiciones</h2>
            <p><strong>Partners</strong> hace referencia a la agencia de marketing digital, sus colaboradores y afiliados. El <strong>Cliente</strong> es cualquier entidad que contrate nuestros servicios de marketing, automatización, branding o consultoría.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Naturaleza de los Servicios</h2>
            <p>Ofrecemos servicios estratégicos B2B personalizados. La contratación no garantiza resultados financieros específicos, ya que el éxito depende de múltiples variables del mercado y la colaboración activa del cliente.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Pagos y Facturación</h2>
            <p>Los pagos deben realizarse en las fechas acordadas. Partners se reserva el derecho de pausar campañas ante incumplimientos. No se realizan reembolsos sobre servicios ya ejecutados o tiempo estratégico invertido.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Propiedad Intelectual</h2>
            <p>Toda metodología, framework o automatización creada por Partners constituye propiedad intelectual de la empresa. El cliente podrá utilizar los materiales finales pero no revender ni replicar metodologías.</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t pt-10">
            <div>
              <h2 className="text-xl font-bold mb-2 text-gray-900">7. Terceros</h2>
              <p className="text-sm text-gray-600">No nos responsabilizamos por caídas de Meta, Google o cambios en sus algoritmos publicitarios.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2 text-gray-900">9. Responsabilidad</h2>
              <p className="text-sm text-gray-600">No somos responsables por lucro cesante derivado del uso de estrategias digitales.</p>
            </div>
          </section>

          <section className="bg-blue-600 text-white p-8 rounded-2xl mt-12">
            <h2 className="text-2xl font-bold mb-4">Aceptación de Términos</h2>
            <p className="text-blue-50">Al utilizar nuestras plataformas o contratar servicios, usted declara haber leído y aceptado estos Términos de Servicio en su totalidad.</p>
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
      <Route path="/terminos-de-servicio" component={TermsOfServicePage} />
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
