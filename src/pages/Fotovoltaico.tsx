import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FvHeroSection from "@/components/fotovoltaico/FvHeroSection";
import FvModuliSection from "@/components/fotovoltaico/FvModuliSection";
import FvInverterSection from "@/components/fotovoltaico/FvInverterSection";
import FvImportazioneSection from "@/components/fotovoltaico/FvImportazioneSection";
import FvTransizione5Section from "@/components/fotovoltaico/FvTransizione5Section";
import FvCtaSection from "@/components/fotovoltaico/FvCtaSection";
import HomeImportatore from "@/components/HomeImportatore";

const Fotovoltaico = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FvHeroSection />
      <FvModuliSection />
      <FvInverterSection />
      <FvImportazioneSection />
      <HomeImportatore />
      <FvTransizione5Section />
      <FvCtaSection />
      <Footer />
    </div>
  );
};

export default Fotovoltaico;
