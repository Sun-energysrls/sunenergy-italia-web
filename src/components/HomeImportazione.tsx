import { motion } from "framer-motion";
import { Ship, FileCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Ship,
    title: "Importazione diretta dalla Cina",
    desc: "Accesso diretto ai principali produttori cinesi di moduli fotovoltaici, inverter e apparecchi LED, garantendo qualità e prezzi competitivi.",
  },
  {
    icon: FileCheck,
    title: "Gestione completa doganale",
    desc: "Supporto integrale nelle pratiche doganali, certificazioni e documentazione per un import sicuro e conforme alle normative europee.",
  },
  {
    icon: Truck,
    title: "Preventivo DDP e Logistica fino al Cantiere",
    desc: "Dalla quotazione all'arrivo in cantiere: gestione completa di dazi, trasporto internazionale, pratiche doganali e consegna programmata direttamente sul sito di installazione.",
  },
];

const HomeImportazione = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Logistica</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
            Importazione Diretta & Logistica Strutturata
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Logistica strutturata e fornitura DDP in tutta Italia.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="group bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-orange/30"
            >
              <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <f.icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="font-display font-bold text-foreground text-base mb-2 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange after:transition-all after:duration-300 group-hover:after:w-full">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeImportazione;
