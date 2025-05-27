
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Metodo from "./pages/Metodo";
import Programa from "./pages/Programa";
import Modulos from "./pages/Modulos";
import Resultados from "./pages/Resultados";
import Contacto from "./pages/Contacto";
import SolicitarDiagnostico from "./pages/SolicitarDiagnostico";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/metodo" element={<Metodo />} />
          <Route path="/programa" element={<Programa />} />
          <Route path="/modulos" element={<Modulos />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/solicitar-diagnostico" element={<SolicitarDiagnostico />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
