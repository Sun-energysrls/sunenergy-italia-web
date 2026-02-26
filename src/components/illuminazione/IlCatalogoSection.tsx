import { motion } from "framer-motion";

const IlCatalogoSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Catalogo
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Oltre 20.000 Prodotti Disponibili
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 leading-relaxed">
            Una gamma completa di soluzioni illuminotecniche per ogni esigenza progettuale, civile e industriale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IlCatalogoSection;
