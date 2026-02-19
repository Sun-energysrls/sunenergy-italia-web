import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import huaweiLogo from "@/assets/brands/huawei.png";
import zucchettiLogo from "@/assets/brands/zucchetti.png";
import solisLogo from "@/assets/brands/solis.png";
import solaxLogo from "@/assets/brands/solax.png";
import smaLogo from "@/assets/brands/sma.png";
import sungrowLogo from "@/assets/brands/sungrow.png";
import growattLogo from "@/assets/brands/growatt.png";
import deyeLogo from "@/assets/brands/deye.png";
import livoltekLogo from "@/assets/brands/livoltek.png";
import sunarkLogo from "@/assets/brands/sunark.png";
import sunketLogo from "@/assets/brands/sunket.png";
import froniusLogo from "@/assets/brands/fronius.png";
import solaredgeLogo from "@/assets/brands/solaredge.png";
import pylontechLogo from "@/assets/brands/pylontech.png";

const brands = [
  { name: "HUAWEI", logo: huaweiLogo },
  { name: "ZUCCHETTI", logo: zucchettiLogo },
  { name: "SOLIS", logo: solisLogo },
  { name: "SOLAX", logo: solaxLogo },
  { name: "SMA", logo: smaLogo },
  { name: "SUNGROW", logo: sungrowLogo },
  { name: "GROWATT", logo: growattLogo },
  { name: "DEYE", logo: deyeLogo },
  { name: "LIVOLTEK", logo: livoltekLogo },
  { name: "SUNARK", logo: sunarkLogo },
  { name: "SUNKET", logo: sunketLogo },
  { name: "FRONIUS", logo: froniusLogo },
  { name: "SOLAREDGE", logo: solaredgeLogo },
  { name: "PYLONTECH", logo: pylontechLogo },
];

const FvInverterSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const step = () => {
      if (!isPaused && el) {
        scrollPos += speed;
        // Reset when first set is fully scrolled
        if (scrollPos >= el.scrollWidth / 2) {
          scrollPos = 0;
        }
        el.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate brands for infinite loop
  const duplicated = [...brands, ...brands];

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
            Componenti
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Inverter e Sistemi di Accumulo
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Soluzioni affidabili per gestione, conversione e accumulo dell'energia.
          </p>
        </motion.div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="overflow-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-6" style={{ width: "max-content" }}>
            {duplicated.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="bg-card border border-border shadow-md flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl shrink-0"
                style={{
                  borderRadius: "20px",
                  padding: "24px 28px",
                  height: "140px",
                  width: "calc((100vw - 8rem) / 5)",
                  minWidth: "180px",
                  maxWidth: "260px",
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-auto object-contain max-w-[75%]"
                  style={{ height: "clamp(50px, 6vw, 75px)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FvInverterSection;
