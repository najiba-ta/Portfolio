import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

import GlassBackground from "@/components/GlassBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* Global Background for all subsequent sections */}
        <div className="relative">
          <GlassBackground />
          <SectionDivider />
          <About />
          <SectionDivider />
          <ProjectsSection />
          <SectionDivider />
          <Services />
          <SectionDivider />
          <ContactSection />
          <CTA />
          <FAQ />
          <Footer />
        </div>
      </main>
    </>
  );
}
