import { motion } from "framer-motion";
import { Ship, FileCheck, Calculator, Truck } from "lucide-react";

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
    icon: Calculator,
    title: "Preventivi DDP",
    desc: "Quotazioni tutto incluso con formula Delivered Duty Paid: prezzo trasparente, senza costi nascosti, dalla fabbrica al cantiere.",
  },
  {
    icon: Truck,
    title: "Consegna diretta in cantiere",
    desc: "Logistica strutturata con consegna programmata direttamente presso il sito di installazione, su tutto il territorio nazionale.",
  },
];

const HomeImportazione = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Logistica</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Importazione Diretta & Logistica Strutturata
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-secondary/30 transition-all"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-foreground text-base mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeImportazione;
