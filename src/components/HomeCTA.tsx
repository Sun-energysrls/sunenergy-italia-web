import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Parla con il nostro Ufficio Commerciale
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
            Richiedi una consulenza tecnica o un preventivo personalizzato per forniture
            fotovoltaiche e illuminotecniche.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contatti"
              className="flex items-center gap-2 bg-orange text-orange-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition-all text-sm md:text-base shadow-lg shadow-orange/25"
            >
              Richiedi Preventivo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+393338590639"
              className="flex items-center gap-2 border-2 border-orange text-orange px-8 py-4 rounded-lg font-semibold hover:bg-orange hover:text-orange-foreground transition-all text-sm md:text-base"
            >
              <Phone className="w-4 h-4" />
              Contatta il Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;
