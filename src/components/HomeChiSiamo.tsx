import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Oltre 25 MW forniti in Italia",
  "Collaborazioni con primari gruppi retail e GDO",
  "Operatività nazionale",
];

const HomeChiSiamo = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Chi Siamo</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Chi Siamo
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Sun Energy è un importatore diretto e fornitore specializzato in soluzioni fotovoltaiche
              e illuminotecniche professionali. Operiamo su tutto il territorio nazionale supportando
              installatori, aziende e general contractor con forniture competitive e logistica strutturata.
            </p>
          </motion.div>

          {/* Right – highlight box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <ul className="space-y-5">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground font-medium text-base leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeChiSiamo;
