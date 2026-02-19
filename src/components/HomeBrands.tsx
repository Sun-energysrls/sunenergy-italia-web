import { motion } from "framer-motion";

import jaSolarLogo from "@/assets/brands/ja-solar.png";
import jinkoSolarLogo from "@/assets/brands/jinko-solar.png";
import canadianSolarLogo from "@/assets/brands/canadian-solar.png";
import trinaSolarLogo from "@/assets/brands/trina-solar.png";
import sunevoLogo from "@/assets/brands/sunevo.png";
import sunpowerLogo from "@/assets/brands/sunpower.png";
import jingsunLogo from "@/assets/brands/jingsun.png";
import philipsLogo from "@/assets/brands/philips.png";
import samsungLogo from "@/assets/brands/samsung.png";
import osramLogo from "@/assets/brands/osram.png";

const pvBrands = [
  { name: "JA Solar", logo: jaSolarLogo },
  { name: "Jinko Solar", logo: jinkoSolarLogo },
  { name: "Canadian Solar", logo: canadianSolarLogo },
  { name: "Trina Solar", logo: trinaSolarLogo },
  { name: "Sunevo", logo: sunevoLogo },
  { name: "SunPower", logo: sunpowerLogo },
  { name: "Jingsun", logo: jingsunLogo },
];

const ledBrands = [
  { name: "Philips", logo: philipsLogo },
  { name: "Samsung", logo: samsungLogo },
  { name: "Osram", logo: osramLogo },
];

const PvBrandSlider = ({ brands }: { brands: typeof pvBrands }) => {
  const doubled = [...brands, ...brands];

  return (
    <div className="overflow-hidden group py-2">
      <div
        className="flex gap-8 animate-scroll-left group-hover:[animation-play-state:paused]"
        style={{ width: "max-content" }}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex-shrink-0 w-[280px] md:w-[300px] bg-card border border-border shadow-md flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl"
            style={{ borderRadius: "20px", padding: "32px 36px" }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-auto object-contain max-w-[70%]"
              style={{ height: "clamp(70px, 8vw, 90px)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const LedBrandGrid = ({ brands }: { brands: typeof ledBrands }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="w-[280px] md:w-[300px] bg-card border border-border shadow-md flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl"
          style={{ borderRadius: "20px", padding: "32px 36px", height: "160px" }}
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className="w-auto object-contain max-w-[70%]"
            style={{ height: "80px" }}
          />
        </div>
      ))}
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
          <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-8 text-center">
            Fotovoltaico
          </h3>
          <PvBrandSlider brands={pvBrands} />
          <div className="mt-12 text-center">
            <div className="w-20 h-[3px] bg-orange/50 mx-auto mb-5 rounded-full" />
            <p className="text-base md:text-lg font-bold text-foreground">
              Moduli Europei per la <span className="text-orange">Transizione 5.0</span>
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">
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
          className="mt-16"
        >
          <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-8 text-center">
            Illuminazione
          </h3>
          <LedBrandGrid brands={ledBrands} />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBrands;
