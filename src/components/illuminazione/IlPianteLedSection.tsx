import { motion } from "framer-motion";
import img1 from "@/assets/illuminazione/piante-led-1.png";
import img2 from "@/assets/illuminazione/piante-led-2.png";
import img3 from "@/assets/illuminazione/piante-led-3.png";

const images = [img1, img2, img3];

const IlPianteLedSection = () => {
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
            Soluzioni decorative ad alto impatto estetico per ambienti commerciali e hospitality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <img
                src={src}
                alt={`Piante LED esempio ${i + 1}`}
                className="w-full h-[280px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IlPianteLedSection;
