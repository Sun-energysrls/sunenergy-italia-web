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
  );
};

export default Illuminazione;
