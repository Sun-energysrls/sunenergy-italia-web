import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Send, ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PrivacyCheckbox from "@/components/PrivacyCheckbox";

interface SubcategoryPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  categoryName: string;
}

const SubcategoryPageLayout = ({
  title,
  subtitle,
  description,
  image,
  categoryName,
}: SubcategoryPageLayoutProps) => {
  const { toast } = useToast();
  const defaultMessage = `Sono interessato alla categoria ${categoryName} e desidero ricevere il catalogo completo illuminazione.`;
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: defaultMessage,
    honeypot: "",
  });
  const [loading, setLoading] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);

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
          message: form.message.trim(),
          page: `Illuminazione – ${categoryName}`,
        },
      });
      if (error) throw error;

      toast({
        title: "Messaggio inviato!",
        description:
          "Grazie per averci contattato. Il nostro ufficio commerciale ti ricontatterà entro 24 ore.",
      });
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: defaultMessage,
        honeypot: "",
      });
      setPrivacyAccepted(false);
      setPrivacyError(false);
    } catch {
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const update =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-navy-gradient">
        <div className="absolute inset-0 bg-[rgba(5,18,40,0.85)]" />
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
              {title}
            </h1>
            <p className="text-primary-foreground/75 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              {subtitle}
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

      {/* Description + Image */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Panoramica
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">
                {title}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-border bg-muted flex items-center justify-center"
            >
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-contain rounded-2xl"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-muted-foreground">
                  <ImageOff className="w-12 h-12" />
                  <span className="text-sm">Immagine in arrivo</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="section-padding bg-muted">
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
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
              Richiedi il Catalogo Completo Illuminazione 2026
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Compila il modulo per ricevere il catalogo completo e assistenza
              dedicata su questa categoria.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-5"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={form.honeypot}
              onChange={update("honeypot")}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Azienda *
                </label>
                <input
                  required
                  type="text"
                  value={form.company}
                  onChange={update("company")}
                  maxLength={100}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                  placeholder="Nome azienda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Nome *
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  maxLength={100}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  maxLength={255}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                  placeholder="email@esempio.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Telefono
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  maxLength={20}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                  placeholder="+39 ..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Messaggio
              </label>
              <textarea
                value={form.message}
                onChange={update("message")}
                maxLength={1000}
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors resize-none"
              />
            </div>

            <PrivacyCheckbox
              accepted={privacyAccepted}
              onChange={(v) => { setPrivacyAccepted(v); if (v) setPrivacyError(false); }}
              showError={privacyError}
            />

            <button
              type="submit"
              disabled={loading || !privacyAccepted}
              className="flex items-center gap-2 bg-orange text-orange-foreground px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 transition-colors text-sm disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {loading ? "Invio in corso..." : "Invia Richiesta"}
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default SubcategoryPageLayout;
