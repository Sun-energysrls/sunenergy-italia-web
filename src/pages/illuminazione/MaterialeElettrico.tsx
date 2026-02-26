import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Cable, Plug, Wifi, Shield, Monitor, CircuitBoard, Send,
  ToggleRight, Boxes, Gauge, ChevronLeft, ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PrivacyCheckbox from "@/components/PrivacyCheckbox";
import heroImg from "@/assets/illuminazione/hero-materiale-elettrico.png";
import slide1 from "@/assets/illuminazione/interruttore-elettrico.png";
import slide2 from "@/assets/illuminazione/materiale-elettrico-2.png";
import slide3 from "@/assets/illuminazione/materiale-elettrico-3.png";
import slide4 from "@/assets/illuminazione/materiale-elettrico-4.png";
import slide5 from "@/assets/illuminazione/materiale-elettrico-5.png";

import maxgeLogo from "@/assets/brands/maxge.png";
import siemensLogo from "@/assets/brands/siemens.png";
import threemLogo from "@/assets/brands/3m.png";
import bticinoLogo from "@/assets/brands/bticino.png";

const meBrands = [
  { name: "Maxge", logo: maxgeLogo },
  { name: "Siemens", logo: siemensLogo },
  { name: "3M", logo: threemLogo },
  { name: "BTicino", logo: bticinoLogo },
];

const slides = [slide1, slide2, slide3, slide4, slide5];

const ambiti = [
  { icon: Cable, title: "Cavi Elettrici e Coassiali", desc: "Cavi di potenza, rete e coassiali certificati." },
  { icon: Boxes, title: "Cablaggio e Armadi", desc: "Scatole, armadi, cassette di derivazione." },
  { icon: ToggleRight, title: "Interruttori e Protezione", desc: "Modulari, differenziali, automatici." },
  { icon: Plug, title: "Spine, Prese e Prolunghe", desc: "Connessioni civili e industriali certificate." },
  { icon: CircuitBoard, title: "Connettori e Terminali", desc: "Morsetti, capicorda e connessioni rapide." },
  { icon: Gauge, title: "Componenti Elettrici", desc: "Incasso, superficie, esterni e meccanismi." },
  { icon: Cable, title: "Meccanismi Simon / Legrand / BTicino", desc: "Placche, frutti e serie civili premium." },
  { icon: Wifi, title: "Domotica e Controllo", desc: "Automazione domestica e dispositivi smart." },
  { icon: Monitor, title: "Videocitofoni e Citofoni", desc: "Sistemi audio/video per edifici residenziali." },
  { icon: Shield, title: "Sicurezza", desc: "Allarmi, sensori e sistemi di protezione." },
];

const Materiale = () => {
  const { toast } = useToast();
  const defaultMessage = "Richiesta informazioni per Materiale Elettrico";
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", ambito: "", message: defaultMessage, honeypot: "",
  });
  const [loading, setLoading] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = sliderRef.current.offsetWidth * 0.7;
    sliderRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    if (!privacyAccepted) {
      setPrivacyError(true);
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: `[Ambito: ${form.ambito || "Non specificato"}] ${form.message.trim()}`,
          page: "Richiesta catalogo – Materiale Elettrico",
        },
      });
      if (error) throw error;
      toast({ title: "Messaggio inviato!", description: "Il nostro ufficio commerciale ti ricontatterà entro 24 ore." });
      setForm({ name: "", company: "", email: "", phone: "", ambito: "", message: defaultMessage, honeypot: "" });
      setPrivacyAccepted(false);
      setPrivacyError(false);
    } catch {
      toast({ title: "Errore", description: "Si è verificato un errore. Riprova più tardi.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const inputCls = "w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero – Full-width background */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(5,18,40,0.65)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-orange" />
              <span className="text-orange font-semibold text-sm tracking-[0.2em] uppercase">Materiale Elettrico</span>
              <div className="h-px w-10 bg-orange" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6">
              Materiale Elettrico
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Componentistica professionale per impianti elettrici sicuri e certificati. Distribuzione B2B di cavi, interruttori, meccanismi e sistemi di protezione.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange/50 to-transparent origin-left z-10"
        />
      </section>

      {/* Brand Section */}
      <section className="section-padding bg-muted overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Partner</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              I Nostri Brand
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center max-w-5xl mx-auto">
            {meBrands.map((brand) => (
              <div
                key={brand.name}
                className="w-[280px] md:w-[240px] lg:w-[260px] bg-card border border-border shadow-md flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl"
                style={{ borderRadius: "20px", padding: "32px 36px", height: "160px" }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-auto object-contain max-w-[70%]"
                  style={{ height: "80px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slider – Floating PNG Products */}
      <section className="section-padding" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Prodotti</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">I Nostri Prodotti</h2>
          </motion.div>

          <div className="relative">
            <button onClick={() => scroll("left")} className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-md items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button onClick={() => scroll("right")} className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-md items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            <div
              ref={sliderRef}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 items-center"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {slides.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex-shrink-0 w-[60%] sm:w-[40%] lg:w-[25%] snap-center flex items-center justify-center"
                >
                  <motion.img
                    src={src}
                    alt={`Materiale elettrico ${i + 1}`}
                    className="w-full h-auto max-h-64 object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ambiti */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Catalogo</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2">Ambiti e Prodotti</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ambiti.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <a.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm">{a.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Catalogo</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
              Richiedi catalogo completo e consulenza dedicata
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Compila il modulo per ricevere il catalogo materiale elettrico e una consulenza tecnica per le tue esigenze impiantistiche.
            </p>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto space-y-5">
            <input type="text" name="website" value={form.honeypot} onChange={update("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nome *</label>
                <input required type="text" value={form.name} onChange={update("name")} maxLength={100} className={inputCls} placeholder="Il tuo nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Azienda *</label>
                <input required type="text" value={form.company} onChange={update("company")} maxLength={100} className={inputCls} placeholder="Nome azienda" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                <input required type="email" value={form.email} onChange={update("email")} maxLength={255} className={inputCls} placeholder="email@esempio.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Telefono</label>
                <input type="tel" value={form.phone} onChange={update("phone")} maxLength={20} className={inputCls} placeholder="+39 ..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Ambito di interesse</label>
              <select value={form.ambito} onChange={update("ambito")} className={inputCls}>
                <option value="">Seleziona un ambito...</option>
                {ambiti.map((a) => (
                  <option key={a.title} value={a.title}>{a.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Messaggio</label>
              <textarea value={form.message} onChange={update("message")} maxLength={1000} rows={4} className={`${inputCls} resize-none`} />
            </div>
            <PrivacyCheckbox
              accepted={privacyAccepted}
              onChange={(v) => { setPrivacyAccepted(v); if (v) setPrivacyError(false); }}
              showError={privacyError}
            />
            <button type="submit" disabled={loading || !privacyAccepted} className="flex items-center gap-2 bg-orange text-orange-foreground px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 transition-colors text-sm disabled:opacity-50">
              <Send className="w-4 h-4" />
              {loading ? "Invio in corso..." : "Invia Richiesta"}
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Materiale;
