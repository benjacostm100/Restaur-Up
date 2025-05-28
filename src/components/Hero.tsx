import { useState, useEffect } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "imagenes/hero1.jpg",
  "imagenes/hero2.jpg",
  "imagenes/hero3.jpg",
  "imagenes/hero4.jpg",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Efecto de degradado entre imágenes
  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 1000 : -1000,
      scale: 1.05
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1.2, ease: [0.32, 0.72, 0, 1] }
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 1000 : -1000,
      scale: 0.95,
      transition: { duration: 1.2, ease: [0.32, 0.72, 0, 1] }
    })
  };

  return (
    <section className="relative h-[90vh] bg-black sm:h-screen w-full overflow-hidden flex items-center justify-center pt-36 sm:pt-44 md:pt-48 pb-16">
      {/* Fondo de respaldo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950"></div>

      {/* Contenedor de imágenes con transición */}
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${images[index]}')`,
            backgroundSize: "cover"
          }}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl px-5 sm:px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight mb-4 sm:mb-5 md:mb-6">
            <span className="inline-block mb-3">Tienes un buen restaurante</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-orange-500">
              Pero no un buen negocio
            </span>
          </h1>

          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-xs md:max-w-xl lg:max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Aumenta un <strong>15% la rentabilidad</strong> de tu restaurante con un programa paso a paso, sin grandes cambios ni inversiones.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className= "text-white bg-white/15 backdrop-blur-md hover:text-gray-500 px-5 py-3 text-xs md:text-sm lg:text-base border-transparent"
              >
                <Link to="/metodo" className="flex items-center">
                  Empieza a ganar dinero de verdad
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 sm:mt-20 md:mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="mx-auto text-[#D96C4B]" size={28} />
          </motion.div>
          <span className="block mt-4 text-sm md:text-base text-gray-300 tracking-wider">
            DESCUBRE EL MÉTODO
          </span>
        </motion.div>
      </div>

      {/* Indicadores de imagen */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-[#D96C4B] w-6' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;