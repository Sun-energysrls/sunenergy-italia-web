import { motion } from "framer-motion";
import { Ship, FileCheck, Calculator, Truck } from "lucide-react";

const features = [
  {
    icon: Ship,
    title: "Importazione diretta dalla Cina",
    desc: "Rapporti consolidati con i principali produttori asiatici per forniture dirette.",
  },
  {
    icon: FileCheck,
    title: "Gestione doganale completa",
    desc: "Documentazione, sdoganamento e conformità normativa gestiti internamente.",
  },
  {
    icon: Calculator,
    title: "Preventivi DDP",
    desc: "Quotazioni inclusive di dazi, trasporto e assicurazione senza costi nascosti.",
  },
  {
    icon: Truck,
    title: "Consegna diretta in cantiere",
    desc: "Logistica strutturata con consegna programmata sul sito di installazione.",
  },
];

const IlImportazioneSection = () => {
  return (
    <section className="section-padding bg-navy-gradient text-primary-foreground overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">
            Vantaggio Competitivo
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
            Importazione Diretta e Logistica Strutturata
          </h2>
          <p className="text-primary-foreground/70 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Forniture competitive grazie a gestione diretta e spedizioni dedicate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-left rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-primary-foreground/[0.08]"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center mb-5">
                <feat.icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="font-display font-bold text-primary-foreground text-lg mb-3">
                {feat.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IlImportazioneSection;
