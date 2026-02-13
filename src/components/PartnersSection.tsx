import { motion } from "framer-motion";
import { Star } from "lucide-react";

const partners = [
  "HUAWEI",
  "Azzurro",
  "SUNGROW",
  "JA SOLAR",
  "Risen",
  "SolarEdge",
  "PHILIPS",
  "OSRAM",
  "SAMSUNG",
];

const certifications = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "CEI EN 62446",
  "SOA Qualificazione",
];

const testimonials = [
  {
    text: "SunEnergy ha dimostrato professionalità e competenza nella realizzazione del nostro impianto da 5MW. Tempi rispettati e qualità eccellente.",
    author: "Marco R.",
    role: "Direttore Tecnico, Energia Verde SpA",
  },
  {
    text: "Partner affidabile per l'approvvigionamento di componenti fotovoltaici. Logistica impeccabile e prezzi competitivi.",
    author: "Laura B.",
    role: "Responsabile Acquisti, Solar Italia Srl",
  },
  {
    text: "La loro expertise nell'EPC ci ha permesso di completare il progetto in anticipo sui tempi previsti. Altamente raccomandati.",
    author: "Giovanni T.",
    role: "CEO, GreenPower Group",
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Partner & Certificazioni</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            I Nostri Partner
          </h2>
        </motion.div>

        {/* Partner logos */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl px-8 py-5 flex items-center justify-center"
            >
              <span className="font-display font-bold text-foreground text-lg tracking-wide">{name}</span>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {certifications.map((c) => (
            <span
              key={c}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
