import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroSolar from "@/assets/hero-solar-plant.jpg";
import heroLighting from "@/assets/hero-lighting.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 flex">
        {/* Left: Solar */}
        <div className="relative w-1/2">
          <img
            src={heroSolar}
            alt="Impianto fotovoltaico utility-scale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,30,50,0.88)] to-[rgba(5,30,50,0.75)]" />
        </div>
        {/* Right: Lighting */}
        <div className="relative w-1/2">
          <img
            src={heroLighting}
            alt="Illuminazione professionale LED industriale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[rgba(5,30,50,0.88)] to-[rgba(5,30,50,0.75)]" />
        </div>
      </div>

      {/* Center blend overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,30,50,0.3)] via-transparent to-[rgba(5,30,50,0.6)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-orange" />
            <span className="text-orange font-semibold text-sm tracking-[0.2em] uppercase">
              Fotovoltaico & Illuminazione
            </span>
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
            className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Soluzioni complete per impianti utility-scale, forniture industriali
            LED e importazioni DDP con consegna diretta in cantiere.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
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
              Contatta il nostro ufficio commerciale
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange/50 to-transparent origin-left"
        />
      </div>
    </section>
  );
};

export default HeroSection;
