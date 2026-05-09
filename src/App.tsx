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

// COMPONENTE DE POLÍTICA DE PRIVACIDAD (Integrado aquí para evitar errores)
function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white font-jakarta">
      <nav className="border-b bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-blue-600 font-bold flex items-center gap-2 cursor-pointer">
            ← Volver a Partners
          </Link>
        </div>
      </nav>

      <article className="container mx-auto px-6 py-12 max-w-4xl text-gray-800">
        <h1 className="text-4xl font-extrabold mb-2">Política de Privacidad — Partners</h1>
        <p className="text-gray-500 mb-8">Última actualización: Mayo 2026</p>

        <div className="space-y-6 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Introducción</h2>
            <p>En Partners, valoramos la privacidad y protección de los datos personales. Al utilizar nuestro sitio web, el usuario acepta los términos establecidos en esta Política.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. Información que recopilamos</h2>
            <p>Recopilamos datos de contacto (nombre, correo, empresa) e información técnica (IP, cookies) para mejorar nuestro servicio.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. Finalidad</h2>
            <p>Los datos se usan para gestionar propuestas comerciales y optimizar campañas. Partners no vende información a terceros.</p>
          </section>

          <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <p className="text-sm italic text-blue-900">
              Para consultas relacionadas con privacidad, puede contactarnos a través de los canales oficiales publicados en el sitio web de Partners.
            </p>
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
