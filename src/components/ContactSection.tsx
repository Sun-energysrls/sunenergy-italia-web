import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "", honeypot: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return; // anti-spam

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          page: "Contatti",
        },
      });

      if (error) throw error;

      toast({
        title: "Messaggio inviato!",
        description: "Grazie per averci contattato. Il nostro ufficio commerciale ti ricontatterà entro 24 ore.",
      });
      setForm({ name: "", company: "", email: "", phone: "", message: "", honeypot: "" });
    } catch (err) {
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Contatti</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Contattaci
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hai un progetto in mente? Contattaci per una consulenza gratuita.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Honeypot */}
            <input type="text" name="website" value={form.honeypot} onChange={update("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nome *</label>
                <input required type="text" value={form.name} onChange={update("name")} maxLength={100}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                  placeholder="Il tuo nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Azienda *</label>
                <input required type="text" value={form.company} onChange={update("company")} maxLength={100}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                  placeholder="Nome azienda" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                <input required type="email" value={form.email} onChange={update("email")} maxLength={255}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                  placeholder="email@esempio.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Telefono</label>
                <input type="tel" value={form.phone} onChange={update("phone")} maxLength={20}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                  placeholder="+39 ..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Descrizione Progetto *</label>
              <textarea required value={form.message} onChange={update("message")} maxLength={1000} rows={5}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors resize-none"
                placeholder="Descrivi il tuo progetto..." />
            </div>
            <button type="submit" disabled={loading}
              className="flex items-center gap-2 bg-orange text-orange-foreground px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 transition-colors text-sm disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {loading ? "Invio in corso..." : "Invia Messaggio"}
            </button>
          </motion.form>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <a href="tel:+393338590639" className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Telefono</p>
                  <p className="text-muted-foreground text-sm">+39 333 859 0639</p>
                </div>
              </a>
              <a href="mailto:s.energysrls@gmail.com" className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">s.energysrls@gmail.com</p>
                </div>
              </a>
              <a href="mailto:sun-energysrls@pec.it" className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium">PEC</p>
                  <p className="text-muted-foreground text-sm">sun-energysrls@pec.it</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-foreground">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Sede Legale</p>
                  <p className="text-muted-foreground text-sm">Via Cecconi 71<br />67051 Avezzano (AQ)</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-64">
              <iframe
                title="Sede SunEnergy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.5!2d13.4263!3d42.0308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1332e2e1f1f1f1f1%3A0x1!2sVia+Cecconi+71%2C+67051+Avezzano+AQ!5e0!3m2!1sit!2sit!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
