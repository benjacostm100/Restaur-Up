import { CheckCircle, AlertTriangle, Flame, Clock, DollarSign, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* El Problema */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-[#D96C4B] text-center mb-12"
            variants={itemVariants}
          >
            ¿Te suena esto?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-4 bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 hover:border-[#D96C4B]/50 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-2 bg-[#D96C4B]/10 rounded-full">
                  <item.icon className="text-[#D96C4B]" size={24} />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <Button 
              asChild
              variant="outline"
              className="border-[#D96C4B] bg-[#D96C4B]/10 text-[#D96C4B] hover:bg-white/10 hover:text-[#D96C4B]"
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
          variants={containerVariants}
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
            variants={containerVariants}
          >
            {pillars.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-4 bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 hover:border-[#D96C4B]/50 transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-[#D96C4B]/10 rounded-full">
                  <item.icon className="text-[#D96C4B]" size={28} />
                </div>
                <p className="text-gray-300 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <Button 
              asChild
              className="bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white px-8 py-6 text-lg"
            >
              <Link to="https://wa.me/34605623970">
                Quiero transformar mi restaurante
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;