import { motion } from "framer-motion";
import { ArrowRight, Phone, Ship, Handshake } from "lucide-react";
import heroSolar from "@/assets/hero-solar-plant.jpg";
import heroLighting from "@/assets/hero-lighting.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Seamless blended background */}
      <div className="absolute inset-0">
        {/* Left: Solar */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroSolar}
            alt="Impianto fotovoltaico utility-scale"
            className="absolute left-0 top-0 w-1/2 h-full object-cover"
          />
          <img
            src={heroLighting}
            alt="Illuminazione professionale LED industriale"
            className="absolute right-0 top-0 w-1/2 h-full object-cover"
          />
        </div>
        {/* Soft center blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,20,45,0.92)] via-[rgba(5,20,45,0.85)] to-[rgba(5,20,45,0.92)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,20,45,0.4)] via-transparent to-[rgba(5,20,45,0.7)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center px-4 lg:px-8 pt-32 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-orange" />
            <span className="text-orange font-semibold text-sm tracking-[0.2em] uppercase">
              Fotovoltaico & Illuminazione
            </span>
            <div className="h-px w-12 bg-orange" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
          >
            Importazione Diretta
            <br />
            <span className="text-orange">Fotovoltaico</span> e{" "}
            <span className="text-orange">Illuminazione</span>
            <br />
            Professionale
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/75 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Soluzioni complete per impianti utility-scale, forniture industriali
            LED e importazioni DDP con consegna diretta in cantiere.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 bg-orange text-orange-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition-all text-sm md:text-base shadow-lg shadow-orange/25"
            >
              Richiedi Preventivo
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 border-2 border-orange text-orange px-8 py-4 rounded-lg font-semibold hover:bg-orange hover:text-orange-foreground transition-all text-sm md:text-base"
            >
              <Phone className="w-4 h-4" />
              Contatta il nostro Ufficio Commerciale
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Cards */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange/20 rounded-lg flex items-center justify-center">
                <Ship className="w-5 h-5 text-orange" />
              </div>
              <h3 className="font-display font-bold text-white text-lg">Importazione Diretta DDP</h3>
            </div>
            <p className="text-white/65 text-sm leading-relaxed">
              Importazione diretta dalla Cina con gestione completa dogana, logistica e consegna DDP in cantiere. Prezzi competitivi e preventivi personalizzati.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange/20 rounded-lg flex items-center justify-center">
                <Handshake className="w-5 h-5 text-orange" />
              </div>
              <h3 className="font-display font-bold text-white text-lg">Collaborazioni B2B di Prestigio</h3>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-3">
              Oltre 25 MW installati in tutta Italia con partner di primo livello nel retail e nella GDO.
            </p>
            <div className="flex flex-wrap gap-3 text-white/50 text-xs font-semibold tracking-wide">
              <span>KLEPIERRE</span>
              <span>•</span>
              <span>CBRE</span>
              <span>•</span>
              <span>EUROSPIN</span>
              <span>•</span>
              <span>CONAD</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange/50 to-transparent origin-left z-10"
      />
    </section>
  );
};

export default HeroSection;
