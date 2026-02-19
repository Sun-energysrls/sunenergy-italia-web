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
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
