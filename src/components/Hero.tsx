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

  // ⬇ Efecto para cambiar de slide cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // ⬇ Pre-cargar las imágenes al iniciar el componente
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Efecto de degradado entre imágenes
  const variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100, // Más pequeño el desplazamiento
    scale: 1.02,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } // Más rápido y suave
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? 100 : -100,
    scale: 0.98,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }),
};



  return (
    <section className="relative h-[100vh] bg-black sm:h-[100vh] w-full overflow-hidden flex items-center justify-center pt-36 sm:pt-44 md:pt-48 pb-16">
      {/* Fondo de respaldo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950"></div>

      {/* Contenedor de imágenes con transición */}
      <AnimatePresence custom={direction} mode="popLayout">
      <motion.div
        key={index}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        className={`absolute inset-0 bg-center bg-cover bg-fixed`}
        style={{ backgroundImage: `url(${images[index]})` }}
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
            <span className="inline-block sm:mb-2">Tienes un buen restaurante</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-orange-500">
              Pero no un buen negocio
            </span>
          </h1>

          <motion.p 
            className="text-base md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-xs md:max-w-xl lg:max-w-2xl mx-auto"
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
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className= "text-white bg-white/15 backdrop-blur-md hover:text-gray-500 px-5 py-3 text-xs md:text-sm lg:text-base border-transparent"
              >
                <Link to="https://wa.me/34605623970" className="flex items-center">
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