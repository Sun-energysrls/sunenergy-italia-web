import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cable, Plug, Wifi, Shield, Monitor, CircuitBoard, Send,
  ToggleRight, Boxes, Gauge,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroImg from "@/assets/illuminazione/hero-materiale-elettrico.png";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
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

      {/* Hero – Floating Premium */}
      <section className="relative overflow-visible bg-[hsl(0,0%,97%)]">
        <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-orange" />
                <span className="text-orange font-semibold text-sm tracking-[0.2em] uppercase">Materiale Elettrico</span>
                <div className="h-px w-10 bg-orange" />
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
                Materiale Elettrico
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
                Componentistica professionale per impianti elettrici sicuri e certificati. Distribuzione B2B di cavi, interruttori, meccanismi e sistemi di protezione.
              </p>
            </motion.div>

            {/* Floating product image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center"
            >
              <motion.img
                src={heroImg}
                alt="Materiale Elettrico"
                className="w-full max-w-md h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
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
            <button type="submit" disabled={loading} className="flex items-center gap-2 bg-orange text-orange-foreground px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 transition-colors text-sm disabled:opacity-50">
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
