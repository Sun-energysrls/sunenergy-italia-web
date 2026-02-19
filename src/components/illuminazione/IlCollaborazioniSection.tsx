import { motion } from "framer-motion";

const clients = ["Klepierre", "CBRE", "Eurospin", "Conad"];

const IlCollaborazioniSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Referenze
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Collaborazioni nel Settore Retail e GDO
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10">
            Forniture per gruppi come Klepierre, CBRE, Eurospin, Conad e altri operatori strutturati.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {clients.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl px-10 py-6 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-display font-bold text-foreground text-lg tracking-wide">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IlCollaborazioniSection;
