import { motion } from "framer-motion";
import philipsLogo from "@/assets/brands/philips.png";
import samsungLogo from "@/assets/brands/samsung.png";
import osramLogo from "@/assets/brands/osram.png";

const brands = [
  { name: "Philips", logo: philipsLogo },
  { name: "Samsung", logo: samsungLogo },
  { name: "Osram", logo: osramLogo },
];

const IlBrandSection = () => {
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
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Partner
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            I Nostri Brand Illuminotecnici
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Collaborazioni con produttori leader nel settore lighting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center max-w-4xl mx-auto">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full bg-card border border-border shadow-md flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl"
              style={{ borderRadius: "20px", padding: "24px 20px", height: "140px" }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-auto object-contain max-w-[70%]"
                style={{ height: "80px" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IlBrandSection;
