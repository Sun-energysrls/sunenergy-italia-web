import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

// ... keep existing code
const Fotovoltaico = lazy(() => import("./pages/Fotovoltaico"));
const Illuminazione = lazy(() => import("./pages/Illuminazione"));
const Interni = lazy(() => import("./pages/illuminazione/Interni"));
const Esterni = lazy(() => import("./pages/illuminazione/Esterni"));
const Professionale = lazy(() => import("./pages/illuminazione/Professionale"));
const MaterialeElettrico = lazy(() => import("./pages/illuminazione/MaterialeElettrico"));
const Contatti = lazy(() => import("./pages/Contatti"));
const NotFound = lazy(() => import("./pages/NotFound"));

const DownlightLed = lazy(() => import("./pages/illuminazione/interni/DownlightLed"));
const PlafoniereLed = lazy(() => import("./pages/illuminazione/interni/PlafoniereLed"));
const PannelliLed = lazy(() => import("./pages/illuminazione/interni/PannelliLed"));
const StrisceLed = lazy(() => import("./pages/illuminazione/interni/StrisceLed"));
const FarettiLedBinario = lazy(() => import("./pages/illuminazione/interni/FarettiLedBinario"));
const BarreLedLineari = lazy(() => import("./pages/illuminazione/interni/BarreLedLineari"));
const DomoticaInterni = lazy(() => import("./pages/illuminazione/interni/DomoticaInterni"));
const VentilatoriSoffitto = lazy(() => import("./pages/illuminazione/interni/VentilatoriSoffitto"));
const LampadeDecorazioneLed = lazy(() => import("./pages/illuminazione/interni/LampadeDecorazioneLed"));
const SegnapassoLed = lazy(() => import("./pages/illuminazione/interni/SegnapassoLed"));
const AppliqueLed = lazy(() => import("./pages/illuminazione/interni/AppliqueLed"));

const ProiettoriLedEsterni = lazy(() => import("./pages/illuminazione/esterni/ProiettoriLedEsterni"));
const SegnapassoLedEsterni = lazy(() => import("./pages/illuminazione/esterni/SegnapassoLedEsterni"));
const AppliqueLedEsterni = lazy(() => import("./pages/illuminazione/esterni/AppliqueLedEsterni"));
const PlafoniereLedEsterni = lazy(() => import("./pages/illuminazione/esterni/PlafoniereLedEsterni"));
const StrisceLedEsterni = lazy(() => import("./pages/illuminazione/esterni/StrisceLedEsterni"));
const IlluminazioneLedStradale = lazy(() => import("./pages/illuminazione/esterni/IlluminazioneLedStradale"));
const FarettiLedPiscine = lazy(() => import("./pages/illuminazione/esterni/FarettiLedPiscine"));
const LampadeEsterni = lazy(() => import("./pages/illuminazione/esterni/LampadeEsterni"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={null}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
