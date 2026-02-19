import CategoryPageLayout from "@/components/illuminazione/CategoryPageLayout";
import heroImg from "@/assets/illuminazione/cat-esterni.jpg";

const subcategories = [
  { name: "Proiettori LED per Esterni" },
  { name: "Segnapasso LED per Esterni" },
  { name: "Applique LED per Esterni" },
  { name: "Plafoniere LED per Esterni" },
  { name: "Strisce LED per Esterni" },
  { name: "Illuminazione LED Stradale" },
  { name: "Faretti LED per Piscine" },
  { name: "Lampade per Esterni" },
  { name: "Ghirlande Luminose LED Decorative" },
  { name: "Mobili LED per Esterni" },
  { name: "Illuminazione LED Solare" },
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
