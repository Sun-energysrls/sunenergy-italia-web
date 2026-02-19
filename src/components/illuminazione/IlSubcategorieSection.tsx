import { motion } from "framer-motion";

const subcategories = [
  {
    title: "Interni",
    items: ["Downlight LED", "Plafoniere", "Pannelli", "Strisce", "Faretti", "Domotica", "Ventilatori", "Applique"],
  },
  {
    title: "Esterni",
    items: ["Proiettori", "Segnapasso", "Stradale", "Piscine", "Mobili LED", "Solare"],
  },
  {
    title: "Illuminazione Professionale",
    items: ["Industriale", "Negozi", "Stradale", "Sportiva", "Emergenza", "Eventi"],
  },
  {
    title: "Luci Decorative",
    items: ["Soggiorno", "Camera", "Cucina", "Bagno", "Giardino", "Terrazzo", "Garage"],
  },
  {
    title: "Materiale Elettrico",
    items: ["Cablaggi", "Quadri", "Interruttori", "Cavi", "Meccanismi", "Domotica", "Sicurezza"],
  },
];

const IlSubcategorieSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Dettaglio
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Panoramica Sottocategorie
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 max-w-5xl mx-auto">
          {subcategories.map((sub, i) => (
            <motion.div
              key={sub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-6 bg-orange" />
                <h3 className="font-display font-bold text-foreground text-base uppercase tracking-wide">
                  {sub.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {sub.items.join(" • ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IlSubcategorieSection;
