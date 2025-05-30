import { CheckCircle, ArrowRight, ChevronRight, Lightbulb, Rocket, Headset  } from "lucide-react";
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
          {/* Imagen de fondo */}
          <img
            src="/imagenes/pro2.jpg"
            alt="Fondo Hero"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />

          {/* Overlay negro + degradado */}
          <div className="absolute inset-0 z-0 bg-black/70">
            <div className="absolute inset-0 bg-gradient-to-t from-[#D96C4B]/10 to-transparent"></div>
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
<section className="relative py-24 px-4 bg-gradient-to-b from-black to-[#1A1A1A] overflow-hidden">
  {/* Efectos de fondo */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D96C4B]/30 to-transparent"></div>
    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#7ED957]/10 to-transparent"></div>
  </div>

  {/* Título principal */}
  <div className="relative z-10 text-center mb-16">
    <motion.h2 
      className="text-4xl md:text-5xl font-bold text-white leading-tight"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={item}
    >
      ¿Por qué <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-[#FF9068]">funciona</span> RestaurUP?
    </motion.h2>
  </div>

  {/* Contenedor principal */}
  <div className="max-w-7xl mx-auto relative z-10">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="flex flex-col lg:flex-row gap-12 items-center mb-20"
    >
      {/* Columna de texto */}
      <div className="lg:w-1/2">
        <motion.div 
          className="text-gray-300 space-y-6 text-lg lg:text-xl"
          variants={item}
        >
          <p className="flex items-start gap-3">
            <span className="text-[#D96C4B] font-bold mt-1">•</span>
            <span><strong className="text-white font-semibold">RestaurUP no es teoría.</strong> Es un sistema creado por quien ha gestionado restaurantes como el tuyo.</span>
          </p>
          
          <p className="flex items-start gap-3">
            <span className="text-[#D96C4B] font-bold mt-1">•</span>
            <span>He vivido tus mismos dolores: <span className="text-white">márgenes que no cuadran</span>, <span className="text-white">equipo descoordinado</span>, <span className="text-white">decisiones a ciegas</span>.</span>
          </p>
          
          <p className="flex items-start gap-3">
            <span className="text-[#D96C4B] font-bold mt-1">•</span>
            <span>Soy Fran Cabello, con <span className="text-white">15+ años liderando operaciones</span> y mi propio restaurante. Sé lo que es preguntarte si saldrán los números.</span>
          </p>
          
          <p className="flex items-start gap-3">
            <span className="text-[#D96C4B] font-bold mt-1">•</span>
            <span><span className="text-white font-semibold">RestaurUP existe para que no vayas a ciegas</span>, sino con <span className="text-white">método, estructura y foco</span>.</span>
          </p>
        </motion.div>
      </div>
      
      {/* Columna de imagen */}
      <motion.div 
        className="lg:w-1/2 relative"
        variants={item}
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative rounded-2xl overflow-hidden border-2 border-[#D96C4B]/30 shadow-2xl">
          <img 
            src="imagenes/pro.jpg" 
            alt="Fran Cabello en un restaurante"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-black/40 backdrop-blur-md text-sm text-white/70 font-normal py-2 px-4 rounded-md">
              "He estado en tu lugar. Sé exactamente lo que necesitas."
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>

    {/* Tarjetas de beneficios */}
    <div className="grid md:grid-cols-3 gap-8 relative">
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#D96C4B] to-transparent opacity-30"></div>

      {[
        {
          icon: <Lightbulb className="text-[#D96C4B]" size={28} />,
          title: "No es teoría",
          description: "Estrategias prácticas probadas en restaurantes reales"
        },
        {
          icon: <Rocket className="text-[#D96C4B]" size={28} />,
          title: "Resultados rápidos",
          description: "Impacto medible desde las primeras 4 semanas"
        },
        {
          icon: <Headset className="text-[#D96C4B]" size={28} />,
          title: "Acompañamiento",
          description: "Soporte 1:1 en cada etapa del proceso"
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10, borderColor: "#D96C4B" }}
          initial="hidden"
          whileInView="visible"
          variants={item}
          className="bg-[#1A1A1A]/80 backdrop-blur-md p-8 rounded-xl border border-gray-800 hover:shadow-lg hover:shadow-[#D96C4B]/10 transition-all text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
          <div className="bg-[#D96C4B]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
            {feature.icon}
          </div>
          <p className="text-sm text-gray-400/70 backdrop-blur-sm">{feature.description}</p>
          <div className="mt-6 h-1 w-10 bg-gradient-to-r from-[#D96C4B] to-[#FF9068] rounded-full mx-auto"></div>
        </motion.div>
      ))}
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
        <section className="py-20 px-4 bg-gradient-to-br from-[#1A1A1A] to-black relative overflow-hidden">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/imagenes/pro2.jpg"
            alt="Fondo"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center bg-[#0D0D0D]/90 p-12 rounded-2xl border border-gray-800 relative z-10"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D96C4B]/10 rounded-full blur-xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#D96C4B]/5 rounded-full blur-xl"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para transformar tu restaurante?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita para analizar tus desafíos específicos
            </p>

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