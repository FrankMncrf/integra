import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import TrustSection from "./components/TrustSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-white">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <TrustSection />
      <Footer />
    </main>
  );
}
