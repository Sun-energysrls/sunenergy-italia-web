import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IlHeroSection from "@/components/illuminazione/IlHeroSection";
import IlBrandSection from "@/components/illuminazione/IlBrandSection";
import IlCategorieSection from "@/components/illuminazione/IlCategorieSection";
import IlSubcategorieSection from "@/components/illuminazione/IlSubcategorieSection";
import IlImportazioneSection from "@/components/illuminazione/IlImportazioneSection";
import IlCollaborazioniSection from "@/components/illuminazione/IlCollaborazioniSection";
import IlPianteLedSection from "@/components/illuminazione/IlPianteLedSection";
import IlCtaSection from "@/components/illuminazione/IlCtaSection";

const Illuminazione = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <IlHeroSection />
      <IlBrandSection />
      <IlCategorieSection />
      <IlSubcategorieSection />
      <IlImportazioneSection />
      <IlCollaborazioniSection />
      <IlPianteLedSection />
      <IlCtaSection />
      <Footer />
    </div>
  );
};

export default Illuminazione;
