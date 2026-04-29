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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
      </main>
    </>
  );
}
