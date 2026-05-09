import { Switch, Route, Link } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/Home"; 
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/sections/Footer";

const queryClient = new QueryClient();

// 1. COMPONENTE DE TÉRMINOS
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
        <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Términos de Servicio</h1>
        <div className="prose prose-blue max-w-none text-lg leading-relaxed">
          <p className="mb-4">
            Bienvenido a Partners. Al acceder a nuestro sitio web y utilizar nuestros servicios, usted acepta cumplir con los siguientes términos y condiciones.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Uso del Sitio</h2>
          <p>
            Este sitio es para proporcionar información sobre nuestros servicios de marketing B2B y automatización. Queda prohibido el uso indebido de los contenidos aquí presentados.
          </p>
        </div>
      </article>
      <Footer />
    </div>
  );
}

// 2. APP PRINCIPAL (Enrutamiento simplificado)
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Eliminamos WouterRouter innecesario y usamos Switch directamente */}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/politica-de-privacidad" component={PrivacyPolicy} />
          <Route path="/terminos-de-servicio" component={TermsOfServicePage} />
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
