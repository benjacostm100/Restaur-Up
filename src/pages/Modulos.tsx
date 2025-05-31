import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ModuleSection = ({ title, problem, solution, benefits, image, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className={`relative overflow-hidden rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-lg border border-gray-800 ${
        index % 2 === 0 ? 'bg-gradient-to-br' : 'bg-gradient-to-bl'
      } from-gray-900/70 via-gray-800/50 to-gray-900/70 shadow-2xl`}
    >
      {/* Fondo con imagen difuminada */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={image} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-900/30"></div>
      </div>
      
      {/* Contenido */}
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                0{index + 1}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-orange-400 mb-3">¿Qué resolvemos?</h3>
              <p className="text-gray-300 text-lg">{problem}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-orange-400 mb-3">¿Cómo lo hacemos?</h3>
              <ul className="space-y-3">
                {solution.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="text-orange-400 mt-1 flex-shrink-0" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold text-orange-400 mb-4">¿Qué consigues?</h3>
              <ul className="space-y-4">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-orange-500/10 p-1.5 rounded-full mt-0.5">
                      <CheckCircle className="text-orange-400" size={18} />
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Efectos decorativos */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl"></div>
    </motion.section>
  );
};

const Modulos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const modules = [
    {
      title: "Food Cost",
      problem: "No saber qué platos son rentables y cuáles te hacen perder dinero.",
      solution: [
        "Escandallos bien hechos",
        "Fichas técnicas completas",
        "Control de mermas y porciones",
        "Precio ideal de cada plato"
      ],
      benefits: [
        "Aumentar márgenes sin tocar la carta",
        "Saber qué vender más (y qué no)",
        "Optimización del inventario",
        "Reducción de desperdicios"
      ],
      image: "imagenes/food.avif"
    },
    {
      title: "Costes Operativos",
      problem: "Descontrol en plantilla, horas extras, energía, consumibles...",
      solution: [
        "Análisis de costes fijos y variables",
        "Optimización de turnos y horarios",
        "Control de consumos y proveedores",
        "Establecimiento de límites rentables por área"
      ],
      benefits: [
        "Reducir un 15-30% tus costes sin afectar el servicio",
        "Liberar dinero que ahora se escapa cada mes",
        "Mayor control sobre gastos operativos",
        "Mejores condiciones con proveedores"
      ],
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Revenue Management",
      problem: "Tener mesas llenas y aun así no ganar dinero.",
      solution: [
        "Precio medio por comensal",
        "Mix de venta optimizado",
        "Control de turnos y rotación",
        "Estrategias de ticket medio"
      ],
      benefits: [
        "Aumentar ingresos por mesa sin subir precios",
        "Que cada servicio sea más rentable",
        "Mejor gestión de la capacidad",
        "Clientes más satisfechos"
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Optimización de Procesos",
      problem: "Operativa caótica, sin sistema, cada día diferente.",
      solution: [
        "Checklists por rol y tarea",
        "Estándares de apertura, cierre y pase",
        "Indicadores de seguimiento",
        "Comunicación interna y formación básica"
      ],
      benefits: [
        "Estabilidad operativa",
        "Menos errores y más tiempo para dirigir",
        "Equipo más autónomo y eficiente",
        "Experiencia del cliente consistente"
      ],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900 z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-60"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-20">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.span 
                className="inline-block bg-orange-500/10 text-[#D96C4B] px-4 py-2 rounded-full text-sm font-semibold mb-6"
                initial={{ scale: 0.9 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.2, type: "spring" }}
              >
                Módulos Especializados
              </motion.span>
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                Transforma tu <span className="bg-gradient-to-r from-[#D96C4B] to-orange-500 bg-clip-text text-transparent">restaurante</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                Cuatro pilares fundamentales para optimizar cada aspecto de tu negocio y maximizar rentabilidad
              </motion.p>
            </motion.div>
          </div>
          
          {/* Elementos decorativos */}
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-orange-500/10 blur-[100px]"></div>
          <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-amber-500/10 blur-[100px]"></div>
        </section>

        {/* Módulos */}
        <section className="relative py-12 px-4 max-w-6xl mx-auto">
          <div className="space-y-8">
            {modules.map((module, index) => (
              <ModuleSection 
                key={index}
                index={index}
                title={module.title}
                problem={module.problem}
                solution={module.solution}
                benefits={module.benefits}
                image={module.image}
              />
            ))}
          </div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Button 
              asChild
               
              className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all rounded-full px-8 py-6 text-lg font-semibold"
            >
              <Link to="/resultados">
                <span className="relative z-10 flex items-center gap-2">
                  Ver resultados reales
                  <ArrowRight className="w-5 h-5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </Button>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default Modulos;