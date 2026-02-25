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

          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
