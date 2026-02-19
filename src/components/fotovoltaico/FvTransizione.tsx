import { motion } from "framer-motion";

const FvTransizione = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-20 h-[3px] bg-orange mx-auto mb-6 rounded-full" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Moduli Europei per la{" "}
            <span className="text-orange">Transizione 5.0</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Bisol, Aiko e produttori certificati UE — conformi ai requisiti per
            gli incentivi della Transizione 5.0.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FvTransizione;
