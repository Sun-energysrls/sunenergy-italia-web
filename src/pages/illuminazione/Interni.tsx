import CategoryPageLayout from "@/components/illuminazione/CategoryPageLayout";
import heroImg from "@/assets/illuminazione/cat-interni.jpg";

const subcategories = [
  { name: "Downlight LED", link: "/illuminazione/interni/downlight-led" },
  { name: "Plafoniere LED", link: "/illuminazione/interni/plafoniere-led" },
  { name: "Pannelli LED", link: "/illuminazione/interni/pannelli-led" },
  { name: "Strisce LED", link: "/illuminazione/interni/strisce-led" },
  { name: "Faretti LED da Binario", link: "/illuminazione/interni/faretti-led-binario" },
  { name: "Barre LED Lineari", link: "/illuminazione/interni/barre-led-lineari" },
  { name: "Domotica", link: "/illuminazione/interni/domotica" },
  { name: "Ventilatori da Soffitto", link: "/illuminazione/interni/ventilatori-soffitto" },
  { name: "Lampade e Decorazione LED", link: "/illuminazione/interni/lampade-decorazione-led" },
  { name: "Segnapasso LED", link: "/illuminazione/interni/segnapasso-led" },
  { name: "Applique LED", link: "/illuminazione/interni/applique-led" },
];

const Interni = () => (
  <CategoryPageLayout
    heroImage={heroImg}
    heroTitle="Illuminazione per Interni"
    heroSubtitle="Soluzioni LED per ambienti residenziali e commerciali."
    subcategories={subcategories}
  />
);

export default Interni;
