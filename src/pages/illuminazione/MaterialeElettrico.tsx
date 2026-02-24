import CategoryPageLayout from "@/components/illuminazione/CategoryPageLayout";
import heroImg from "@/assets/illuminazione/cat-materiale.jpg";

const subcategoryGroups = [
  {
    groupTitle: "Cablaggio e Distribuzione",
    items: [
      { name: "Cablaggio e Scatole/Armadi", link: "/illuminazione/materiale-elettrico/cablaggio-scatole-armadi" },
      { name: "Cavi Elettrici", link: "/illuminazione/materiale-elettrico/cavi-elettrici" },
      { name: "Cavi di Rete", link: "/illuminazione/materiale-elettrico/cavi-rete" },
      { name: "Cavi Coassiali", link: "/illuminazione/materiale-elettrico/cavi-coassiali" },
      { name: "Cassette di Derivazione", link: "/illuminazione/materiale-elettrico/cassette-derivazione" },
      { name: "Prolunghe Elettriche e Ciabatte", link: "/illuminazione/materiale-elettrico/prolunghe-ciabatte" },
    ],
  },
  {
    groupTitle: "Interruttori e Protezione",
    items: [
      { name: "Interruttori Modulari e Quadri Elettrici", link: "/illuminazione/materiale-elettrico/interruttori-modulari-quadri" },
      { name: "Interruttori Differenziali", link: "/illuminazione/materiale-elettrico/interruttori-differenziali" },
      { name: "Interruttori Automatici", link: "/illuminazione/materiale-elettrico/interruttori-automatici" },
      { name: "Interruttori", link: "/illuminazione/materiale-elettrico/interruttori" },
      { name: "Spine e Prese", link: "/illuminazione/materiale-elettrico/spine-prese" },
    ],
  },
  {
    groupTitle: "Componenti e Meccanismi",
    items: [
      { name: "Connettori e Terminali", link: "/illuminazione/materiale-elettrico/connettori-terminali" },
      { name: "Vedere Componenti Elettrici", link: "/illuminazione/materiale-elettrico/componenti-elettrici" },
      { name: "Meccanismi Elettrici", link: "/illuminazione/materiale-elettrico/meccanismi-elettrici" },
      { name: "Componenti Elettrici da Incasso", link: "/illuminazione/materiale-elettrico/componenti-incasso" },
      { name: "Componenti Elettrici da Superficie", link: "/illuminazione/materiale-elettrico/componenti-superficie" },
      { name: "Componenti Elettrici per Esterni", link: "/illuminazione/materiale-elettrico/componenti-esterni" },
      { name: "Meccanismi Simon", link: "/illuminazione/materiale-elettrico/meccanismi-simon" },
      { name: "Meccanismi Legrand", link: "/illuminazione/materiale-elettrico/meccanismi-legrand" },
      { name: "Meccanismi BTicino", link: "/illuminazione/materiale-elettrico/meccanismi-bticino" },
    ],
  },
  {
    groupTitle: "Domotica e Sicurezza",
    items: [
      { name: "Domotica", link: "/illuminazione/materiale-elettrico/domotica" },
      { name: "Dispositivi di Controllo Domestico", link: "/illuminazione/materiale-elettrico/dispositivi-controllo-domestico" },
      { name: "Videocitofoni e Citofoni", link: "/illuminazione/materiale-elettrico/videocitofoni-citofoni" },
      { name: "Sicurezza", link: "/illuminazione/materiale-elettrico/sicurezza" },
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
