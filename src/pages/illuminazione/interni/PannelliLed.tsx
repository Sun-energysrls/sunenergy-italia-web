import SubcategoryPageLayout from "@/components/illuminazione/SubcategoryPageLayout";
import pannelliImg from "@/assets/illuminazione/pannelli-led.png";

const PannelliLed = () => (
  <SubcategoryPageLayout
    title="Pannelli LED"
    subtitle="Illuminazione professionale da incasso e superficie per uffici e spazi commerciali."
    description="I Pannelli LED rappresentano la soluzione standard per l'illuminazione professionale di uffici, negozi, ambulatori e spazi commerciali. Disponibili nei formati 60x60, 120x30, 120x60 e altre dimensioni personalizzate, offrono luce uniforme, elevato comfort visivo e basso consumo energetico. Compatibili con controsoffitti modulari e installazioni a superficie, sono certificati per l'uso in ambienti professionali e conformi alle normative vigenti."
    categoryName="Pannelli LED"
    image={pannelliImg}
  />
);

export default PannelliLed;
