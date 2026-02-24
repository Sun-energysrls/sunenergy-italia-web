import CategoryPageLayout from "@/components/illuminazione/CategoryPageLayout";
import heroImg from "@/assets/illuminazione/cat-professionale.jpg";

const subcategories = [
  { name: "Illuminazione LED Industriale", link: "/illuminazione/professionale/illuminazione-industriale" },
  { name: "Proiettori LED per Esterni", link: "/illuminazione/professionale/proiettori-led" },
  { name: "Illuminazione LED per Negozi", link: "/illuminazione/professionale/illuminazione-negozi" },
  { name: "Pannelli LED", link: "/illuminazione/professionale/pannelli-led" },
  { name: "Illuminazione LED Stradale", link: "/illuminazione/professionale/illuminazione-stradale" },
  { name: "Illuminazione Sportiva", link: "/illuminazione/professionale/illuminazione-sportiva" },
  { name: "Luci di Emergenza LED", link: "/illuminazione/professionale/luci-emergenza" },
  { name: "Illuminazione per Eventi", link: "/illuminazione/professionale/illuminazione-eventi" },
  { name: "Energia Solare", link: "/illuminazione/professionale/energia-solare" },
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
