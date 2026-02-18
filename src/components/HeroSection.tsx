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
      {/* Full-width solar background */}
      <div className="absolute inset-0">
        <img
          src={heroSolar}
          alt="Impianto fotovoltaico utility-scale al tramonto"
          className="absolute inset-0 w-full h-full object-cover brightness-[1.1]"
        />
        {/* Gradient overlay: dark left → transparent right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(5,18,40,0.70) 0%, rgba(5,18,40,0.55) 35%, rgba(5,18,40,0.15) 65%, transparent 100%)",
          }}
        />
        {/* Subtle top/bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,18,40,0.20)] via-transparent to-[rgba(5,18,40,0.30)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full px-4 lg:px-8 pt-32 pb-40">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side – Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-2xl text-left"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
              className="text-white/80 text-base md:text-lg lg:text-xl max-w-xl mb-10 leading-relaxed"
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
                Contattaci
              </button>
            </motion.div>
          </motion.div>

          {/* Right side – Warehouse card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex-1 max-w-lg w-full hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
              <img
                src={heroLighting}
                alt="Magazzino industriale moderno con illuminazione LED"
                className="w-full h-[420px] object-cover brightness-[1.05]"
              />
              {/* Subtle overlay on the card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,18,40,0.50)] via-transparent to-[rgba(5,18,40,0.10)]" />
              {/* Card label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-orange" />
                  <span className="text-orange font-semibold text-xs tracking-[0.15em] uppercase">
                    Illuminazione Industriale
                  </span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Forniture LED professionali per magazzini, centri commerciali e strutture industriali.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Cards */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-4xl w-full mx-auto lg:mx-0">
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
