import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/illuminazione/hero-illuminazione.png";

const IlHeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Illuminazione professionale LED"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(5,18,40,0.72)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,18,40,0.4)] to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-orange" />
            <span className="text-orange font-semibold text-sm tracking-[0.2em] uppercase">
              Illuminazione
            </span>
            <div className="h-px w-10 bg-orange" />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6">
            Illuminazione Professionale{" "}
            <span className="text-orange">per Ogni Settore</span>
          </h1>

          <p className="text-primary-foreground/75 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Fornitura di soluzioni LED per interni, esterni, settore industriale e retail.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition-all text-sm md:text-base shadow-lg shadow-orange/25"
            >
              Richiedi Fornitura
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all text-sm md:text-base"
            >
              <Phone className="w-4 h-4" />
              Contatta Ufficio Commerciale
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange/50 to-transparent origin-left z-10"
      />
    </section>
  );
};

export default IlHeroSection;
