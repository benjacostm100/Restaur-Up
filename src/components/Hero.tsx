import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-32">
      {/* Contenedor parallax */}
      <motion.div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",  // ⭐️ Agrega esta línea
  }}
  initial={{ scale: 1.2 }}
  animate={{ scale: 1 }}
  transition={{ 
    duration: 1.5,
    ease: [0.33, 1, 0.68, 1]
  }}
>
  {/* Overlay degradado */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50"></div>
</motion.div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug mb-5">
            Tienes un buen restaurante
            <br />
            <span className="text-[#D96C4B]">Pero no un buen negocio</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transforma tu pasión culinaria en un negocio rentable con nuestro método probado.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              variant="outline"
              className="border-white text-white bg-white/5 hover:bg-white/60 px-8 py-6 text-base"
            >
              <Link to="/metodo">Empieza a ganar dinero de verdad con tu restaurante</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <ArrowDown 
            className="mx-auto text-[#D96C4B] animate-bounce" 
            size={28} 
          />
          <span className="block mt-2 text-sm text-gray-400">Desplázate para descubrir</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;