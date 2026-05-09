import { Link } from "wouter";
import Footer from "@/components/sections/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white font-jakarta">
      <nav className="border-b bg-gray-50 py-4 sticky top-0 z-10">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-blue-600 font-bold flex items-center gap-2 cursor-pointer">
            ← Volver a Partners
          </Link>
        </div>
      </nav>
      <article className="container mx-auto px-6 py-16 max-w-4xl text-gray-800">
        <h1 className="text-4xl font-extrabold mb-4">Términos de Servicio</h1>
        <div className="prose prose-blue max-w-none">
          <p>Bienvenido a Partners. Al acceder a nuestros servicios, usted acepta estos términos...</p>
          {/* Aquí va el resto de tu texto de términos */}
        </div>
      </article>
      <Footer />
    </div>
  );
}
