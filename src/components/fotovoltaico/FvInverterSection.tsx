import { motion } from "framer-motion";
import { Battery, Cpu } from "lucide-react";

const placeholders = [
  { icon: Cpu, label: "Inverter" },
  { icon: Battery, label: "Batterie" },
  { icon: Cpu, label: "Ottimizzatori" },
  { icon: Battery, label: "Accumulo Industriale" },
];

const FvInverterSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">
            Componenti
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Inverter e Sistemi di Accumulo
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Soluzioni certificate per impianti residenziali e industriali.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Sistemi pronti per future integrazioni di brand e prodotti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full max-w-[300px] bg-card border border-border shadow-md flex flex-col items-center justify-center gap-4 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl"
              style={{ borderRadius: "20px", padding: "32px 24px", height: "180px" }}
            >
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                <item.icon className="w-7 h-7 text-orange" />
              </div>
              <span className="font-display font-semibold text-foreground text-sm">
                {item.label}
              </span>
              <span className="text-xs text-muted-foreground">Coming soon</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FvInverterSection;
