import { useState, useEffect } from "react";
import Cookies from "js-cookie";
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
import { motion } from "framer-motion";
import PoliticaPrivacidad from "./pages/PoliticiaPrivacidad";
import AvisoLegal from "./pages/AvisoLegal";
import TerminosCondiciones from "./pages/TerminosCondiciones";

const queryClient = new QueryClient();

const App = () => {
  const [mostrarBanner, setMostrarBanner] = useState(false);

  useEffect(() => {

    const consent = Cookies.get("userConsent");
    if (!consent) {
      setMostrarBanner(true);
    }
  }, []);

  const aceptarCookies = () => {
    Cookies.set("userConsent", "true", { expires: 365 });
    setMostrarBanner(false);
  };

  return (
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
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
            <Route path="*" element={<NotFound />} />
    
          </Routes>

          {mostrarBanner && (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 100 }}
    transition={{ type: "spring", damping: 25 }}
    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-gray-900 border border-gray-800 text-white p-6 rounded-xl shadow-2xl z-50 backdrop-blur-sm"
  >
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/80"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="currentColor"
            />
            <path
              d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM11 16V14H13V16H11ZM11 12V8H13V12H11Z"
              fill="currentColor"
            />
          </svg>
          <h3 className="font-medium text-white">Política de Cookies</h3>
        </div>
        <p className="text-sm text-gray-300">
          Utilizamos cookies esenciales y analíticas para ofrecerte la mejor experiencia. 
          Al hacer clic en "Aceptar", consientes el uso de todas las cookies.
        </p>
      </div>
      
      <div className="flex gap-3 w-full md:w-auto">
        <button
          onClick={() => {
            Cookies.set("userConsent", "false", { expires: 365 });
            setMostrarBanner(false);
          }}
          className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
        >
          Rechazar
        </button>
        <button
          onClick={aceptarCookies}
          className="px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
        >
          Aceptar
        </button>
      </div>
    </div>
  </motion.div>
)}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
