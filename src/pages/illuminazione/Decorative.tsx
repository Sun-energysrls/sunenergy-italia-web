import CategoryPageLayout from "@/components/illuminazione/CategoryPageLayout";
import heroImg from "@/assets/illuminazione/cat-decorative.jpg";

const subcategories = [
  { name: "Illuminazione Soggiorno" },
  { name: "Illuminazione Camera da Letto" },
  { name: "Illuminazione Cucina" },
  { name: "Illuminazione Terrazzo" },
  { name: "Illuminazione Giardino" },
  { name: "Illuminazione Bagno" },
  { name: "Illuminazione Scale" },
  { name: "Illuminazione Garage" },
];

const Decorative = () => (
  <CategoryPageLayout
    heroImage={heroImg}
    heroTitle="Luci Decorative"
    heroSubtitle="Design e atmosfera per ogni ambiente."
    subcategories={subcategories}
  />
);

export default Decorative;
