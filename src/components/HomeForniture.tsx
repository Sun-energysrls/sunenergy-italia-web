import { motion } from "framer-motion";
import { Sun, Lightbulb } from "lucide-react";

const HomeForniture = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Fotovoltaiche */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Sun className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Forniture Fotovoltaiche
              </h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Oltre 25 MW installati tra impianti domestici e professionali su tutto il territorio nazionale.
            </p>
          </motion.div>

          {/* Illuminazione */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Illuminazione Professionale
              </h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Collaborazioni con primari gruppi retail e GDO come Klepierre, CBRE, Eurospin, Conad.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeForniture;
