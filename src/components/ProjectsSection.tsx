import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Zap, Calendar } from "lucide-react";
import heroImg1 from "@/assets/hero-solar-1.jpg";
import heroImg2 from "@/assets/hero-solar-2.jpg";
import heroImg3 from "@/assets/hero-solar-3.jpg";

const categories = ["Tutti", "Utility-Scale", "Commerciale", "Industriale"];

const projects = [
  { title: "Impianto Puglia 6MW", category: "Utility-Scale", location: "Puglia, Italia", power: "6 MW", year: "2025", image: heroImg1 },
  { title: "Parco Solare Sicilia", category: "Utility-Scale", location: "Sicilia, Italia", power: "4.5 MW", year: "2024", image: heroImg3 },
  { title: "Copertura Industriale Milano", category: "Industriale", location: "Milano, Italia", power: "1.2 MW", year: "2024", image: heroImg2 },
  { title: "Centro Logistico Roma", category: "Commerciale", location: "Roma, Italia", power: "800 kW", year: "2025", image: heroImg1 },
  { title: "Parco Fotovoltaico Sardegna", category: "Utility-Scale", location: "Sardegna, Italia", power: "8 MW", year: "2025", image: heroImg3 },
  { title: "Stabilimento Veneto", category: "Industriale", location: "Veneto, Italia", power: "2 MW", year: "2024", image: heroImg2 },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("Tutti");
  const filtered = filter === "Tutti" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Progetti</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            I Nostri Lavori
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Scopri alcuni dei progetti realizzati dal nostro team su tutto il territorio nazionale.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-foreground text-lg mb-3">{p.title}</h3>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" />{p.location}</span>
                  <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5" />{p.power}</span>
                  <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" />{p.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
