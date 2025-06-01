// pages/SolicitarDiagnostico.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, CheckCircle } from "lucide-react";
import { DiagnosticoForm } from "@/components/DiagnosticoForm";

const SolicitarDiagnostico = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Layout>
      <section className="relative pt-40 pb-36 px-4  bg-gradient-to-t from-gray-950 to-[#1A1A1A] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-[#D96C4B]/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-20 w-40 h-40 rounded-full bg-[#D96C4B]/05 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#D96C4B]/10 text-[#D96C4B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Diagnóstico sin coste
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-orange-500 dark:from-[#D96C4B] dark:to-orange-400">
              Optimiza tu restaurante hoy
            </h1>
            <p className="text-xl text-gray-200 dark:text-gray-300 max-w-3xl mx-auto">
              Completa este formulario y recibe un análisis personalizado de tu negocio
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Formulario (primero en móvil) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 order-1 lg:order-1"
            >
              <DiagnosticoForm />
            </motion.div>

            {/* Contenido derecho (segundo en móvil) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full lg:w-1/2 space-y-8 order-2 lg:order-2"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative rounded-2xl overflow-hidden h-96 shadow-2xl group"
              >
                <img 
                  src="imagenes/analisis.jpg"
                  alt="Equipo de RestaurUP analizando datos"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <h4 className="text-white text-xl font-bold mb-2">Análisis personalizado</h4>
                    <p className="text-gray-300">Identificamos oportunidades específicas para tu negocio</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Card className="p-6 bg-gradient-to-r from-[#D96C4B] to-orange-600 text-white shadow-xl">
                  <div className="flex items-start">
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      <Clock className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Respuesta en 24 horas</h4>
                      <p>Nuestro equipo te contactará con un análisis inicial y recomendaciones.</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  "Sin compromiso",
                  "Totalmente gratuito",
                  "Personalizado",
                  "Confidencial"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <CheckCircle className="text-[#D96C4B] mr-2 w-5 h-5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolicitarDiagnostico;