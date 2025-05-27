import { Search, Map, Wrench, BarChart, UserCheck, Utensils, Receipt, TrendingUp, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IndexSections = () => {
  const fases = [
    { icon: Search, text: "Diagnóstico inicial" },
    { icon: Map, text: "Plan estratégico" },
    { icon: Wrench, text: "Implementación" },
    { icon: BarChart, text: "Optimización" },
  ];

  const modulos = [
    { icon: Utensils, text: "Control de costos" },
    { icon: Receipt, text: "Gestión operativa" },
    { icon: TrendingUp, text: "Revenue Management" },
    { icon: Settings, text: "Procesos Estandarizados" },
  ];

  const programas = [
    {
      icon: Wrench,
      title: "Autogestión",
      desc: "Herramientas para implementar mejoras por tu cuenta",
    },
    {
      icon: UserCheck,
      title: "Asesoría Completa",
      desc: "Nuestro equipo ejecuta las mejoras por ti",
    },
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
    <section className="bg-gradient-to-br from-[#FFF9F5] to-[#FFEFE5] py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Sección Método */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center space-y-12"
        >
          <motion.div variants={item}>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D96C4B] to-[#E2845A]">
              Transformación en 4 pasos
            </h2>
            <p className="text-[#5A1A0E]/80 mt-4 max-w-xl mx-auto">
              Un método probado para restaurantes que buscan resultados reales
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-4"
            variants={container}
          >
            {fases.map((phase, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white/90 p-5 rounded-xl shadow-sm border border-white hover:border-[#D96C4B]/30 transition-all"
              >
                <div className="p-3 bg-[#D96C4B]/10 rounded-full w-fit mx-auto">
                  <phase.icon className="text-[#D96C4B]" size={24} />
                </div>
                <h3 className="mt-4 font-medium text-[#5A1A0E]">{phase.text}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item}>
            <Button 
              asChild
              variant="link"
              className="text-[#D96C4B] hover:text-[#7A2C1E] group"
            >
              <Link to="/metodo">
                Conoce nuestro método completo
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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
            <h2 className="text-4xl font-bold text-[#5A1A0E]">
              Áreas de <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D96C4B] to-[#E2845A]">impacto</span>
            </h2>
            <p className="text-[#5A1A0E]/80 mt-4 max-w-xl mx-auto">
              Soluciones específicas para cada aspecto de tu restaurante
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-4"
            variants={container}
          >
            {modulos.map((module, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-white/90 p-5 rounded-xl shadow-sm border border-white hover:shadow-md transition-all"
              >
                <div className="p-3 bg-[#D96C4B]/10 rounded-full w-fit mx-auto">
                  <module.icon className="text-[#D96C4B]" size={24} />
                </div>
                <h3 className="mt-4 font-medium text-[#5A1A0E]">{module.text}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item}>
            <Button 
              asChild
              variant="link"
              className="text-[#D96C4B] hover:text-[#7A2C1E] group"
            >
              <Link to="/modulos">
                Explora todos los módulos
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Sección Programas */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center space-y-12"
        >
          <motion.div variants={item}>
            <h2 className="text-4xl font-bold text-[#5A1A0E]">
              Nuestros <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D96C4B] to-[#E2845A]">programas</span>
            </h2>
            <p className="text-[#5A1A0E]/80 mt-4 max-w-xl mx-auto">
              Elige el formato que mejor se adapte a tus necesidades
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={container}
          >
            {programas.map((program, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white/90 p-8 rounded-xl shadow-sm border border-white hover:border-[#D96C4B]/30 transition-all text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D96C4B]/10 rounded-full">
                    <program.icon className="text-[#D96C4B]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#5A1A0E]">{program.title}</h3>
                </div>
                <p className="mt-4 text-[#5A1A0E]/90">{program.desc}</p>
                <Button 
                  asChild
                  size="sm"
                  className="mt-6 bg-[#D96C4B] hover:bg-[#7A2C1E] text-white"
                >
                  <Link to={`/programa-${program.title.toLowerCase()}`}>
                    Saber más
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default IndexSections;