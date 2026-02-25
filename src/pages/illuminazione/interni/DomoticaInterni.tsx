import SubcategoryPageLayout from "@/components/illuminazione/SubcategoryPageLayout";
import domoticaImg from "@/assets/illuminazione/domotica.png";

const DomoticaInterni = () => (
  <SubcategoryPageLayout
    title="Domotica"
    subtitle="Sistemi intelligenti per il controllo e l'automazione dell'illuminazione."
    description="Le soluzioni di Domotica per illuminazione consentono il controllo intelligente di accensione, dimmerazione e scenari luminosi attraverso dispositivi smart, app e assistenti vocali. Offriamo centraline, moduli dimmer, sensori di presenza e sistemi di gestione integrata compatibili con i principali protocolli (Zigbee, Wi-Fi, KNX). Ideali per installatori e system integrator che progettano impianti residenziali e commerciali di nuova generazione."
    categoryName="Domotica"
    image={domoticaImg}
  />
);

export default DomoticaInterni;
