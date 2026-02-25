import SubcategoryPageLayout from "@/components/illuminazione/SubcategoryPageLayout";
import ventilatoriImg from "@/assets/illuminazione/ventilatori-da-soffitto.jpg";

const VentilatoriSoffitto = () => (
  <SubcategoryPageLayout
    title="Ventilatori da Soffitto"
    subtitle="Ventilazione e illuminazione integrata per ambienti residenziali e commerciali."
    description="I Ventilatori da Soffitto con luce LED integrata combinano comfort climatico e illuminazione in un unico apparecchio. Disponibili in diverse dimensioni, finiture e stili – dal design moderno al classico – offrono funzioni di reversibilità del flusso d'aria, telecomando e compatibilità domotica. Soluzione ideale per abitazioni, ristoranti, hotel e spazi commerciali dove ventilazione naturale e risparmio energetico sono priorità."
    categoryName="Ventilatori da Soffitto"
    image={ventilatoriImg}
  />
);

export default VentilatoriSoffitto;
