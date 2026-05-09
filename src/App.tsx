import { Switch, Route, Router as WouterRouter, Link } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Importaciones con rutas relativas para evitar errores de carga
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/Home"; 
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/sections/Footer";

const queryClient = new QueryClient();

// Componente integrado para evitar fallos de archivo externo
function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white font-jakarta">
      <nav className="border-b bg-gray-50 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <Link href="/">
            <a className="text-blue-600 font-bold flex items-center gap-2 cursor-pointer">
              ← Volver a Partners
            </a>
          </Link>
        </div>
      </nav>
      <article className="container mx-auto px-6 py-16 max-w-4xl text-gray-800">
        <h1 className="text-4xl font-extrabold mb-8">Términos de Servicio</h1>
        <p className="mb-4">Al usar este sitio, aceptas nuestros términos...</p>
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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
