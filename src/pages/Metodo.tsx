import { BarChart2, Settings, ClipboardList, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Componente de fase animada
const AnimatedPhase = ({ fase, title, desc, icon: Icon, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Card className="p-8 text-center border-gray-300 shadow-sm hover:shadow-md transition-all h-full group hover:border-[#D96C4B]">
        <div className="w-16 h-16 bg-[#D96C4B] text-white rounded-full flex items-center justify-center mx-auto mb-4 transition-all group-hover:scale-110 group-hover:bg-[#c45a3a]">
          <Icon size={32} />
        </div>
        <span className="text-sm font-semibold text-[#D96C4B]">FASE {fase}</span>
        <h3 className="text-xl font-bold mb-3 mt-2">{title}</h3>
        <p className="text-gray-700">{desc}</p>
      </Card>
    </motion.div>
  );
};

const Metodo = () => {
  // Imágenes de ejemplo (reemplaza con tus propias imágenes)
 // Imágenes de ejemplo de Unsplash


  return (
    <Layout>
      {/* Hero: El Método con imagen de fondo */}
      <section className="relative pb-28 pt-40 px-4 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black z-0"></div>
        <div className="absolute bg-gradient-to-r from-[#D96C4B]/20 to-transparent inset-0 z-0">
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transforma tu restaurante con nuestro <span className="text-[#D96C4B]">método probado</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Nuestro método se estructura en <strong className="text-white">4 fases clave</strong> para convertir tu restaurante en un negocio rentable, manteniendo tu autenticidad. Resultados medibles en cocina, sala y gestión.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          </motion.div>
        </motion.div>
      </section>

      {/* Fases del Método */}
      <section className="py-20 px-4 bg-[#F8F6F1] text-[#333]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#D96C4B] font-semibold">NUESTRO PROCESO</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Las 4 Fases del <span className="text-[#D96C4B]">Método RestaurUP</span></h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Un camino claro y estructurado para transformar tu negocio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                fase: "01", 
                title: "Análisis Profundo", 
                desc: "Evaluación exhaustiva de tu operación actual, flujos de trabajo y métricas clave.", 
                icon: BarChart2 
              },
              { 
                fase: "02", 
                title: "Plan Estratégico", 
                desc: "Diseño de una hoja de ruta personalizada con objetivos claros y alcanzables.", 
                icon: ClipboardList 
              },
              { 
                fase: "03", 
                title: "Implementación", 
                desc: "Aplicación práctica con soporte continuo y ajustes en tiempo real.", 
                icon: Settings 
              },
              { 
                fase: "04", 
                title: "Optimización Continua", 
                desc: "Monitoreo de resultados y refinamiento constante para máxima rentabilidad.", 
                icon: CheckCircle 
              }
            ].map((fase, index) => (
              <AnimatedPhase key={index} index={index} {...fase} />
            ))}
          </div>


          <div className="text-center mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white text-lg px-8 py-6"
              >
                <Link to="/programa">Ver el programa completo →</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Caso de éxito con before/after */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D96C4B] font-semibold">RESULTADOS REALES</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">De la teoría a la práctica</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Caso de éxito: <span className="text-[#D96C4B]">Restaurante La Tradición</span></h3>
              <p className="text-gray-700 mb-6">
                En solo 3 meses aplicando nuestro método, lograron:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-[#D96C4B] mt-1 mr-2 flex-shrink-0" />
                  <span><strong>+35%</strong> de rentabilidad</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#D96C4B] mt-1 mr-2 flex-shrink-0" />
                  <span><strong>-20%</strong> en costos operativos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#D96C4B] mt-1 mr-2 flex-shrink-0" />
                  <span><strong>+50%</strong> de eficiencia en cocina</span>
                </li>
              </ul>
            </div>
            
            <div className="relative h-80 bg-gray-200 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1599054228863-88e0b902a32f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Antes y después" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
              <div className="relative z-10 p-6 text-white h-full flex flex-col justify-center">
                <h4 className="text-xl font-bold mb-2">Transformación real</h4>
                <p className="text-gray-200">De la desorganización a la excelencia operativa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre Inspirador con video */}
      <section className="relative py-32 px-4 text-white text-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-30">
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            Esto no es un curso teórico.<br />
            <span className="text-[#D96C4B]">Es la evolución real</span> de tu restaurante.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Con RestaurUP, transformas el caos en control, la incertidumbre en resultados medibles. Todo ello manteniendo la esencia que hace único tu negocio.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white text-lg px-8"
            >
              <Link to="/contacto">Quiero transformar mi restaurante</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white bg-white/10 text-lg px-8"
            >
              <Link to="/casos-de-exito">Ver más casos de éxito</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Metodo;