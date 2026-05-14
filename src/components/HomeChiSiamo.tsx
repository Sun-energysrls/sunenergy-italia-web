import { motion } from "framer-motion";
import { Zap, Handshake, MapPin } from "lucide-react";
import chiSiamoImg from "@/assets/chi-siamo-magazzino.png";

const highlights = [
  { text: "Oltre 30 MW forniti in Italia", icon: Zap },
  { text: "Collaborazioni con primari gruppi retail e GDO", icon: Handshake },
  { text: "Operatività nazionale", icon: MapPin },
];

const HomeChiSiamo = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-secondary font-semibold text-sm uppercase tracking-wider"
            >
              Chi Siamo
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6"
            >
              Chi Siamo
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8"
            >
              Sun Energy è un importatore diretto e fornitore specializzato in soluzioni fotovoltaiche
              e illuminotecniche professionali. Operiamo su tutto il territorio nazionale supportando
              installatori, aziende e general contractor con forniture competitive e logistica strutturata.
            </motion.p>

            <ul className="space-y-5">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-9 h-9 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <h.icon className="w-4 h-4 text-orange" />
                  </div>
                  <span className="text-foreground font-medium text-base leading-relaxed">{h.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right – corporate image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={chiSiamoImg}
              alt="Magazzino fotovoltaico Sun Energy"
              className="w-full h-full object-cover aspect-[16/10]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeChiSiamo;
