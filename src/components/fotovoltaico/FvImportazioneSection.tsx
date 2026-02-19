import { motion } from "framer-motion";
import { Ship, FileCheck, Calculator, Truck } from "lucide-react";
import portImg from "@/assets/fv-logistics-port.jpg";

const features = [
  {
    icon: Ship,
    title: "Importazione diretta dalla Cina",
    description:
      "Rapporti consolidati con i principali produttori asiatici per forniture dirette senza intermediari.",
    bullet: "Accesso diretto a fabbriche selezionate con audit periodici.",
  },
  {
    icon: FileCheck,
    title: "Gestione doganale completa",
    description:
      "Documentazione, sdoganamento e conformità normativa gestiti internamente.",
    bullet: "Processi gestiti da team dedicato con documentazione trasparente e tempi certi.",
  },
  {
    icon: Calculator,
    title: "Preventivi DDP",
    description:
      "Quotazioni inclusive di dazi, trasporto e assicurazione — nessun costo nascosto.",
    bullet: "Prezzo finale garantito comprensivo di tutti gli oneri doganali.",
  },
  {
    icon: Truck,
    title: "Consegna diretta in cantiere",
    description:
      "Logistica strutturata con consegna programmata direttamente sul sito di installazione.",
    bullet: "Trasporto dedicato con tracking in tempo reale fino al cantiere.",
  },
];

const FvImportazioneSection = () => {
  return (
    <section className="py-28 px-4 md:px-8 lg:px-16 bg-navy-gradient text-primary-foreground overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">
            Vantaggio Competitivo
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
            Importazione Diretta e Logistica Strutturata
          </h2>
          <p className="text-primary-foreground/70 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Gestione completa della fornitura dalla produzione alla consegna in
            cantiere.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Port image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={portImg}
              alt="Porto logistico per importazione diretta"
              className="w-full h-[400px] lg:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,18,40,0.5)] to-transparent" />
          </motion.div>

          {/* Right: Feature blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="text-left rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-primary-foreground/[0.08]"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-orange" />
                </div>
                <h3 className="font-display font-bold text-primary-foreground text-base mb-2">
                  {feat.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed mb-3">
                  {feat.description}
                </p>
                <p className="text-primary-foreground/45 text-xs leading-relaxed italic">
                  {feat.bullet}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FvImportazioneSection;
