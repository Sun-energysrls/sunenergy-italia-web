import SubcategoryPageLayout from "@/components/illuminazione/SubcategoryPageLayout";
import domoticaImg from "@/assets/illuminazione/domotica.png";

const DomoticaME = () => (
  <SubcategoryPageLayout
    title="Domotica"
    subtitle="Sistemi e componenti per l'automazione intelligente degli edifici."
    description="La sezione Domotica del materiale elettrico comprende centraline di controllo, attuatori, moduli relè, sensori e interfacce per la gestione intelligente di illuminazione, tapparelle, climatizzazione e sicurezza. Compatibili con i protocolli KNX, Zigbee, Z-Wave e Wi-Fi, offrono integrazione con assistenti vocali e piattaforme cloud. Soluzioni professionali per system integrator, installatori e progettisti che realizzano impianti domotici in ambito residenziale, commerciale e alberghiero."
    categoryName="Domotica"
    image={domoticaImg}
  />
);

export default DomoticaME;
