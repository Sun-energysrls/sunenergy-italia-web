import CategoryPageLayout from "@/components/illuminazione/CategoryPageLayout";
import heroImg from "@/assets/illuminazione/cat-esterni.jpg";

const subcategories = [
  { name: "Proiettori LED per Esterni", link: "/illuminazione/esterni/proiettori-led" },
  { name: "Segnapasso LED per Esterni", link: "/illuminazione/esterni/segnapasso-led" },
  { name: "Applique LED per Esterni", link: "/illuminazione/esterni/applique-led" },
  { name: "Plafoniere LED per Esterni", link: "/illuminazione/esterni/plafoniere-led" },
  { name: "Strisce LED per Esterni", link: "/illuminazione/esterni/strisce-led" },
  { name: "Illuminazione LED Stradale", link: "/illuminazione/esterni/illuminazione-stradale" },
  { name: "Faretti LED per Piscine", link: "/illuminazione/esterni/faretti-piscine" },
  { name: "Lampade per Esterni", link: "/illuminazione/esterni/lampade" },
];

const Esterni = () => (
  <CategoryPageLayout
    heroImage={heroImg}
    heroTitle="Illuminazione per Esterni"
    heroSubtitle="Illuminazione architettonica, residenziale e urbana."
    subcategories={subcategories}
  />
);

export default Esterni;
