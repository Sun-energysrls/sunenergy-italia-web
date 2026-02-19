import CategoryPageLayout from "@/components/illuminazione/CategoryPageLayout";
import heroImg from "@/assets/illuminazione/cat-interni.jpg";

const subcategories = [
  { name: "Downlight LED" },
  { name: "Plafoniere LED" },
  { name: "Pannelli LED" },
  { name: "Strisce LED" },
  { name: "Faretti LED da Binario" },
  { name: "Barre LED Lineari" },
  { name: "Domotica" },
  { name: "Ventilatori da Soffitto" },
  { name: "Lampade e Decorazione LED" },
  { name: "Segnapasso LED" },
  { name: "Applique LED" },
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
