import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, TrendingUp, FileCheck, Wrench, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const bullets = [
  { icon: BarChart3, text: "Riduzione dei consumi energetici certificata" },
  { icon: TrendingUp, text: "Accesso a crediti d'imposta" },
  { icon: FileCheck, text: "Soluzioni conformi ai requisiti normativi" },
  { icon: Wrench, text: "Supporto tecnico e documentale completo" },
];

const HomeTransizione = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-orange" />
            <span className="text-orange font-semibold text-sm tracking-[0.2em] uppercase">
              Incentivi Fiscali
            </span>
          </div>

          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-left">
            Transizione 5.0:{" "}
            <span className="text-orange">Incentivi per il Fotovoltaico Industriale</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 text-left max-w-3xl">
            Il Piano Transizione 5.0 consente alle imprese di accedere a crediti d'imposta
            per investimenti in impianti fotovoltaici e soluzioni di efficientamento energetico
            che riducono i consumi. Un'opportunità concreta per abbattere i costi energetici
            e modernizzare i processi produttivi.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {bullets.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex items-start gap-4 bg-background rounded-xl p-5 shadow-sm border border-border"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-orange" />
                </div>
                <span className="text-foreground font-medium text-sm md:text-base leading-snug">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/fotovoltaico#transizione-5"
              className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-7 py-3.5 rounded-lg font-semibold hover:brightness-110 transition-all text-sm md:text-base shadow-lg shadow-orange/25"
            >
              Verifica se la tua azienda può accedere agli incentivi
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/fotovoltaico#transizione-5"
              className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-muted transition-all text-sm md:text-base"
            >
              Scopri come funziona la Transizione 5.0
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTransizione;
