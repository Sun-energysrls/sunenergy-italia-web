import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Fotovoltaico from "./pages/Fotovoltaico";
import Illuminazione from "./pages/Illuminazione";
import Interni from "./pages/illuminazione/Interni";
import Esterni from "./pages/illuminazione/Esterni";
import Professionale from "./pages/illuminazione/Professionale";
import Decorative from "./pages/illuminazione/Decorative";
import MaterialeElettrico from "./pages/illuminazione/MaterialeElettrico";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// Interni subcategories
import DownlightLed from "./pages/illuminazione/interni/DownlightLed";
import PlafoniereLed from "./pages/illuminazione/interni/PlafoniereLed";
import PannelliLed from "./pages/illuminazione/interni/PannelliLed";
import StrisceLed from "./pages/illuminazione/interni/StrisceLed";
import FarettiLedBinario from "./pages/illuminazione/interni/FarettiLedBinario";
import BarreLedLineari from "./pages/illuminazione/interni/BarreLedLineari";
import DomoticaInterni from "./pages/illuminazione/interni/DomoticaInterni";
import VentilatoriSoffitto from "./pages/illuminazione/interni/VentilatoriSoffitto";
import LampadeDecorazioneLed from "./pages/illuminazione/interni/LampadeDecorazioneLed";
import SegnapassoLed from "./pages/illuminazione/interni/SegnapassoLed";
import AppliqueLed from "./pages/illuminazione/interni/AppliqueLed";

// Esterni subcategories
import ProiettoriLedEsterni from "./pages/illuminazione/esterni/ProiettoriLedEsterni";
import SegnapassoLedEsterni from "./pages/illuminazione/esterni/SegnapassoLedEsterni";
import AppliqueLedEsterni from "./pages/illuminazione/esterni/AppliqueLedEsterni";
import PlafoniereLedEsterni from "./pages/illuminazione/esterni/PlafoniereLedEsterni";
import StrisceLedEsterni from "./pages/illuminazione/esterni/StrisceLedEsterni";
import IlluminazioneLedStradale from "./pages/illuminazione/esterni/IlluminazioneLedStradale";
import FarettiLedPiscine from "./pages/illuminazione/esterni/FarettiLedPiscine";
import LampadeEsterni from "./pages/illuminazione/esterni/LampadeEsterni";
import GhirlandeLuminose from "./pages/illuminazione/esterni/GhirlandeLuminose";
import MobiliLedEsterni from "./pages/illuminazione/esterni/MobiliLedEsterni";
import IlluminazioneLedSolare from "./pages/illuminazione/esterni/IlluminazioneLedSolare";

// Professionale subcategories
import IlluminazioneLedIndustriale from "./pages/illuminazione/professionale/IlluminazioneLedIndustriale";
import ProiettoriLedProfessionale from "./pages/illuminazione/professionale/ProiettoriLedProfessionale";
import IlluminazioneLedNegozi from "./pages/illuminazione/professionale/IlluminazioneLedNegozi";
import PannelliLedProfessionale from "./pages/illuminazione/professionale/PannelliLedProfessionale";
import IlluminazioneLedStradaleProfessionale from "./pages/illuminazione/professionale/IlluminazioneLedStradaleProfessionale";
import IlluminazioneSportiva from "./pages/illuminazione/professionale/IlluminazioneSportiva";
import LuciEmergenzaLed from "./pages/illuminazione/professionale/LuciEmergenzaLed";
import IlluminazioneEventi from "./pages/illuminazione/professionale/IlluminazioneEventi";
import EnergiaSolare from "./pages/illuminazione/professionale/EnergiaSolare";

// Decorative subcategories
import IlluminazioneSoggiorno from "./pages/illuminazione/decorative/IlluminazioneSoggiorno";
import IlluminazioneCameraDaLetto from "./pages/illuminazione/decorative/IlluminazioneCameraDaLetto";
import IlluminazioneCucina from "./pages/illuminazione/decorative/IlluminazioneCucina";
import IlluminazioneTerrazzo from "./pages/illuminazione/decorative/IlluminazioneTerrazzo";
import IlluminazioneGiardino from "./pages/illuminazione/decorative/IlluminazioneGiardino";
import IlluminazioneBagno from "./pages/illuminazione/decorative/IlluminazioneBagno";
import IlluminazioneScale from "./pages/illuminazione/decorative/IlluminazioneScale";
import IlluminazioneGarage from "./pages/illuminazione/decorative/IlluminazioneGarage";

