import { motion } from "framer-motion";
import { Home, Sun, Factory, Sparkles, Cable, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Home,
    title: "Interni",
    desc: "Soluzioni LED per ambienti residenziali e commerciali.",
    href: "/illuminazione/interni",
  },
  {
    icon: Sun,
    title: "Esterni",
    desc: "Illuminazione outdoor, stradale e architetturale.",
    href: "/illuminazione/esterni",
  },
  {
    icon: Factory,
    title: "Illuminazione Professionale",
    desc: "Impianti LED per industria, sport e retail.",
    href: "/illuminazione/professionale",
  },
  {
    icon: Sparkles,
    title: "Luci Decorative",
    desc: "Soluzioni estetiche per ambienti domestici e hospitality.",
    href: "/illuminazione/decorative",
  },
  {
    icon: Cable,
    title: "Materiale Elettrico",
    desc: "Componentistica e sistemi di supporto elettrico.",
    href: "/illuminazione/materiale-elettrico",
  },
];

const IlCategorieSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Catalogo
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Le Nostre Macro Categorie
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={cat.href}
                className="block bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                  <cat.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-xl mb-3">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {cat.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-secondary text-sm font-semibold group-hover:gap-3 transition-all">
                  Scopri di più
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IlCategorieSection;
