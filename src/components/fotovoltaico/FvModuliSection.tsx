import { motion } from "framer-motion";

import jaSolarLogo from "@/assets/brands/ja-solar.png";
import jinkoSolarLogo from "@/assets/brands/jinko-solar.png";
import canadianSolarLogo from "@/assets/brands/canadian-solar.png";
import trinaSolarLogo from "@/assets/brands/trina-solar.png";
import sunevoLogo from "@/assets/brands/sunevo.png";
import sunpowerLogo from "@/assets/brands/sunpower.png";
import jingsunLogo from "@/assets/brands/jingsun.png";
import longiSolarLogo from "@/assets/brands/longi-solar.png";
import astronergyLogo from "@/assets/brands/astronergy.png";
import aikoLogo from "@/assets/brands/aiko.png";
import risenLogo from "@/assets/brands/risen.png";
import peimarLogo from "@/assets/brands/peimar.png";

const brands = [
  { name: "JA Solar", logo: jaSolarLogo },
  { name: "Jinko Solar", logo: jinkoSolarLogo },
  { name: "Canadian Solar", logo: canadianSolarLogo },
  { name: "Trina Solar", logo: trinaSolarLogo },
  { name: "Sunevo", logo: sunevoLogo },
  { name: "SunPower", logo: sunpowerLogo },
  { name: "Jingsun", logo: jingsunLogo },
  { name: "LONGi Solar", logo: longiSolarLogo },
  { name: "Astronergy", logo: astronergyLogo },
  { name: "Aiko", logo: aikoLogo },
  { name: "Risen", logo: risenLogo },
  { name: "Peimar", logo: peimarLogo },
];

const FvModuliSection = () => {
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
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">
            Fornitura
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Moduli Fotovoltaici
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Brand internazionali selezionati per affidabilità e performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card border border-border shadow-md flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl"
              style={{ borderRadius: "20px", padding: "24px 20px", height: "140px" }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-auto object-contain max-w-[80%]"
                style={{ height: "80px" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FvModuliSection;
