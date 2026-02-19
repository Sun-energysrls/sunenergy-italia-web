import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import PartnersSection from "@/components/PartnersSection";

const Fotovoltaico = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24">
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <PartnersSection />
      </div>
      <Footer />
    </div>
  );
};

export default Fotovoltaico;
