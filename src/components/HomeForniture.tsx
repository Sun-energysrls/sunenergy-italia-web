import { motion } from "framer-motion";
import { Sun, Lightbulb } from "lucide-react";

const HomeForniture = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Fotovoltaiche */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8 group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center">
                <Sun className="w-5 h-5 text-orange" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Forniture Fotovoltaiche
              </h3>
            </div>
            <p className="font-display text-5xl md:text-6xl font-bold text-orange mb-4">
              30 <span className="text-3xl md:text-4xl">MW</span>
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">Oltre 30 MW forniti tra impianti domestici e professionali su tutto il territorio nazionale.

            </p>
          </motion.div>

          {/* Illuminazione */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-8 group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-orange" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Illuminazione Professionale
              </h3>
            </div>
            <p className="font-display text-5xl md:text-6xl font-bold text-orange mb-4">
              20.000<span className="text-3xl md:text-4xl">+</span>
            </p>
            <p className="font-display text-lg md:text-xl font-bold text-foreground/80 -mt-2 mb-4 tracking-wider">
              PRODOTTI
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Un catalogo completo con oltre 20.000 articoli per applicazioni civili, industriali e professionali.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HomeForniture;