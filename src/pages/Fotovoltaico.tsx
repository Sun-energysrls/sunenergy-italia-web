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
import PageTransition from "@/components/PageTransition";

const Fotovoltaico = () => {
  return (
    <>
      <Helmet>
        <title>Fotovoltaico | Sun-Energy SRLS — Pannelli Solari Importazione Diretta</title>
        <meta name="description" content="Pannelli fotovoltaici di qualità con importazione diretta dalla Cina. Conformi alla normativa europea. Incentivi fiscali disponibili. Sun-Energy SRLS Avezzano." />
        <link rel="canonical" href="https://sunenergysrls.com/fotovoltaico" />
        <meta property="og:title" content="Fotovoltaico | Sun-Energy SRLS" />
        <meta property="og:description" content="Pannelli fotovoltaici di qualità con importazione diretta dalla Cina. Conformi alla normativa europea." />
        <meta property="og:url" content="https://sunenergysrls.com/fotovoltaico" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sun-Energy SRLS" />
        <meta property="og:image" content="https://sunenergysrls.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <PageTransition>
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
      </PageTransition>
    </>
  );
};

export default Fotovoltaico;