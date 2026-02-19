import { motion } from "framer-motion";
import bannerImg from "@/assets/fv-banner-solar-farm.jpg";

const FvBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden"
    >
      <img
        src={bannerImg}
        alt="Impianto fotovoltaico utility-scale"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,18,40,0.25)] via-transparent to-[rgba(5,18,40,0.35)]" />
    </motion.section>
  );
};

export default FvBanner;
