import { BarChart2, Settings, ClipboardList, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CasosCarousel from "@/components/CasosCarousel";
import { openWhatsApp } from "@/lib/utils";

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
      <Card className="p-8 text-center border-gray-700 bg-gray-800 hover:border-[#D96C4B] group transition-all h-full shadow-xl hover:shadow-[#D96C4B]/20">
        <div className="w-16 h-16 bg-gradient-to-br from-[#D96C4B] to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 transition-all group-hover:scale-110">
          <Icon size={28} />
        </div>
        <span className="text-sm font-semibold text-[#D96C4B]">FASE {fase}</span>
        <h3 className="text-xl font-bold mb-3 mt-2 text-white">{title}</h3>
        <p className="text-gray-400">{desc}</p>
      </Card>
    </motion.div>
  );
};

const Metodo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Layout>
      {/* Hero: El Método con fondo oscuro */}
      <section className="relative pt-40 pb-32 px-4 text-center overflow-hidden bg-gradient-to-b from-black/95 to-black">
       <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/imagenes/met2.avif"
            alt="Fondo"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <div className="inline-block bg-[#D96C4B]/10 text-[#D96C4B] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Método Comprobado
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Transforma tu restaurante con nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-orange-500">método probado</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Nuestro método se estructura en <strong className="text-white">4 fases clave</strong> para convertir tu restaurante en un negocio rentable, manteniendo tu autenticidad.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
           <Button 
              asChild
              variant="link"
              className="group text-[#D96C4B] hover:text-white"
            >
              <Link to="/contacto" className="flex items-center">
                <span className="bg-gradient-to-r from-[#D96C4B] to-[#E2845A] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  Conocer el método 
                </span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform">
                  <ArrowRight className="text-[#D96C4B] group-hover:text-white" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Fases del Método */}
      <section className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#D96C4B] font-semibold tracking-wider">PROCESO ESTRUCTURADO</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Las 4 Fases del <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-orange-500">Método RestaurUP</span></h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
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
                className="bg-gradient-to-r from-[#D96C4B] to-orange-600 hover:from-[#D96C4B]/90 hover:to-orange-600/90 text-white px-8 py-6"
              >
                <Link to="/programa">
                  Ver el programa completo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <CasosCarousel />



      {/* Cierre Inspirador */}
      <section className="relative py-32 px-4 text-center overflow-hidden bg-gradient-to-b from-black/90 to-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/imagenes/metodo.avif"
            alt="Fondo"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white"
          >
            Esto no es un curso teórico.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-orange-500">Es la evolución real</span> de tu restaurante.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
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
              onClick={openWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-[#D96C4B] to-orange-600 hover:from-[#D96C4B]/90 hover:to-orange-600/90 text-white px-8"
            >
                Quiero transformar mi restaurante <ArrowRight className="ml-2 h-5 w-5" />
            
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-black border-white hover:bg-white/10 hover:text-white px-8"
            >
              <Link to="/resultados" className="flex items-center">
                Ver más casos de éxito <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Metodo;