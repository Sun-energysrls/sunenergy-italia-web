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
        <title>Illuminazione LED Professionale | Distribuzione B2B | Sun-Energy</title>
        <meta name="description" content="Distribuzione B2B di illuminazione LED professionale: oltre 20.000 prodotti Philips, Samsung, Osram per GDO, industria, hospitality e installatori. Catalogo completo per interni, esterni e applicazioni professionali." />
        <link rel="canonical" href="https://sunenergysrls.com/illuminazione" />
        <meta property="og:title" content="Illuminazione LED Professionale | Distribuzione B2B | Sun-Energy" />
        <meta property="og:description" content="Distribuzione B2B di illuminazione LED professionale: oltre 20.000 prodotti per GDO, industria e installatori." />
        <meta property="og:url" content="https://sunenergysrls.com/illuminazione" />
        <meta property="og:type" content="website" />
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
