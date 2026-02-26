import { motion } from "framer-motion";
import { ArrowRight, Phone, Ship, Handshake, Sun, Lightbulb } from "lucide-react";
import heroBg from "@/assets/hero-combined.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Seamless blended background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Fotovoltaico e illuminazione industriale"
          className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110 saturate-105"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Navy overlay */}
        <div className="absolute inset-0 bg-[rgba(5,18,40,0.55)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,18,40,0.15)] via-transparent to-[rgba(5,18,40,0.35)]" />
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
            Soluzioni complete per impianti utility-scale, oltre 20.000 prodotti
            per illuminazione professionale e importazioni DDP con consegna diretta in cantiere.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => scrollTo("#contatti")}
              className="flex items-center gap-2 bg-orange text-orange-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition-all text-sm md:text-base shadow-lg shadow-orange/25 cursor-pointer"
            >
              Richiedi Preventivo
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+393338590639"
              className="flex items-center gap-2 border-2 border-orange text-orange px-8 py-4 rounded-lg font-semibold hover:bg-orange hover:text-orange-foreground transition-all text-sm md:text-base cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              Contatta il nostro Ufficio Commerciale
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Cards */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="group text-left backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl p-6 shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] hover:bg-white/[0.13]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange/20 rounded-lg flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105">
                <Ship className="w-5 h-5 text-orange" />
              </div>
              <h3 className="font-display font-bold text-white text-lg">Preventivo DDP e Logistica fino al Cantiere</h3>
            </div>
            <p className="text-white/65 text-sm leading-relaxed">
              Dalla quotazione all'arrivo in cantiere: gestione completa di dazi, pratiche doganali, trasporto internazionale e consegna programmata direttamente sul sito di installazione, senza costi nascosti.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="group text-left backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl p-6 shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] hover:bg-white/[0.13]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange/20 rounded-lg flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105">
                <Handshake className="w-5 h-5 text-orange" />
              </div>
              <h3 className="font-display font-bold text-white text-lg">Collaborazioni B2B di Prestigio</h3>
            </div>

            {/* Photovoltaic section */}
            <div className="flex items-center gap-3 mb-1">
              <Sun className="w-4 h-4 text-orange shrink-0" />
              <p className="font-bold text-white text-sm">Fotovoltaico Utility-Scale</p>
            </div>
            <p className="text-white/60 text-xs leading-relaxed ml-7 mt-1">
              Oltre 30 MW installati in tutta Italia.
            </p>

            {/* Divider */}
            <div className="h-px bg-white/10 my-5 ml-7" />

            {/* Lighting section */}
            <div className="flex items-center gap-3 mb-1">
              <Lightbulb className="w-4 h-4 text-orange shrink-0" />
              <p className="font-bold text-white text-sm">Illuminazione Industriale & Retail</p>
            </div>
            <p className="text-white/60 text-xs leading-relaxed ml-7 mt-1">Progetti realizzati per:</p>
            <div className="flex flex-wrap gap-2 text-white/50 text-xs font-semibold tracking-wide ml-7 mt-1.5">
              <span>KLEPIERRE</span><span>•</span><span>CBRE</span><span>•</span><span>EUROSPIN</span><span>•</span><span>CONAD</span>
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
