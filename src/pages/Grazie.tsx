import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { reportConversion } from "@/utils/analytics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Grazie = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      // Conversione pagina Grazie (esistente)
      (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-11053599486/hqT7CL_sraUcEP6V4pYp',
          'value': 50.0,
          'currency': 'EUR'
      });
      // Conversione invio form contatti
      (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-11053599486/3fBtCIzX7qgcEP6V4pYp',
          'value': 1.0,
          'currency': 'EUR'
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Grazie! | Sun-Energy SRLS</title>
        <meta
          name="description"
          content="Grazie per averci contattato. Il nostro ufficio commerciale ti ricontatterà entro 24 ore."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />

        <main className="flex-1 flex items-center justify-center section-padding pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl mx-auto text-center"
          >
            {/* Animated check icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="mx-auto mb-8 w-20 h-20 rounded-full bg-green/10 flex items-center justify-center"
            >
              <CheckCircle className="w-10 h-10 text-green" />
            </motion.div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Grazie per averci contattato!
            </h1>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Il tuo messaggio è stato inviato con successo. Il nostro ufficio
              commerciale ti ricontatterà{" "}
              <span className="text-foreground font-medium">entro 24 ore</span>.
            </p>

            <p className="text-muted-foreground text-sm mb-10">
              Se hai bisogno di assistenza immediata, puoi contattarci
              direttamente al numero{" "}
              <a
                href="tel:+393338590639"
                onClick={(e) => reportConversion(e, 'AW-11053599486/YyHGCJ7DhqkcEP6V4pYp', 'tel:+393338590639')}
                className="text-secondary font-medium hover:underline"
              >
                +39 333 859 0639
              </a>
              .
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition-all text-sm md:text-base shadow-lg shadow-orange/25"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna alla Home
            </Link>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Grazie;
