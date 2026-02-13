import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg1 from "@/assets/hero-solar-1.jpg";
import heroImg2 from "@/assets/hero-solar-2.jpg";
import heroImg3 from "@/assets/hero-solar-3.jpg";

const slides = [heroImg1, heroImg2, heroImg3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current]}
            alt="Impianto fotovoltaico SunEnergy"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-secondary/30">
            Energia Solare Utility-Scale
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Soluzioni Fotovoltaiche
            <br />
            <span className="text-secondary">su Larga Scala</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Partner affidabile per impianti fotovoltaici utility-scale, import/export di componenti 
            e servizi EPC. Progettiamo il futuro energetico con competenza e innovazione.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-green-light transition-colors text-sm"
            >
              Richiedi Consulenza
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:border-secondary hover:text-secondary transition-colors text-sm"
            >
              I Nostri Servizi
            </button>
          </div>
        </motion.div>

        {/* Slide controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button onClick={prev} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-secondary w-8" : "bg-primary-foreground/40"
                }`}
              />
            ))}
          </div>
          <button onClick={next} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
