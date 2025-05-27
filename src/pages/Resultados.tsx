import { Star, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ResultCard = ({ title, desc, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-[#D96C4B]/50 transition-all duration-300 group h-full">
        <div className="flex items-start mb-4">
          <div className="bg-[#D96C4B]/10 p-2 rounded-lg mr-4 group-hover:bg-[#D96C4B]/20 transition-colors">
            <Star className="text-[#D96C4B] w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 ml-12">{desc}</p>
      </Card>
    </motion.div>
  );
};

const Resultados = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const results = [
    {
      title: "-18% en costes operativos",
      desc: "Hotel 4* en la Costa Brava. Sin reducir plantilla.",
    },
    {
      title: "+25% en eficiencia del equipo",
      desc: "Tras implantar checklists y ratios diarios.",
    },
    {
      title: "+15% de beneficio neto en 3 meses",
      desc: "Restaurante gastronómico en zona urbana.",
    },
    {
      title: "-30% en rotación de personal",
      desc: "Gracias a procesos claros y sistema de formación.",
    },
  ];

  return (
    <Layout>
      <section className="py-40 px-4 relative bg-gradient-to-b from-black via-orange-950 to-orange-950/80 ">
        {/* Imagen decorativa */}
        <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-10 dark:opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Restaurante de fondo"
            className="w-full h-full object-cover"
          />
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
              Transformación Comprobada
            </span>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D96C4B] to-orange-600 dark:from-[#D96C4B] dark:to-orange-400 mb-4">
              Resultados Reales con RestaurUP
            </h1>
            <p className="text-xl text-white dark:text-gray-300 max-w-3xl mx-auto">
              Casos reales de establecimientos que han transformado sus números
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {results.map((result, index) => (
              <ResultCard 
                key={index}
                title={result.title}
                desc={result.desc}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Impacto promedio en nuestros clientes
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                  Nuestro programa ayuda a restaurantes a reducir costes operativos, mejorar eficiencia e incrementar satisfacción de clientes.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Control exhaustivo del food cost (<30%)",
                    "Reducción de desperdicios con gestión inteligente",
                    "Procedimientos estandarizados y checklists",
                    "Optimización de tiempos de preparación",
                    "Programas de fidelización efectivos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="text-[#D96C4B] w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden h-80">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Equipo de restaurante trabajando"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-medium">Caso de éxito</p>
                    <h3 className="text-xl font-bold">Restaurante Marbella</h3>
                    <p className="text-gray-300">+22% beneficio en 4 meses</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-8 max-w-3xl mx-auto">
              <p className="text-sm text-gray-200 italic">
                *Los porcentajes son aproximados, basados en casos reales. Resultados pueden variar según implementación.
              </p>
            </div>
            
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-[#D96C4B] to-orange-600 hover:from-[#D96C4B]/90 hover:to-orange-600/90 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/contacto" className="flex items-center">
                <span>Solicita tu diagnóstico gratuito</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#D96C4B]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-orange-600/10 blur-3xl"></div>
        </div>
      </section>
    </Layout>
  );
};

export default Resultados;