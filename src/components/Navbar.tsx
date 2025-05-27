import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Método", path: "/metodo" },
    { name: "Programa", path: "/programa" },
    { name: "Módulos", path: "/modulos" },
    { name: "Resultados", path: "/resultados" },
    { name: "Contacto", path: "/contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Navbar Principal */}
      <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg py-1' 
          : 'bg-transparent backdrop-blur-5 '
      }`}>
        <div className="max-w-7xl px-4">
          <div className="flex justify-between items-center h-24">
           <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              onClick={() => window.scrollTo(0, 0)}
            >
              <img 
                src="/logo5.png" 
                alt="RestaurUP Logo" 
                className="h-40 w-auto" 
              />
            </Link>
          </motion.div>


            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <Link
                      to={item.path}
                      className={`relative px-4 py-3 text-2xl font-light tracking-wide ${
                        isActive ? "font-semibold text-white" : "text-[#f5f5dc]"
                      }`}
                    >
                      <span className="relative block py-1">
                        {item.name}
                        {/* Subrayado fijo para página activa */}
                        {isActive && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-[#D96C4B] rounded-full w-2/3"></span>
                        )}
                        {/* Subrayado al hacer hover */}
                        <span
                          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-[#D96C4B] rounded-fulltransition-all duration-300 ${
                            isActive ? "" : "w-0 group-hover:w-3/4" 
                          }`}
                        ></span>
                      </span>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  className="bg-gradient-to-l from-[#D96C4B] to-orange-600 hover:bg-[#D96C4B]/90 text-white ml-4 shadow-lg hover:shadow-[#D96C4B]/40 transition-all text-xl py-6 px-8"
                >
                  <Link to="/solicitar-diagnostico">Diagnóstico Gratuito</Link>
                </Button>
              </motion.div>
            </div>


            <motion.button 
              className="md:hidden text-[#f5f5dc] focus:outline-none p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú de navegación"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? (
                <X size={40} className="text-[#D96C4B]" />
              ) : (
                <Menu size={40} />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil */}
<AnimatePresence>
  {mobileMenuOpen && (
    <>
      <motion.div 
        className="fixed inset-0 bg-black/70 z-40 md:hidden"
        onClick={() => setMobileMenuOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        className="md:hidden fixed inset-0 z-40 pt-24 flex justify-center"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <div className="bg-black/95 backdrop-blur-lg w-full max-w-sm mx-4 rounded-xl shadow-2xl p-6 border border-gray-800">
          <div className="flex flex-col space-y-5">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to={item.path}
                  className={`block py-4 px-4 text-center rounded-xl transition-all text-xl text-[#f5f5dc] font-light tracking-wide ${
                    location.pathname === item.path
                      ? "font-semibold text-black bg-[#D96C4B] shadow-md"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.span
                      className="absolute left-1/2 bottom-3 w-4/5 h-0.5 bg-black/30 -translate-x-1/2"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5"
            >
              <Button 
                asChild
                className="w-full bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white py-5 text-xl shadow-lg hover:shadow-[#D96C4B]/50 transition-all"
              >
                <Link 
                  to="/solicitar-diagnostico"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Diagnóstico Gratuito
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

    </>
  );
};

export default Navbar;