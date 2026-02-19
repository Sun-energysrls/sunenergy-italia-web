import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-solar-plant.jpg";

const FvHeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Impianto fotovoltaico industriale"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(5,18,40,0.7)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,18,40,0.4)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-orange" />
            <span className="text-orange font-semibold text-sm tracking-[0.2em] uppercase">
              Fotovoltaico
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6">
            Soluzioni Fotovoltaiche{" "}
            <span className="text-orange">Professionali</span>
          </h1>

          <p className="text-primary-foreground/75 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-4">
            Fornitura diretta di moduli, inverter e sistemi di accumulo per
            impianti utility-scale, commerciali e industriali.
          </p>

          <p className="text-primary-foreground/50 text-sm md:text-base max-w-xl leading-relaxed mb-10">
            Soluzioni complete per impianti fotovoltaici residenziali, commerciali e utility-scale.
          </p>

          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition-all text-sm md:text-base shadow-lg shadow-orange/25"
          >
            Richiedi Fornitura
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange/50 to-transparent origin-left z-10"
      />
    </section>
  );
};

export default FvHeroSection;
