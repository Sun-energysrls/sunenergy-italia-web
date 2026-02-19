import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FvCtaSection = () => {
  return (
    <section className="section-padding bg-navy-gradient text-primary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Sei un installatore o un general contractor?
          </h2>
          <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-10">
            Richiedi una fornitura dedicata e condizioni riservate.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition-all text-sm md:text-base shadow-lg shadow-orange/25"
          >
            Contatta il nostro ufficio commerciale
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FvCtaSection;
