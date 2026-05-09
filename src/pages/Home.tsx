import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-foreground">
      {/* Sección principal / Hero */}
      <Hero />
      
      {/* Sección de beneficios o características */}
      <Features />
      
      {/* El formulario que acabamos de corregir */}
      <ContactForm />
      
      {/* Pie de página */}
      <Footer />
    </main>
  );
}
