import { motion } from "framer-motion";

import jaSolarLogo from "@/assets/brands/ja-solar.png";
import jinkoSolarLogo from "@/assets/brands/jinko-solar.png";
import canadianSolarLogo from "@/assets/brands/canadian-solar.png";
import trinaSolarLogo from "@/assets/brands/trina-solar.png";
import sunevoLogo from "@/assets/brands/sunevo.png";
import sunpowerLogo from "@/assets/brands/sunpower.png";
import jingsunLogo from "@/assets/brands/jingsun.png";

const pvBrands = [
  { name: "JA Solar", logo: jaSolarLogo },
  { name: "Jinko Solar", logo: jinkoSolarLogo },
  { name: "Canadian Solar", logo: canadianSolarLogo },
  { name: "Trina Solar", logo: trinaSolarLogo },
  { name: "Sunevo", logo: sunevoLogo },
  { name: "SunPower", logo: sunpowerLogo },
  { name: "Jingsun", logo: jingsunLogo },
];

const ledBrands = ["PHILIPS", "OSRAM", "SAMSUNG", "MEAN WELL", "CREE", "Osram", "Ledvance", "Signify"];

const PvBrandSlider = ({ brands }: { brands: typeof pvBrands }) => {
  const doubled = [...brands, ...brands];

  return (
    <div className="overflow-hidden group">
      <div
        className="flex gap-10 animate-scroll-left group-hover:[animation-play-state:paused]"
        style={{ width: "max-content" }}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex-shrink-0 flex items-center justify-center px-6 py-4 transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

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
          className="mb-16"
        >
          <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-6 text-center">
            Fotovoltaico
          </h3>
          <PvBrandSlider brands={pvBrands} />
          <div className="mt-8 text-center">
            <div className="w-12 h-px bg-orange/40 mx-auto mb-4" />
            <p className="text-sm md:text-base font-bold text-foreground">
              Moduli Europei per la <span className="text-orange">Transizione 5.0</span>
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              (Bisol, Aiko e altri produttori certificati UE)
            </p>
          </div>
        </motion.div>

        {/* LED */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4"
        >
          <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-6 text-center">
            Illuminazione
          </h3>
          <BrandSlider brands={ledBrands} direction="right" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBrands;
