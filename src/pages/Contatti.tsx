import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contatti = () => {
  return (
    <>
      <Helmet>
        <title>Contatti | Sun-Energy SRLS — Via Cecconi 71, Avezzano (AQ)</title>
        <meta name="description" content="Contatta Sun-Energy SRLS per un preventivo gratuito. Via Cecconi 71, 67051 Avezzano (AQ). P.IVA IT02136450661." />
        <link rel="canonical" href="https://sunenergysrls.com/contatti" />
        <meta property="og:title" content="Contatti | Sun-Energy SRLS" />
        <meta property="og:description" content="Contatta Sun-Energy SRLS per un preventivo gratuito. Via Cecconi 71, 67051 Avezzano (AQ)." />
        <meta property="og:url" content="https://sunenergysrls.com/contatti" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sun-Energy SRLS" />
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