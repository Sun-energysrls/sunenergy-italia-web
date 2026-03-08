import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, FileText, Barcode, Award, AlertTriangle } from "lucide-react";
import etichettaImg from "@/assets/etichetta-importatore.jpg";

const garanzie = [
  { icon: CheckCircle, text: "Etichetta identificativa permanente con ragione sociale, indirizzo e P.IVA su ogni modulo" },
  { icon: Barcode, text: "Piena tracciabilità del prodotto grazie al numero seriale univoco (barcode) su ogni pannello" },
  { icon: FileText, text: "Documentazione tecnica completa: schede tecniche e rapporti di prova IEC 61215 / IEC 61730" },
  { icon: Award, text: "Marcatura CE conforme alla normativa europea vigente" },
];

const normative = [
  {
    titolo: "Decisione n. 768/2008/CE — Allegato I, Articolo R4 (Obblighi degli importatori)",
    desc: "Gli importatori devono indicare sul prodotto il loro nome, denominazione commerciale o marchio registrato e l'indirizzo. Ciascun prodotto deve riportare un numero di serie o lotto univoco per garantirne la tracciabilità.",
  },
  {
    titolo: "Direttiva 2014/35/UE (Bassa Tensione)",
    desc: "Art. 8, comma 3: il fabbricante o l'importatore devono garantire che il prodotto sia identificabile con nome, marchio registrato e indirizzo sul prodotto stesso o sull'imballaggio.",
  },
  {
    titolo: "D.Lgs. 19 maggio 2016, n. 86 — Art. 10, comma 3 (Recepimento italiano)",
    desc: "Recepisce la Direttiva 2014/35/UE in Italia: il fabbricante o l'importatore devono garantire l'identificabilità del prodotto sul mercato europeo.",
  },
];

const HomeImportatore = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-orange" />
            <span className="text-orange font-semibold text-sm tracking-[0.2em] uppercase">
              Conformità Normativa
            </span>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mt-1">
              <ShieldCheck className="w-6 h-6 text-orange" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-left">
              Importatore Autorizzato e in Regola{" "}
              <span className="text-orange">con la Normativa Europea</span>
            </h2>
          </div>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-4xl">
            Sun-Energy è un importatore ufficiale di moduli fotovoltaici dalla Cina, pienamente
            conforme a tutta la normativa europea e italiana vigente. Su ogni singolo pannello
            fotovoltaico fornito agli installatori, Sun-Energy appone un'etichetta identificativa
            permanente con il proprio nome, ragione sociale, indirizzo{" "}
            <span className="text-foreground font-medium">
              (Via Cecconi 71, 67051 Avezzano (AQ), Italy)
            </span>{" "}
            e numero IVA{" "}
            <span className="text-foreground font-medium">IT02136450661</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Colonna sinistra: testo, garanzie, avvertenza */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Garanzie per gli installatori */}
            <div>
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-6">
                Garanzie per gli installatori
              </h3>
              <div className="space-y-4">
                {garanzie.map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="flex items-start gap-4 bg-muted rounded-xl p-5 border border-border"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-foreground font-medium text-sm md:text-base leading-snug">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Avvertenza */}
            <div className="bg-orange/5 border border-orange/20 rounded-2xl p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-orange" />
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm mb-1">
                  La mancata conformità comporta:
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Blocco della merce in dogana, rigetto da parte del GSE, sanzioni amministrative
                  e ritiro del prodotto dal mercato.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Colonna destra: immagine + riferimenti normativi */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-border overflow-hidden bg-muted"
          >
            {/* Immagine etichetta */}
            <div className="w-full h-[320px] overflow-hidden">
              <img
                src={etichettaImg}
                alt="Etichetta importatore Sun-Energy apposta sui moduli fotovoltaici con logo, ragione sociale, indirizzo e P.IVA"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Riferimenti normativi */}
            <div className="p-4 bg-gray-50">
              <h4 className="font-display text-base font-bold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange" />
                Riferimenti normativi
              </h4>
              <div className="space-y-4">
                {normative.map((n) => (
                  <div key={n.titolo}>
                    <p className="text-foreground font-semibold text-sm">{n.titolo}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-1">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeImportatore;
