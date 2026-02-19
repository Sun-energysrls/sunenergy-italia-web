import CategoryPageLayout from "@/components/illuminazione/CategoryPageLayout";
import heroImg from "@/assets/illuminazione/cat-materiale.jpg";

const subcategoryGroups = [
  {
    groupTitle: "Cablaggio e Distribuzione",
    items: [
      "Cablaggio e Scatole/Armadi",
      "Cavi Elettrici",
      "Cavi di Rete",
      "Cavi Coassiali",
      "Cassette di Derivazione",
      "Prolunghe Elettriche e Ciabatte",
    ],
  },
  {
    groupTitle: "Interruttori e Protezione",
    items: [
      "Interruttori Modulari",
      "Quadri Elettrici",
      "Interruttori Differenziali",
      "Interruttori Automatici",
      "Interruttori",
      "Spine e Prese",
    ],
  },
  {
    groupTitle: "Componenti e Meccanismi",
    items: [
      "Connettori e Terminali",
      "Meccanismi Elettrici",
      "Componenti da Incasso",
      "Componenti da Superficie",
      "Componenti per Esterni",
      "Meccanismi Simon",
      "Meccanismi Legrand",
      "Meccanismi BTicino",
    ],
  },
  {
    groupTitle: "Domotica e Sicurezza",
    items: [
      "Domotica",
      "Dispositivi di Controllo Domestico",
      "Videocitofoni e Citofoni",
      "Sicurezza",
    ],
  },
];

const MaterialeElettrico = () => (
  <CategoryPageLayout
    heroImage={heroImg}
    heroTitle="Materiale Elettrico"
    heroSubtitle="Componentistica professionale per impianti sicuri e certificati."
    subcategoryGroups={subcategoryGroups}
  />
);

export default MaterialeElettrico;
