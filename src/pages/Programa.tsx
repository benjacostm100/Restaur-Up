import { CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Programa = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-black ">
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#D96C4B]/20 to-transparent"></div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="relative z-10 pt-40 pb-32 px-4 max-w-6xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            variants={item}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF9068] to-[#D96C4B]">
              Programa RestaurUP
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            variants={item}
          >
            Transformación estratégica para restaurantes que quieren <span className="text-[#D96C4B] font-semibold">resultados reales</span>, no solo teoría
          </motion.p>
          
          <motion.div variants={item}>
            <Button 
              asChild
              variant="link"
              className="group text-[#D96C4B] hover:text-white"
            >
              <Link to="/metodo" className="flex items-center">
                <span className="bg-gradient-to-r from-[#D96C4B] to-[#E2845A] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  Contactanos!
                </span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform">
                  <ArrowRight className="text-[#D96C4B] group-hover:text-white" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Differentiator Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              variants={item}
            >
              ¿Por qué <span className="text-[#D96C4B]">funciona</span>?
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 max-w-3xl mx-auto text-lg"
              variants={item}
            >
              Un enfoque práctico basado en años de experiencia optimizando restaurantes
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              initial="hidden"
              whileInView="visible"
              variants={item}
              className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 hover:border-[#D96C4B]/50 transition-all"
            >
              <div className="bg-[#D96C4B]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-[#D96C4B]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">No es teoría</h3>
              <p className="text-gray-400">Estrategias prácticas adaptadas a la realidad de tu restaurante</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              initial="hidden"
              whileInView="visible"
              variants={item}
              className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 hover:border-[#D96C4B]/50 transition-all"
            >
              <div className="bg-[#D96C4B]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-[#D96C4B]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Resultados rápidos</h3>
              <p className="text-gray-400">Mejoras visibles desde las primeras semanas</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              initial="hidden"
              whileInView="visible"
              variants={item}
              className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 hover:border-[#D96C4B]/50 transition-all"
            >
              <div className="bg-[#D96C4B]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-[#D96C4B]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Acompañamiento</h3>
              <p className="text-gray-400">Soporte continuo en cada etapa del proceso</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              variants={item}
            >
              Elige tu <span className="text-[#D96C4B]">formato</span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              initial="hidden"
              whileInView="visible"
              variants={item}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8 rounded-2xl border border-gray-800 hover:border-[#D96C4B]/30 transition-all relative overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D96C4B]/5 rounded-full blur-xl"></div>
              <h3 className="text-2xl font-bold text-white mb-2">Programa DIY</h3>
              <p className="text-[#D96C4B] mb-6">Implementación autónoma</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#D96C4B] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Plan paso a paso para optimización</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#D96C4B] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Plantillas y herramientas exclusivas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#D96C4B] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Soporte semanal + consultas</span>
                </li>
              </ul>

              <div className="bg-[#1A1A1A] p-4 rounded-lg mb-6">
                <p className="text-gray-400 text-sm mb-2">Ideal para:</p>
                <p className="text-white">Propietarios con tiempo para implementar</p>
              </div>

              <Button 
                asChild
                variant="outline"
                className="w-full border-[#D96C4B] text-[#D96C4B] hover:bg-[#D96C4B]/10"
              >
                <Link to="/solicitar-diagnostico" className="flex items-center justify-center">
                  Más detalles <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              initial="hidden"
              whileInView="visible"
              variants={item}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8 rounded-2xl border-2 border-[#D96C4B]/50 hover:border-[#D96C4B] transition-all relative overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D96C4B]/10 rounded-full blur-xl"></div>
              <h3 className="text-2xl font-bold text-white mb-2">Full Service</h3>
              <p className="text-[#D96C4B] mb-6">Implementación por nuestro equipo</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#D96C4B] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Diagnóstico e implementación completa</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#D96C4B] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Seguimiento semanal personalizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#D96C4B] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Soporte prioritario 24/7</span>
                </li>
              </ul>

              <div className="bg-[#1A1A1A] p-4 rounded-lg mb-6">
                <p className="text-gray-400 text-sm mb-2">Ideal para:</p>
                <p className="text-white">Propietarios que quieren resultados sin complicaciones</p>
              </div>

              <Button 
                asChild
                className="w-full bg-gradient-to-r from-[#D96C4B] to-[#FF9068] text-white hover:from-[#C55B3A] hover:to-[#E57F5F]"
              >
                <Link to="/programa-full" className="flex items-center justify-center">
                  Más detalles <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1A1A1A] to-black">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center bg-[#0D0D0D] p-12 rounded-2xl border border-gray-800 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D96C4B]/10 rounded-full blur-xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#D96C4B]/5 rounded-full blur-xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para transformar tu restaurante?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Agenda una consulta gratuita para analizar tus desafíos específicos</p>
          
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#D96C4B] to-[#FF9068] text-white px-10 py-6 text-lg group"
          >
            <Link to="/contacto">
              Solicitar diagnóstico gratuito
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <p className="text-gray-500 text-sm mt-6">
            Garantía: Si no ves mejoras en 3 meses, seguimos trabajando contigo sin coste adicional.
          </p>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Programa;