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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Navbar Principal */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg py-1"
            : "bg-transparent backdrop-blur-5 "
        }`}
      >
        <div className="px-3">
          <div className="flex justify-between items-center h-24">
           {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/logo5.png"
                alt="RestaurUP Logo"
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? "h-28 md:h-36 xl:h-44" : "h-32 md:h-44 xl:h-52"
                }`}
              />
            </Link>
          </motion.div>


            {/* Menú horizontal sólo en pantallas grandes */}
            <div className="hidden lg:flex items-center justify-end space-x-4 xl:space-x-4">
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
                      className={`relative py-2 font-light tracking-wide ${
                        isActive ? "font-bold text-white" : "text-[#f5f5dc]"
                      } text-base xl:text-xl font-semibold`}
                    >
                      <span className="relative block py-1">
                        {item.name}
                        {isActive && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-[#D96C4B] rounded-full w-2/3"></span>
                        )}
                        <span
                          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-[#D96C4B] rounded-full transition-all duration-300 ${
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
                  className="bg-gradient-to-l from-[#D96C4B] to-orange-800 hover:bg-[#D96C4B]/90 text-white ml-4 shadow-lg hover:shadow-[#D96C4B]/40 transition-all text-sm xl:text-base rounded-3xl py-3 px-5"
                >
                  <Link to="/solicitar-diagnostico">Diagnóstico Gratuito</Link>
                </Button>
              </motion.div>
            </div>


            {/* Botón menú hamburguesa para móviles y tablets */}
            <motion.button
              className="md:flex lg:hidden text-[#f5f5dc] focus:outline-none p-2"
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

      {/* Menú móvil y tablets */}
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
