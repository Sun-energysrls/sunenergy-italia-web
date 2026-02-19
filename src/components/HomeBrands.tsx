import { motion } from "framer-motion";

const pvBrands = ["HUAWEI", "Azzurro", "SUNGROW", "JA SOLAR", "Risen", "SolarEdge", "Trina Solar", "LONGi"];
const ledBrands = ["PHILIPS", "OSRAM", "SAMSUNG", "MEAN WELL", "CREE", "Osram", "Ledvance", "Signify"];

const BrandSlider = ({ brands, direction = "left" }: { brands: string[]; direction?: "left" | "right" }) => {
  const doubled = [...brands, ...brands];

  return (
    <div className="overflow-hidden group">
      <div
        className={`flex gap-8 ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"} group-hover:[animation-play-state:paused]`}
        style={{ width: "max-content" }}
      >
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="bg-card border border-border rounded-xl px-8 py-4 flex items-center justify-center flex-shrink-0"
          >
            <span className="font-display font-bold text-muted-foreground text-base tracking-wide whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomeBrands = () => {
  return (
    <section className="section-padding bg-muted overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Partner</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            I Nostri Brand
          </h2>
        </motion.div>

        {/* PV */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-5 text-center">
            Fotovoltaico
          </h3>
          <BrandSlider brands={pvBrands} direction="left" />
        </motion.div>

        {/* LED */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-5 text-center">
            Illuminazione
          </h3>
          <BrandSlider brands={ledBrands} direction="right" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBrands;
