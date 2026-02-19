import { motion } from "framer-motion";
import { ArrowRight, Phone, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SubcategoryItem {
  name: string;
}

interface SubcategoryGroup {
  groupTitle: string;
  items: string[];
}

interface CategoryPageLayoutProps {
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  subcategories?: SubcategoryItem[];
  subcategoryGroups?: SubcategoryGroup[];
}

const CategoryPageLayout = ({
  heroImage,
  heroTitle,
  heroSubtitle,
  subcategories,
  subcategoryGroups,
}: CategoryPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={heroTitle}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(5,18,40,0.6)]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-orange" />
              <span className="text-orange font-semibold text-sm tracking-[0.2em] uppercase">
                Illuminazione
              </span>
              <div className="h-px w-10 bg-orange" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6">
              {heroTitle}
            </h1>
            <p className="text-primary-foreground/75 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange/50 to-transparent origin-left z-10"
        />
      </section>

      {/* Subcategories */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Catalogo
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Sottocategorie
            </h2>
          </motion.div>

          {/* Simple list layout */}
          {subcategories && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
              {subcategories.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center gap-4 py-4 px-5 rounded-xl border border-transparent hover:border-border hover:bg-muted/50 transition-all group cursor-default"
                >
                  <ChevronRight className="w-4 h-4 text-orange shrink-0" />
                  <span className="text-foreground font-medium text-base group-hover:text-secondary transition-colors">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Grouped layout for Materiale Elettrico */}
          {subcategoryGroups && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {subcategoryGroups.map((group, gi) => (
                <motion.div
                  key={group.groupTitle}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: gi * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-6 bg-orange" />
                    <h3 className="font-display font-bold text-foreground text-lg uppercase tracking-wide">
                      {group.groupTitle}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {group.items.map((item, ii) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-muted/50 transition-all group cursor-default"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-orange shrink-0" />
                        <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-gradient text-primary-foreground">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Hai bisogno di supporto tecnico o preventivo personalizzato?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition-all text-sm md:text-base shadow-lg shadow-orange/25"
              >
                Richiedi Preventivo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+393338590639"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all text-sm md:text-base"
              >
                <Phone className="w-4 h-4" />
                Contattaci
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPageLayout;
