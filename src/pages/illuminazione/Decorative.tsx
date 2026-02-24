import CategoryPageLayout from "@/components/illuminazione/CategoryPageLayout";
import heroImg from "@/assets/illuminazione/cat-decorative.jpg";

const subcategories = [
  { name: "Illuminazione Soggiorno", link: "/illuminazione/decorative/soggiorno" },
  { name: "Illuminazione Camera da Letto", link: "/illuminazione/decorative/camera-da-letto" },
  { name: "Illuminazione Cucina", link: "/illuminazione/decorative/cucina" },
  { name: "Illuminazione Terrazzo", link: "/illuminazione/decorative/terrazzo" },
  { name: "Illuminazione Giardino", link: "/illuminazione/decorative/giardino" },
  { name: "Illuminazione Bagno", link: "/illuminazione/decorative/bagno" },
  { name: "Illuminazione Scale", link: "/illuminazione/decorative/scale" },
  { name: "Illuminazione Garage", link: "/illuminazione/decorative/garage" },
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
