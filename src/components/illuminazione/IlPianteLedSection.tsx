import { motion } from "framer-motion";
import img1 from "@/assets/illuminazione/piante-led-1.png";
import img2 from "@/assets/illuminazione/piante-led-2.png";
import img3 from "@/assets/illuminazione/piante-led-3.png";
import img4 from "@/assets/illuminazione/piante-led-4.png";
import img5 from "@/assets/illuminazione/piante-led-5.png";

const images = [img1, img2, img3, img4, img5];

const IlPianteLedSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Novità
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <img
                src={src}
                alt={`Piante LED esempio ${i + 1}`}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug mb-5">
            Possiamo dare luce a tutto ciò che ci circonda.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Soluzioni illuminotecniche complete per ambienti residenziali, commerciali e industriali.
            <br />
            Progettazione, fornitura e supporto tecnico dedicato.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IlPianteLedSection;
