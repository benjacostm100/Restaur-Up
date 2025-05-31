import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { openWhatsApp } from "@/lib/utils";

const CtaFinal = () => {
  const estoEsParaTi = [
    "Luchas por mantener tus márgenes de ganancia estables",
    "El personal no sigue procedimientos de forma consistente",
    "El food cost es un dolor constante",
    "Te sientes atrapado trabajando en lugar de dirigir",
    "La rotación de personal es alta",
  ];

  const funcionaraAunque = [
    "No tengas experiencia en optimización de costes",
    "Tu equipo no esté bien capacitado",
    "Ya hayas intentado reducir costes sin éxito",
    "No tengas tiempo para implementar cambios",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] py-16 px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div 
        className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none rounded-2xl"
        style={{ backgroundImage: "url('/imagenes/textura3.avif')" }}
      >
         <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center space-y-14"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D96C4B] to-orange-500"
            variants={itemVariants}
          >
            ¿Es este tu caso?
          </motion.h2>

          <motion.div 
            className="grid lg:grid-cols-2 gap-10 text-left"
            variants={containerVariants}
          >
            {/* Columna 1 */}
            <motion.div 
              className="bg-[#1A1A1A] p-8 rounded-xl border border-[#D96C4B]/20 shadow-lg backdrop-blur-sm relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#D96C4B]/10 rounded-full filter blur-xl"></div>
              <motion.h3 
                className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#D96C4B] to-[#FF9068] relative z-10"
                variants={itemVariants}
              >
                Esto es para ti si...
              </motion.h3>
              <ul className="space-y-4 relative z-10">
                {estoEsParaTi.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-4 group"
                    variants={itemVariants}
                  >
                    <div className="p-2 bg-[#7ED957]/10 rounded-full group-hover:bg-[#7ED957]/20 transition-all">
                      <CheckCircle className="text-[#7ED957] flex-shrink-0" size={22} />
                    </div>
                    <p className="text-gray-300 text-base group-hover:text-white transition-colors">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Columna 2 */}
            <motion.div 
              className="bg-[#1A1A1A] p-8 rounded-xl border border-[#7ED957]/20 shadow-lg backdrop-blur-sm relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#7ED957]/10 rounded-full filter blur-xl"></div>
              <motion.h3 
                className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#D96C4B] to-[#FF9068] relative z-10"
                variants={itemVariants}
              >
                Funcionará para ti aunque...
              </motion.h3>
              <ul className="space-y-4 relative z-10">
                {funcionaraAunque.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-4 group"
                    variants={itemVariants}
                  >
                    <div className="p-2 bg-[#7ED957]/10 rounded-full group-hover:bg-[#7ED957]/20 transition-all">
                      <CheckCircle className="text-[#7ED957] flex-shrink-0" size={22} />
                    </div>
                    <p className="text-gray-300 text-base group-hover:text-white transition-colors">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            
            <Button onClick={openWhatsApp}
              className="relative overflow-hidden isolate border-none bg-transparent text-white transition-all duration-500 group px-10 py-6 rounded-sm"
            >
              {/* Fondo con efecto glassmorphism y blur */}
              <div className="absolute inset-0 bg-[#D96C4B]/20 backdrop-blur-md border border-[#FF9068]/30 rounded-xl group-hover:bg-[#D96C4B]/30 transition-all duration-500"></div>
              
              {/* Efecto de gradiente animado */}
              <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#D96C4B_0%,#FF9068_50%,#D96C4B_100%)] opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-xl animate-rotate-gradient"></div>
              
              {/* Borde luminoso */}
              <div className="absolute inset-0 rounded-sm p-[1px] pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D96C4B] to-[#FF9068] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
              </div>
              
              {/* Contenido del botón */}
              <span className="relative z-10 font-bold text-lg tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Solicita tu diagnóstico gratuito
              </span>
              <ArrowRight 
                className="ml-3 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 relative z-10" 
                size={20}
              />
              


            </Button>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaFinal;