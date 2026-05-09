import { Switch, Route, Router as WouterRouter, Link } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Footer from "@/components/sections/Footer";

const queryClient = new QueryClient();

// --- COMPONENTE INTEGRADO DE TÉRMINOS DE SERVICIO ---
function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white font-jakarta">
      <nav className="border-b bg-gray-50 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <Link href="/">
            <a className="text-blue-600 font-bold flex items-center gap-2 cursor-pointer hover:text-blue-800 transition-colors">
              ← Volver a Partners
            </a>
          </Link>
        </div>
      </nav>

      <article className="container mx-auto px-6 py-16 max-w-4xl text-gray-800">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
            Términos de Servicio
          </h1>
          <p className="text-gray-500 pb-4 border-b">Última actualización: Mayo 2026</p>
        </header>

        <div className="space-y-10 leading-relaxed text-lg text-justify">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Aceptación de los Términos</h2>
            <p>Al acceder y utilizar el sitio web de Partners, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Descripción del Servicio</h2>
            <p>Partners proporciona servicios de consultoría en marketing digital, automatización y estrategias B2B. Nos reservamos el derecho de modificar o interrumpir el servicio en cualquier momento.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Propiedad Intelectual</h2>
            <p>Todo el contenido, marcas y metodologías presentadas en este sitio son propiedad exclusiva de Partners. Queda prohibida su reproducción sin autorización previa.</p>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Limitación de Responsabilidad</h2>
            <p className="text-gray-600 italic">Partners no será responsable de ningún daño indirecto, incidental o consecuente que resulte del uso o la imposibilidad de usar nuestros servicios.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Contacto</h2>
            <p>Si tiene alguna pregunta sobre estos términos, puede contactarnos a través de los canales oficiales indicados en nuestra página principal.</p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/politica-de-privacidad" component={PrivacyPolicy} />
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
