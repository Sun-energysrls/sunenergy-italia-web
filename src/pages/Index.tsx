import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomeChiSiamo from "@/components/HomeChiSiamo";
import HomeImportazione from "@/components/HomeImportazione";
import HomeForniture from "@/components/HomeForniture";
import HomeBrands from "@/components/HomeBrands";
import HomeImportatore from "@/components/HomeImportatore";
import HomeTransizione from "@/components/HomeTransizione";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sun-Energy SRLS | Pannelli Fotovoltaici e Illuminazione LED — Avezzano</title>
        <meta name="description" content="Sun-Energy SRLS importatore ufficiale di pannelli fotovoltaici dalla Cina. Soluzioni fotovoltaiche e illuminazione LED per privati e aziende. Avezzano (AQ)." />
        <meta name="keywords" content="pannelli fotovoltaici, illuminazione LED, importatore fotovoltaico, Sun-Energy, Avezzano, energia solare" />
        <link rel="canonical" href="https://sunenergysrls.com/" />
        <meta name="google-site-verification" content="PLACEHOLDER_INSERISCI_CODICE_GOOGLE" />
        <meta property="og:title" content="Sun-Energy SRLS | Pannelli Fotovoltaici e Illuminazione LED" />
        <meta property="og:description" content="Importatore ufficiale di pannelli fotovoltaici dalla Cina. Conformi alla normativa europea." />
        <meta property="og:url" content="https://sunenergysrls.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sun-Energy SRLS" />
        <meta property="og:image" content="https://sunenergysrls.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sun-Energy SRLS | Pannelli Fotovoltaici e Illuminazione LED" />
        <meta name="twitter:description" content="Importatore ufficiale di pannelli fotovoltaici dalla Cina. Conformi alla normativa europea." />
        <meta name="twitter:image" content="https://sunenergysrls.com/og-image.jpg" />
      </Helmet>
      <PageTransition>
        <div className="min-h-screen bg-background">
          <Navbar />
          <HeroSection />
          <HomeChiSiamo />
          <HomeImportazione />
          <HomeForniture />
          <HomeBrands />
          <HomeImportatore />
          <HomeTransizione />
          <HomeCTA />
          <Footer />
        </div>
      </PageTransition>
    </>
  );
};

export default Index;