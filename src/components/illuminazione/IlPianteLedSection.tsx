import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "@/assets/illuminazione/piante-led-1.png";
import img2 from "@/assets/illuminazione/piante-led-2.png";
import img3 from "@/assets/illuminazione/piante-led-3.png";
import img4 from "@/assets/illuminazione/piante-led-4.png";
import img5 from "@/assets/illuminazione/piante-led-5.png";

const images = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

const IlPianteLedSection = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Novità
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Novità: Piante LED
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Soluzioni decorative ad alto impatto estetico per ambienti commerciali, retail e hospitality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_31.5%] min-w-0"
                >
                  <div className="rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-400 group">
                    <img
                      src={src}
                      alt={`Piante LED esempio ${(i % 5) + 1}`}
                      className="w-full h-[320px] object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IlPianteLedSection;
