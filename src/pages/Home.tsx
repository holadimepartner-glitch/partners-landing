import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import LogoBar from "../components/sections/LogoBar";
import ProblemSolution from "../components/sections/ProblemSolution";
import Features from "../components/sections/Features";
import Methodology from "../components/sections/Methodology";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-foreground">
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
    </div>
  );
}
