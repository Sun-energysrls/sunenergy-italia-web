import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FvHeroSection from "@/components/fotovoltaico/FvHeroSection";
import FvModuliSection from "@/components/fotovoltaico/FvModuliSection";
import FvTransizione from "@/components/fotovoltaico/FvTransizione";
import FvInverterSection from "@/components/fotovoltaico/FvInverterSection";
import FvImportazioneSection from "@/components/fotovoltaico/FvImportazioneSection";
import FvCtaSection from "@/components/fotovoltaico/FvCtaSection";

const Fotovoltaico = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FvHeroSection />
      <FvModuliSection />
      <FvTransizione />
      <FvInverterSection />
      <FvImportazioneSection />
      <FvCtaSection />
      <Footer />
    </div>
  );
};

export default Fotovoltaico;
