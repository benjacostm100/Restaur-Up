import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Clock, BarChart, Users } from "lucide-react";

const ProgramasHome = () => {
  const programas = [
    {
      title: "RestaurUP Guiado",
      description: "Implementación paso a paso con nuestro acompañamiento",
      icon: CheckCircle,
      features: [
        "Método estructurado en 4 fases",
        "Sesiones semanales 1:1",
        "Plantillas y herramientas digitales",
      ],
      price: "Desde $990/mes"
    },
    {
      title: "RestaurUP Premium",
      description: "Implementación completa por nuestro equipo",
      icon: Zap,
      features: [
        "Diagnóstico inicial completo",
        "Implementación directa por expertos",
        "Soporte prioritario 24/7",
      ],
      price: "Desde $2,990/mes"
    }
  ];

  return (
    <section className="bg-transparent py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestros <span className="text-[#D96C4B]">Programas</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones diseñadas para cada necesidad de tu restaurante
          </p>
        </motion.div>

        {/* Programas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {programas.map((programa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-gray-800 hover:border-[#D96C4B]/30 transition-all relative overflow-hidden"
            >
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D96C4B]/5 rounded-full blur-xl"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#D96C4B]/10 rounded-lg">
                    <programa.icon className="text-[#D96C4B]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{programa.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{programa.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {programa.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-[#D96C4B] mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón Ver Más */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Button
            asChild
            className="bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white px-8 py-4 rounded-lg font-medium"
          >
            <Link to="/programa">
              Ver detalles completos
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramasHome;