import { Search, Map, Wrench, BarChart, UserCheck, Utensils, Receipt, TrendingUp, Settings, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Contacto from './../pages/Contacto';
import ProgramaCompact from "./ProgramaCompact";
import Programa from "@/pages/Programa";
import ProgramasHome from "./ProgramaHome";

const IndexSections = () => {
  const fases = [
    { icon: Search, text: "Diagnóstico inicial" },
    { icon: Map, text: "Plan estratégico" },
    { icon: Wrench, text: "Implementación" },
    { icon: BarChart, text: "Optimización" },
  ];

  const modulos = [
    { icon: Utensils, text: "Control de costes" },
    { icon: Receipt, text: "Gestión operativa" },
    { icon: TrendingUp, text: "Revenue Management" },
    { icon: Settings, text: "Procesos Estandarizados" },
  ];

  

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
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
    <section className="relative bg-gradient-to-b from-gray-950/80 via-gray-950 to-gray-900/80 overflow-hidden py-24 px-4">

      {/* 🌌 Efectos de fondo modernos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Partículas animadas */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#D96C4B] rounded-full"
              style={{
                width: Math.random() * 20 + 2 + 'px',
                height: Math.random() * 20 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 100],
                x: [0, (Math.random() - 0.5) * 100],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Ondas fluidas modernas */}
        <svg
          className="absolute top-0 left-0 w-full h-40 md:h-60"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#wave-gradient-top)"
            fillOpacity="0.15"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <defs>
            <linearGradient id="wave-gradient-top" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D96C4B" />
              <stop offset="100%" stopColor="#E2845A" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="absolute bottom-0 left-0 w-full h-40 md:h-60"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#wave-gradient-bottom)"
            fillOpacity="0.15"
            d="M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="wave-gradient-bottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E2845A" />
              <stop offset="100%" stopColor="#D96C4B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        {/* Sección Método */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center space-y-12"
        >
          <motion.div variants={item}>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-[#E2845A]">
              Transformación en 4 pasos
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
              Un método probado para restaurantes que buscan resultados reales
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-6"
            variants={container}
          >
            {fases.map((phase, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-[#D96C4B]/50 transition-all overflow-hidden"
              >
                {/* Efecto de hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D96C4B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="p-3 bg-gradient-to-br from-[#D96C4B] to-[#E2845A] rounded-full w-fit mx-auto shadow-lg">
                    <phase.icon className="text-white" size={24} />
                  </div>
                  <h3 className="mt-5 font-semibold text-white">{phase.text}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item}>
            <Button 
              asChild
              variant="link"
              className="group text-[#D96C4B] hover:text-white"
            >
              <Link to="/metodo" className="flex items-center">
                <span className="bg-gradient-to-r from-[#D96C4B] to-[#E2845A] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  Conoce nuestro método completo
                </span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform">
                  <ArrowRight className="text-[#D96C4B] group-hover:text-white" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Sección Módulos */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center space-y-12"
        >
          <motion.div variants={item}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Áreas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-[#E2845A]">impacto</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
              Soluciones específicas para cada aspecto de tu restaurante
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-6"
            variants={container}
          >
            {modulos.map((module, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:shadow-lg hover:shadow-[#D96C4B]/20 transition-all overflow-hidden"
              >
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D96C4B/10_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="p-3 bg-gradient-to-br from-[#D96C4B] to-[#E2845A] rounded-full w-fit mx-auto shadow-lg">
                    <module.icon className="text-white" size={24} />
                  </div>
                  <h3 className="mt-5 font-semibold text-white">{module.text}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item}>
            <Button 
              asChild
              variant="link"
              className="group text-[#D96C4B] hover:text-white"
            >
              <Link to="/modulos" className="flex items-center">
                <span className="bg-gradient-to-r from-[#D96C4B] to-[#E2845A] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  Explora todos los módulos
                </span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform">
                  <ArrowRight className="text-[#D96C4B] group-hover:text-white" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Sección Programas */}
       <ProgramasHome/>
      </div>
    </section>
  );
};

export default IndexSections;