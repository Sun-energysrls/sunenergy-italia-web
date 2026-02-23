import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Lightbulb, Target, BadgeEuro, Headset } from "lucide-react";
import { Link } from "react-router-dom";

const finanzia = [
  "Impianti fotovoltaici industriali",
  "Sistemi di accumulo energetico",
  "Efficientamento illuminazione",
  "Monitoraggio energetico",
  "Integrazione con processi produttivi",
];

const supporto = [
  "Analisi preliminare consumi",
  "Studio tecnico e progettazione",
  "Installazione impianto",
  "Supporto documentale incentivo",
  "Monitoraggio energetico",
];

const blocks = [
  {
    icon: Lightbulb,
    title: "Cos'è la Transizione 5.0",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        La Transizione 5.0 è il programma nazionale di incentivazione destinato alle imprese
        che investono in innovazione tecnologica con l'obiettivo di ridurre i consumi energetici.
        Attraverso crediti d'imposta significativi, il programma supporta la trasformazione
        digitale e sostenibile dei processi produttivi, premiando le aziende che scelgono
        soluzioni energetiche avanzate come il fotovoltaico industriale.
      </p>
    ),
  },
  {
    icon: Target,
    title: "Cosa finanzia",
    content: (
      <ul className="space-y-2.5">
        {finanzia.map((item) => (
          <li key={item} className="flex items-start gap-3 text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-orange mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: BadgeEuro,
    title: "Vantaggio economico",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Il credito d'imposta varia in base alla percentuale di riduzione dei consumi energetici
        certificata rispetto al periodo di riferimento. Maggiore è la riduzione ottenuta,
        più elevata è l'aliquota del credito fiscale spettante, rendendo l'investimento
        in fotovoltaico industriale una leva strategica per la competitività aziendale.
      </p>
    ),
  },
  {
    icon: Headset,
    title: "Il supporto di SunEnergy",
    content: (
      <ol className="space-y-2.5 list-none">
        {supporto.map((item, i) => (
          <li key={item} className="flex items-start gap-3 text-muted-foreground">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange/10 text-orange text-xs font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    ),
  },
];

const FvTransizione5Section = () => {
  return (
    <section id="transizione-5" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-orange" />
            <span className="text-orange font-semibold text-sm tracking-[0.2em] uppercase">
              Transizione 5.0
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-left">
            Incentivi Transizione 5.0 per{" "}
            <span className="text-orange">Impianti Fotovoltaici Aziendali</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-muted rounded-2xl p-6 md:p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                  <block.icon className="w-5 h-5 text-orange" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                  {block.title}
                </h3>
              </div>
              {block.content}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition-all text-sm md:text-base shadow-lg shadow-orange/25"
          >
            Richiedi una valutazione tecnica del tuo potenziale incentivo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FvTransizione5Section;
