import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contatti = () => {
  return (
    <>
      <Helmet>
        <title>Contatti | Richiedi Preventivo Fotovoltaico e Illuminazione | Sun-Energy</title>
        <meta name="description" content="Contatta Sun-Energy SRLS per preventivi su forniture fotovoltaiche utility scale e illuminazione LED professionale. Sede: Via Cecconi 71, 67051 Avezzano (AQ)." />
        <link rel="canonical" href="https://sunenergysrls.com/contatti" />
        <meta property="og:title" content="Contatti | Richiedi Preventivo | Sun-Energy" />
        <meta property="og:description" content="Contatta Sun-Energy per preventivi su forniture fotovoltaiche e illuminazione LED professionale." />
        <meta property="og:url" content="https://sunenergysrls.com/contatti" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sunenergysrls.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contatti;
