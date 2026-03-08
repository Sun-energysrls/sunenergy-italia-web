import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IlHeroSection from "@/components/illuminazione/IlHeroSection";
import IlPianteLedSection from "@/components/illuminazione/IlPianteLedSection";
import IlBrandSection from "@/components/illuminazione/IlBrandSection";
import IlCategorieSection from "@/components/illuminazione/IlCategorieSection";
import IlCatalogoSection from "@/components/illuminazione/IlCatalogoSection";
import IlCollaborazioniSection from "@/components/illuminazione/IlCollaborazioniSection";
import IlCtaSection from "@/components/illuminazione/IlCtaSection";

const Illuminazione = () => {
  return (
    <>
      <Helmet>
        <title>Illuminazione LED | Sun-Energy SRLS — Relamping e Progettazione</title>
        <meta name="description" content="Soluzioni di illuminazione LED per interni ed esterni. Relamping industriale e commerciale. Risparmio energetico garantito. Sun-Energy SRLS Avezzano (AQ)." />
        <link rel="canonical" href="https://sunenergysrls.com/illuminazione" />
        <meta property="og:title" content="Illuminazione LED | Sun-Energy SRLS" />
        <meta property="og:description" content="Soluzioni di illuminazione LED per interni ed esterni. Relamping industriale e commerciale." />
        <meta property="og:url" content="https://sunenergysrls.com/illuminazione" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sun-Energy SRLS" />
        <meta property="og:image" content="https://sunenergysrls.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <IlHeroSection />
        <IlPianteLedSection />
        <IlBrandSection />
        <IlCategorieSection />
        <IlCatalogoSection />
        <IlCollaborazioniSection />
        <IlCtaSection />
        <Footer />
      </div>
    </>
  );
};

export default Illuminazione;