import { motion } from "framer-motion";
import { Leaf, Award, Cpu, Globe } from "lucide-react";
import heroImg2 from "@/assets/hero-solar-2.jpg";

const values = [
  { icon: Leaf, title: "Sostenibilità", desc: "Impegno concreto per un futuro energetico pulito e rinnovabile." },
  { icon: Award, title: "Qualità", desc: "Standard elevati in ogni fase, dalla progettazione alla messa in opera." },
  { icon: Cpu, title: "Competenza Tecnica", desc: "Team di ingegneri specializzati in impianti utility-scale." },
  { icon: Globe, title: "Portata Internazionale", desc: "Operazioni di import/export con partner globali qualificati." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Chi Siamo</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            SunEnergy SRLS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Leader nel settore fotovoltaico utility-scale, operiamo in Italia e a livello internazionale 
            con soluzioni complete per la produzione di energia solare.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              La Nostra Missione
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              SunEnergy SRLS nasce con la missione di accelerare la transizione energetica attraverso 
              impianti fotovoltaici di grande scala. Con anni di esperienza nel settore, offriamo 
              servizi completi che spaziano dalla progettazione all'installazione, dall'import/export 
              di componenti all'assistenza tecnica continuativa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Operiamo su tutto il territorio nazionale e collaboriamo con partner internazionali 
              per garantire ai nostri clienti le migliori tecnologie disponibili sul mercato, 
              con un focus costante su qualità, efficienza e sostenibilità.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img src={heroImg2} alt="Installazione SunEnergy" className="w-full h-80 object-cover" />
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-secondary/30 transition-all"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2">{v.title}</h4>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
