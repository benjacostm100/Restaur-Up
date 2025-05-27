import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ModuloCard = ({ title, items, image, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className="h-full "
    >
      <Card className="h-full overflow-hidden group relative border-0 bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D96C4B]/10 to-[#D96C4B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10 p-8 h-full flex flex-col">
          <div className="flex items-start mb-6">
            <div className="bg-[#D96C4B]/10 p-3 rounded-lg mr-4">
              <CheckCircle className="text-[#D96C4B] w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
          </div>
          
          <ul className="space-y-4 text-gray-700 dark:text-gray-300 flex-grow">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-[#D96C4B] mr-3 mt-1 flex-shrink-0" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 overflow-hidden rounded-lg">
            <motion.img 
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 1 }}
            />
          </div>
        </div>
      </Card>
    </motion.div>
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
      items: [
        "Controla y optimiza el coste de tus ingredientes para maximizar rentabilidad",
        "Calcula el food cost de cada receta de forma rápida y sencilla",
        "Reduce desperdicios y ajusta porciones inteligentemente",
        "Define precios de venta estratégicos para márgenes saludables",
        "Analiza el impacto de cambios de precios en tu rentabilidad"
      ],
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Otros Costes",
      items: [
        "Gestiona personal, alquiler y gastos operativos eficientemente",
        "Identifica y reduce gastos innecesarios sin perder calidad",
        "Optimiza turnos de trabajo y evita horas extra innecesarias",
        "Ajusta tu estructura de costes para enfrentar la inflación",
        "Negocia con proveedores y busca mejores condiciones"
      ],
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Revenue Management",
      items: [
        "Estrategias para aumentar ticket medio y frecuencia de visita",
        "Técnicas para incrementar el consumo promedio por comensal",
        "Diseña promociones y menús que aumenten la facturación",
        "Implementa sistemas de reservas para maximizar ocupación",
        "Fideliza clientes con estrategias que generan recurrencia"
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Procesos",
      items: [
        "Sistemas operativos para que tu restaurante funcione sin ti",
        "Protocolos claros para cocina, sala, limpieza y compras",
        "Checklist diarios y herramientas de control efectivas",
        "Optimización de tiempos y reducción de errores operativos",
        "Automatiza tareas rutinarias para liberar tiempo y enfoque"
      ],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  return (
    <Layout>
      <section className="py-40 px-4 relative bg-gradient-to-b from-black via-orange-900 to-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#D96C4B]/10 text-[#D96C4B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Módulos Especializados
            </span>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D96C4B] to-orange-600 dark:from-[#D96C4B] dark:to-orange-400 mb-4 pb-4">
              Domina cada aspecto de tu negocio
            </h1>
            <p className="text-xl text-white dmax-w-3xl mx-auto">
              Cuatro pilares fundamentales para transformar la gestión de tu restaurante
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <ModuloCard 
                key={index}
                title={module.title}
                items={module.items}
                image={module.image}
                delay={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <Button 
              asChild
              size="lg" 
              className="relative overflow-hidden group bg-gradient-to-r from-[#D96C4B] to-orange-600 hover:from-[#D96C4B]/90 hover:to-orange-600/90 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/resultados">
                <span className="relative z-10">Ver resultados reales</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-[#D96C4B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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

export default Modulos;