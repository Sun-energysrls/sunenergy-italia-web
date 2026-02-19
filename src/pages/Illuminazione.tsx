import { motion } from "framer-motion";
import { Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-lighting.jpg";

const services = [
  {
    title: "Illuminazione Industriale LED",
    desc: "Soluzioni LED ad alta efficienza per capannoni, magazzini e stabilimenti produttivi. Riduzione dei consumi fino al 70%.",
    benefits: [
      "Campate alte e basse",
      "Illuminazione di emergenza",
      "Sistemi DALI e sensori di presenza",
      "Certificazioni CE e normativa vigente",
    ],
  },
  {
    title: "Illuminazione Retail & Commerciale",
    desc: "Progetti personalizzati per centri commerciali, supermercati e spazi espositivi con focus su comfort visivo e risparmio energetico.",
    benefits: [
      "Progettazione illuminotecnica",
      "Pannelli LED e downlight",
      "Gestione centralizzata",
      "Soluzioni su misura per brand",
    ],
  },
  {
    title: "Illuminazione Stradale e Pubblica",
    desc: "Armature stradali LED di ultima generazione per comuni, aree industriali e parcheggi, con controllo remoto e smart city ready.",
    benefits: [
      "Armature stradali certificate",
      "Telegestione e dimmerazione",
      "Fotometrie conformi UNI 11248",
      "Riduzione inquinamento luminoso",
    ],
  },
];

const clients = ["KLEPIERRE", "CBRE", "EUROSPIN", "CONAD"];

const Illuminazione = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero banner */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Illuminazione professionale" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[rgba(5,18,40,0.75)]" />
        </div>
        <div className="relative z-10 container mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-orange" />
              <span className="text-orange font-semibold text-sm tracking-[0.2em] uppercase">Illuminazione</span>
              <div className="h-px w-12 bg-orange" />
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
              Illuminazione Professionale <span className="text-orange">LED</span>
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Soluzioni complete per illuminazione industriale, retail e pubblica.
              Importazione diretta e progetti chiavi in mano.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="flex flex-col gap-16">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-secondary" />
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
                </div>
                <div className={`bg-card border border-border rounded-2xl p-8 flex items-center justify-center min-h-[200px] ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <Lightbulb className="w-20 h-20 text-secondary/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Clienti</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
              Progetti Realizzati Per
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6">
            {clients.map((name, i) => (
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition-all text-sm"
            >
              Richiedi Preventivo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Illuminazione;
