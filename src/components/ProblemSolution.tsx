import { CheckCircle, AlertTriangle, Flame, Clock, DollarSign, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { openWhatsApp } from "@/lib/utils";

const ProblemSolution = () => {
  const problems = [
    { icon: DollarSign, text: "No sabes cuánto ganas hasta fin de mes" },
    { icon: Users, text: "Tienes clientes, pero el margen es bajo" },
    { icon: Clock, text: "Cada mes te falta tiempo y dinero" },
    { icon: AlertTriangle, text: "Tu personal hace lo que puede, pero sin sistema" },
    { icon: Flame, text: "Apagas fuegos cada día, pero no avanzas" },
    { icon: AlertTriangle, text: "Has probado cambios... pero no dan resultado" },
  ];

  const pillars = [
    { icon: CheckCircle, text: "Método claro y replicable" },
    { icon: CheckCircle, text: "Acompañamiento real, no solo teoría" },
    { icon: CheckCircle, text: "Aplicable sin grandes cambios" },
    { icon: CheckCircle, text: "Resultados desde el primer mes" },
  ];

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 10px 30px -5px rgba(217, 108, 75, 0.3)"
    }
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-950 to bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Problemas Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl font-bold text-[#D96C4B] mb-12"
            variants={titleVariants}
          >
            ¿Te suena esto?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, index) => (
    
          <motion.div 
            key={index} 
            className="flex flex-col items-center p-8 bg bg-gradient-to-br from-black to-gray-950 backdrop-blur-md rounded-2xl border border-gray-600/50 hover:border-[#D96C4B]/50 shadow-lg transition-all h-full"
            
            variants={cardVariants}
            whileHover="hover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
              <div className="absolute inset-0 rounded-lg bg-cover bg-center opacity-10"
              style={{ backgroundImage: "url('/imagenes/textura1.avif')" }}>
              
              </div>
            <div className="p-3 bg-[#D96C4B]/60 rounded-xl mb-4">
              <item.icon className="text-gray-900" size={28} />
            </div>
            <p className="text-lg text-white text-center font-medium">{item.text}</p>
          </motion.div>
        ))}
      </div>


          <motion.div 
            className="mt-12"
            variants={titleVariants}
          >
            <Button 
              asChild
              className="bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white px-8 py-5 text-md font-semibold rounded-lg hover:shadow-md hover:shadow-[#D96C4B]/20"
            >
              <Link to="/programa">
                Ver problemas comunes en restaurantes
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* La Solución */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="pt-16"
        >
          <motion.div 
            className="bg-gradient-to-r from-[#D96C4B]/20 to-transparent p-8 rounded-2xl border border-[#D96C4B]/30 mb-16"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-6"
              variants={itemVariants}
            >
              <span className="text-white">RestaurUP: </span>
              <span className="text-[#D96C4B]">estructura, control y rentabilidad real</span>
            </motion.h2>
            
            <motion.p 
              className="text-center text-gray-400 max-w-3xl mx-auto text-lg mb-8"
              variants={itemVariants}
            >
              Programa paso a paso para recuperar el control de tu restaurante, mejorar rentabilidad y optimizar procesos, sin perder tu identidad.
            </motion.p>
            
            <motion.div 
              className="flex justify-center gap-4"
              variants={itemVariants}
            >
              <Button 
                asChild
                className="bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white"
              >
                <Link to="/programa">Ver programa completo</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-white bg-white/10 text-white hover:bg-white/50"
              >
                <Link to="/resultados">Ver casos de éxito</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
  className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
  variants={itemVariants}
>
  {pillars.map((item, index) => (
    <motion.div 
      key={index} 
      className="relative overflow-hidden flex items-center gap-5 bg-gray-900 hover:bg-gray-800 p-8 rounded-2xl border border-green-600/20 hover:border-[#D96C4B]/50 transition-all"
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Fondo de textura */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none rounded-2xl"
        style={{ backgroundImage: "url('/imagenes/textura1.avif')" }}
      ></div>

      {/* Contenido */}
      <div className="relative p-3 bg-green-50/10 rounded-xl">
        <item.icon className="text-green-600" size={28} />
      </div>
      <p className="relative text-lg text-gray-200 font-medium">{item.text}</p>
    </motion.div>
  ))}
</motion.div>

          <motion.div 
            className="text-center mt-16"
            variants={titleVariants}
          >
            <Button onClick={openWhatsApp}
              asChild
              className="bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white px-10 py-6 text-lg font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D96C4B]/20"
            >

                Quiero transformar mi restaurante

            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;