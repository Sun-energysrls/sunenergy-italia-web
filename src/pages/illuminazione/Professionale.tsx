import CategoryPageLayout from "@/components/illuminazione/CategoryPageLayout";
import heroImg from "@/assets/illuminazione/cat-professionale.jpg";

const subcategories = [
  { name: "Illuminazione LED Industriale" },
  { name: "Proiettori LED per Esterni" },
  { name: "Illuminazione LED per Negozi" },
  { name: "Pannelli LED" },
  { name: "Illuminazione LED Stradale" },
  { name: "Illuminazione Sportiva" },
  { name: "Luci di Emergenza LED" },
  { name: "Illuminazione per Eventi" },
  { name: "Energia Solare" },
];

const Professionale = () => (
  <CategoryPageLayout
    heroImage={heroImg}
    heroTitle="Illuminazione Professionale"
    heroSubtitle="Soluzioni ad alte prestazioni per ambienti industriali e commerciali."
    subcategories={subcategories}
  />
);

export default Professionale;
