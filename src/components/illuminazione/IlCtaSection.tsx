import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { reportConversion } from "@/utils/analytics";

const IlCtaSection = () => {
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
            Cerchi un partner per forniture illuminotecniche?
          </h2>
          <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-10">
            Soluzioni professionali per retail, GDO, industria e progettazione architettonica.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition-all text-sm md:text-base shadow-lg shadow-orange/25"
            >
              Richiedi Fornitura Illuminazione
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+393338590639"
              onClick={(e) => reportConversion(e, 'AW-11053599486/YyHGCJ7DhqkcEP6V4pYp', 'tel:+393338590639')}
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all text-sm md:text-base"
            >
              <Phone className="w-4 h-4" />
              Parla con un Consulente
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IlCtaSection;