// Materiale Elettrico subcategories
import CablaggioScatoleArmadi from "./pages/illuminazione/materiale-elettrico/CablaggioScatoleArmadi";
import InterruttoriModulariQuadri from "./pages/illuminazione/materiale-elettrico/InterruttoriModulariQuadri";
import InterruttoriDifferenziali from "./pages/illuminazione/materiale-elettrico/InterruttoriDifferenziali";
import InterruttoriAutomatici from "./pages/illuminazione/materiale-elettrico/InterruttoriAutomatici";
import ConnettoriTerminali from "./pages/illuminazione/materiale-elettrico/ConnettoriTerminali";
import CassetteDerivazione from "./pages/illuminazione/materiale-elettrico/CassetteDerivazione";
import CaviElettrici from "./pages/illuminazione/materiale-elettrico/CaviElettrici";
import CaviRete from "./pages/illuminazione/materiale-elettrico/CaviRete";
import CaviCoassiali from "./pages/illuminazione/materiale-elettrico/CaviCoassiali";
import ProlungheCiabatte from "./pages/illuminazione/materiale-elettrico/ProlungheCiabatte";
import ComponentiElettrici from "./pages/illuminazione/materiale-elettrico/ComponentiElettrici";
import MeccanismiElettrici from "./pages/illuminazione/materiale-elettrico/MeccanismiElettrici";
import ComponentiIncasso from "./pages/illuminazione/materiale-elettrico/ComponentiIncasso";
import ComponentiSuperficie from "./pages/illuminazione/materiale-elettrico/ComponentiSuperficie";
import ComponentiEsterni from "./pages/illuminazione/materiale-elettrico/ComponentiEsterni";
import InterruttoriME from "./pages/illuminazione/materiale-elettrico/Interruttori";
import SpinePrese from "./pages/illuminazione/materiale-elettrico/SpinePrese";
import MeccanismiSimon from "./pages/illuminazione/materiale-elettrico/MeccanismiSimon";
import MeccanismiLegrand from "./pages/illuminazione/materiale-elettrico/MeccanismiLegrand";
import MeccanismiBTicino from "./pages/illuminazione/materiale-elettrico/MeccanismiBTicino";
import DomoticaME from "./pages/illuminazione/materiale-elettrico/DomoticaME";
import DispositiviControlloDomestico from "./pages/illuminazione/materiale-elettrico/DispositiviControlloDomestico";
import VideocitofoniCitofoni from "./pages/illuminazione/materiale-elettrico/VideocitofoniCitofoni";
import SicurezzaME from "./pages/illuminazione/materiale-elettrico/Sicurezza";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fotovoltaico" element={<Fotovoltaico />} />
          <Route path="/illuminazione" element={<Illuminazione />} />
          <Route path="/illuminazione/interni" element={<Interni />} />
          <Route path="/illuminazione/esterni" element={<Esterni />} />
          <Route path="/illuminazione/professionale" element={<Professionale />} />
          <Route path="/illuminazione/decorative" element={<Decorative />} />
          <Route path="/illuminazione/materiale-elettrico" element={<MaterialeElettrico />} />

          {/* Interni */}
          <Route path="/illuminazione/interni/downlight-led" element={<DownlightLed />} />
          <Route path="/illuminazione/interni/plafoniere-led" element={<PlafoniereLed />} />
          <Route path="/illuminazione/interni/pannelli-led" element={<PannelliLed />} />
          <Route path="/illuminazione/interni/strisce-led" element={<StrisceLed />} />
          <Route path="/illuminazione/interni/faretti-led-binario" element={<FarettiLedBinario />} />
          <Route path="/illuminazione/interni/barre-led-lineari" element={<BarreLedLineari />} />
          <Route path="/illuminazione/interni/domotica" element={<DomoticaInterni />} />
          <Route path="/illuminazione/interni/ventilatori-soffitto" element={<VentilatoriSoffitto />} />
          <Route path="/illuminazione/interni/lampade-decorazione-led" element={<LampadeDecorazioneLed />} />
          <Route path="/illuminazione/interni/segnapasso-led" element={<SegnapassoLed />} />
          <Route path="/illuminazione/interni/applique-led" element={<AppliqueLed />} />

          {/* Esterni */}
          <Route path="/illuminazione/esterni/proiettori-led" element={<ProiettoriLedEsterni />} />
          <Route path="/illuminazione/esterni/segnapasso-led" element={<SegnapassoLedEsterni />} />
          <Route path="/illuminazione/esterni/applique-led" element={<AppliqueLedEsterni />} />
          <Route path="/illuminazione/esterni/plafoniere-led" element={<PlafoniereLedEsterni />} />
          <Route path="/illuminazione/esterni/strisce-led" element={<StrisceLedEsterni />} />
          <Route path="/illuminazione/esterni/illuminazione-stradale" element={<IlluminazioneLedStradale />} />
          <Route path="/illuminazione/esterni/faretti-piscine" element={<FarettiLedPiscine />} />
          <Route path="/illuminazione/esterni/lampade" element={<LampadeEsterni />} />
          <Route path="/illuminazione/esterni/ghirlande-luminose" element={<GhirlandeLuminose />} />
          <Route path="/illuminazione/esterni/mobili-led" element={<MobiliLedEsterni />} />
          <Route path="/illuminazione/esterni/illuminazione-solare" element={<IlluminazioneLedSolare />} />

          {/* Professionale */}
          <Route path="/illuminazione/professionale/illuminazione-industriale" element={<IlluminazioneLedIndustriale />} />
          <Route path="/illuminazione/professionale/proiettori-led" element={<ProiettoriLedProfessionale />} />
          <Route path="/illuminazione/professionale/illuminazione-negozi" element={<IlluminazioneLedNegozi />} />
          <Route path="/illuminazione/professionale/pannelli-led" element={<PannelliLedProfessionale />} />
          <Route path="/illuminazione/professionale/illuminazione-stradale" element={<IlluminazioneLedStradaleProfessionale />} />
          <Route path="/illuminazione/professionale/illuminazione-sportiva" element={<IlluminazioneSportiva />} />
          <Route path="/illuminazione/professionale/luci-emergenza" element={<LuciEmergenzaLed />} />
          <Route path="/illuminazione/professionale/illuminazione-eventi" element={<IlluminazioneEventi />} />
          <Route path="/illuminazione/professionale/energia-solare" element={<EnergiaSolare />} />

          {/* Decorative */}
          <Route path="/illuminazione/decorative/soggiorno" element={<IlluminazioneSoggiorno />} />
          <Route path="/illuminazione/decorative/camera-da-letto" element={<IlluminazioneCameraDaLetto />} />
          <Route path="/illuminazione/decorative/cucina" element={<IlluminazioneCucina />} />
          <Route path="/illuminazione/decorative/terrazzo" element={<IlluminazioneTerrazzo />} />
          <Route path="/illuminazione/decorative/giardino" element={<IlluminazioneGiardino />} />
          <Route path="/illuminazione/decorative/bagno" element={<IlluminazioneBagno />} />
          <Route path="/illuminazione/decorative/scale" element={<IlluminazioneScale />} />
          <Route path="/illuminazione/decorative/garage" element={<IlluminazioneGarage />} />

          {/* Materiale Elettrico */}
          <Route path="/illuminazione/materiale-elettrico/cablaggio-scatole-armadi" element={<CablaggioScatoleArmadi />} />
          <Route path="/illuminazione/materiale-elettrico/interruttori-modulari-quadri" element={<InterruttoriModulariQuadri />} />
          <Route path="/illuminazione/materiale-elettrico/interruttori-differenziali" element={<InterruttoriDifferenziali />} />
          <Route path="/illuminazione/materiale-elettrico/interruttori-automatici" element={<InterruttoriAutomatici />} />
          <Route path="/illuminazione/materiale-elettrico/connettori-terminali" element={<ConnettoriTerminali />} />
          <Route path="/illuminazione/materiale-elettrico/cassette-derivazione" element={<CassetteDerivazione />} />
          <Route path="/illuminazione/materiale-elettrico/cavi-elettrici" element={<CaviElettrici />} />
          <Route path="/illuminazione/materiale-elettrico/cavi-rete" element={<CaviRete />} />
          <Route path="/illuminazione/materiale-elettrico/cavi-coassiali" element={<CaviCoassiali />} />
          <Route path="/illuminazione/materiale-elettrico/prolunghe-ciabatte" element={<ProlungheCiabatte />} />
          <Route path="/illuminazione/materiale-elettrico/componenti-elettrici" element={<ComponentiElettrici />} />
          <Route path="/illuminazione/materiale-elettrico/meccanismi-elettrici" element={<MeccanismiElettrici />} />
          <Route path="/illuminazione/materiale-elettrico/componenti-incasso" element={<ComponentiIncasso />} />
          <Route path="/illuminazione/materiale-elettrico/componenti-superficie" element={<ComponentiSuperficie />} />
          <Route path="/illuminazione/materiale-elettrico/componenti-esterni" element={<ComponentiEsterni />} />
          <Route path="/illuminazione/materiale-elettrico/interruttori" element={<InterruttoriME />} />
          <Route path="/illuminazione/materiale-elettrico/spine-prese" element={<SpinePrese />} />
          <Route path="/illuminazione/materiale-elettrico/meccanismi-simon" element={<MeccanismiSimon />} />
          <Route path="/illuminazione/materiale-elettrico/meccanismi-legrand" element={<MeccanismiLegrand />} />
          <Route path="/illuminazione/materiale-elettrico/meccanismi-bticino" element={<MeccanismiBTicino />} />
          <Route path="/illuminazione/materiale-elettrico/domotica" element={<DomoticaME />} />
          <Route path="/illuminazione/materiale-elettrico/dispositivi-controllo-domestico" element={<DispositiviControlloDomestico />} />
          <Route path="/illuminazione/materiale-elettrico/videocitofoni-citofoni" element={<VideocitofoniCitofoni />} />
          <Route path="/illuminazione/materiale-elettrico/sicurezza" element={<SicurezzaME />} />

          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
