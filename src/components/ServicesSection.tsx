import { motion } from "framer-motion";
import { ArrowRight, Sun, PackageCheck, Wrench, CheckCircle2 } from "lucide-react";
import heroImg1 from "@/assets/hero-solar-1.jpg";
import heroImg2 from "@/assets/hero-solar-2.jpg";
import heroImg3 from "@/assets/hero-solar-3.jpg";

const services = [
  {
    icon: Sun,
    title: "Impianti Utility-Scale (4MW+)",
    desc: "Progettazione, installazione e commissioning di impianti fotovoltaici di grande scala per utility e investitori.",
    image: heroImg1,
    benefits: [
      "Progettazione ingegneristica avanzata",
      "Installazione chiavi in mano",
      "Monitoraggio e manutenzione",
      "Ottimizzazione della resa energetica",
    ],
  },
  {
    icon: PackageCheck,
    title: "Import & Export Componenti PV",
    desc: "Fornitura di pannelli, inverter e componenti dalle migliori marche mondiali con logistica integrata.",
    image: heroImg3,
    benefits: [
      "Pannelli Tier-1 certificati",
      "Inverter e ottimizzatori",
      "Strutture di montaggio",
      "Logistica internazionale completa",
    ],
  },
  {
    icon: Wrench,
    title: "Servizi EPC & Ingegneria",
    desc: "Contratti EPC completi con supporto ingegneristico dalla fase di sviluppo fino al collaudo finale.",
    image: heroImg2,
    benefits: [
      "Engineering, Procurement, Construction",
      "Studi di fattibilità",
      "Gestione autorizzazioni",
      "Assistenza post-vendita",
    ],
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Servizi</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Le Nostre Soluzioni
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Offriamo un portafoglio completo di servizi per il settore fotovoltaico, 
            dalla fornitura alla realizzazione.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{s.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-3 mb-6">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors text-sm"
                >
                  Richiedi Preventivo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-xl ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <img src={s.image} alt={s.title} className="w-full h-72 lg:h-80 object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
