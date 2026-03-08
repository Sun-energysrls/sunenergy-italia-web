import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>Fotovoltaico Utility Scale | Moduli e Inverter per Installatori | Sun-Energy</title>
        <meta name="description" content="Forniture fotovoltaiche utility scale per installatori e general contractor: moduli JA Solar, Jinko, Trina Solar, inverter Huawei, Sungrow, SMA. Importazione diretta dalla Cina con oltre 30 MW forniti." />
        <link rel="canonical" href="https://sunenergysrls.com/fotovoltaico" />
        <meta property="og:title" content="Fotovoltaico Utility Scale | Moduli e Inverter per Installatori | Sun-Energy" />
        <meta property="og:description" content="Forniture fotovoltaiche utility scale per installatori: moduli e inverter dei migliori brand, importazione diretta." />
        <meta property="og:url" content="https://sunenergysrls.com/fotovoltaico" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sunenergysrls.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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
    </>
  );
};

export default Fotovoltaico;