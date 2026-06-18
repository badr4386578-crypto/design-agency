// src/App.jsx

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyUs from "./components/sections/WhyUs";
import Portfolio from "./components/sections/Portfolio";
import Team from "./components/sections/Team";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";
import Contact from "./components/sections/Contact";
import Container from "./components/layout/Container";

function App() {
  return (
    <div
      className="
        min-h-screen
        bg-white
        text-zinc-900
        dark:bg-zinc-950
        dark:text-white
        transition-colors
        duration-300
      "
    >
      <Container>
      <Navbar />
   
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <Team />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      </Container>
    </div>
  );
}

export default App;