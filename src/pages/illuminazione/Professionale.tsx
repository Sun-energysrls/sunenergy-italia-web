import { useState } from "react";
import { motion } from "framer-motion";
import {
  Factory, Lightbulb, Zap, Building2, Trophy, AlertTriangle, PartyPopper,
  Sun, Send,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroImg from "@/assets/illuminazione/hero-professionale.png";

const ambiti = [
  { icon: Factory, title: "Illuminazione LED Industriale", desc: "Capannoni, magazzini, aree logistiche e produttive." },
  { icon: Zap, title: "Proiettori LED per Esterni", desc: "Facciate, cantieri, parcheggi e aree sportive." },
  { icon: Building2, title: "Illuminazione LED per Negozi", desc: "Retail, showroom, vetrine e spazi commerciali." },
  { icon: Lightbulb, title: "Pannelli LED Professionali", desc: "Uffici, sale riunioni, ambienti contract." },
  { icon: Zap, title: "Illuminazione LED Stradale", desc: "Strade, piazze, aree urbane e parcheggi pubblici." },
  { icon: Trophy, title: "Illuminazione Sportiva", desc: "Campi sportivi, palestre e impianti agonistici." },
  { icon: AlertTriangle, title: "Luci di Emergenza LED", desc: "Sistemi di sicurezza e segnalazione normati." },
  { icon: PartyPopper, title: "Illuminazione per Eventi", desc: "Fiere, eventi, allestimenti temporanei." },
  { icon: Sun, title: "Energia Solare", desc: "Soluzioni autonome a pannello fotovoltaico integrato." },
];

const Professionale = () => {
  const { toast } = useToast();
  const defaultMessage = "Richiesta informazioni per Illuminazione Professionale";
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
          page: "Richiesta catalogo – Illuminazione Professionale",
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

      {/* Hero with slider-ready image */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-navy-gradient">
        <div className="absolute inset-0 bg-[rgba(5,18,40,0.7)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-orange" />
                <span className="text-orange font-semibold text-sm tracking-[0.2em] uppercase">Professionale</span>
                <div className="h-px w-10 bg-orange" />
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-[1.1] mb-6">
                Illuminazione Professionale
              </h1>
              <p className="text-primary-foreground/75 text-base md:text-lg max-w-xl leading-relaxed">
                Soluzioni illuminotecniche ad alte prestazioni per ambienti industriali, commerciali, sportivi e urbani.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center"
            >
              <img
                src={heroImg}
                alt="Illuminazione professionale"
                className="w-full h-auto max-h-[450px] object-contain rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange/50 to-transparent origin-left z-10"
        />
      </section>

      {/* Ambiti e Soluzioni */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Catalogo</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2">Ambiti e Soluzioni</h2>
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
              Compila il modulo per ricevere il catalogo professionale e una consulenza tecnica personalizzata per il tuo progetto.
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

export default Professionale;
