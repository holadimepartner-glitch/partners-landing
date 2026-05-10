import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Pricing from "../components/sections/Pricing"; // Verifica que este archivo exista
import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-foreground">
      <Hero />
      <Features />
      {/* Aquí están los planes que mencionas */}
      <Pricing /> 
      <ContactForm />
      <Footer />
    </main>
  );
}
