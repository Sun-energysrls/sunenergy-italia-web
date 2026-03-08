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

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sun-Energy SRLS | Fotovoltaico Utility Scale e Illuminazione Industriale</title>
        <meta name="description" content="Sun-Energy SRLS: importatore diretto di moduli fotovoltaici utility scale (4MW+) e distributore B2B di illuminazione LED professionale per GDO, industria e installatori. Sede ad Avezzano (AQ)." />
        <link rel="canonical" href="https://sunenergysrls.com/" />
        <meta property="og:title" content="Sun-Energy SRLS | Fotovoltaico Utility Scale e Illuminazione Industriale" />
        <meta property="og:description" content="Importatore diretto di moduli fotovoltaici utility scale e distributore B2B di illuminazione LED professionale." />
        <meta property="og:url" content="https://sunenergysrls.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sunenergysrls.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sun-Energy SRLS | Fotovoltaico Utility Scale e Illuminazione Industriale" />
        <meta name="twitter:description" content="Importatore diretto di moduli fotovoltaici utility scale e distributore B2B di illuminazione LED professionale." />
        <meta name="twitter:image" content="https://sunenergysrls.com/og-image.jpg" />
      </Helmet>
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
    </>
  );
};

export default Index;
