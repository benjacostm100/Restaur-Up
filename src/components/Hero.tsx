import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[90vh] sm:h-screen w-full overflow-hidden flex items-center justify-center pt-36 sm:pt-44 md:pt-48 pb-16">
      {/* Contenedor parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 1.5,
          ease: [0.33, 1, 0.68, 1]
        }}
      >
        {/* Overlay degradado */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/75 to-black/20"></div>
      </motion.div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl px-5 sm:px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight mb-4 sm:mb-5 md:mb-6">
            Tienes un buen restaurante
            <br />
            <span className="text-[#D96C4B]">Pero no un buen negocio</span>
          </h1>

          <p className="text-sm md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-xs md:max-w-xl lg:max-w-2xl mx-auto">
            Aumenta un 15% la rentabilidad de tu restaurante con un programa paso a paso, sin grandes cambios ni inversiones.
          </p>

          <div className="flex flex-col sm:flex-row md:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                variant="outline"
                className="border-black text-white bg-white/15 backdrop-blur-md hover:text-gray-500 px-5 py-3 text-xs md:text-sm lg:text-base"
              >
                <Link to="/metodo">Empieza a ganar dinero de verdad con tu restaurante</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 sm:mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <ArrowDown 
            className="mx-auto text-[#D96C4B] animate-bounce" 
            size={22} 
          />
          <span className="block mt-2 text-xs sm:text-sm md:text-base text-gray-300">Desplázate para descubrir</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
