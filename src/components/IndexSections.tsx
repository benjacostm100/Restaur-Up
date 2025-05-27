import { Search, Map, Wrench, BarChart, UserCheck, Utensils, Receipt, TrendingUp, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const IndexSections = () => {
  const fases = [
    { icon: Search, text: "Análisis: evaluamos tu situación y objetivos reales" },
    { icon: Map, text: "Plan de acción: trazamos una estrategia operativa" },
    { icon: Wrench, text: "Implementación y ajustes: aplicamos en cocina, sala y gestión" },
    { icon: BarChart, text: "Resultados: medimos, comparamos y mejoramos" },
  ];

  const modulos = [
    { icon: Utensils, text: "Food Cost: control de escandallos, mermas y precios" },
    { icon: Receipt, text: "Otros Costes: optimización de plantilla, energía y consumibles" },
    { icon: TrendingUp, text: "Revenue Management: estrategia de precios y mix de venta" },
    { icon: Settings, text: "Optimización de Procesos: sistemas de control y estandarización" },
  ];

  const programas = [
    {
      icon: Wrench,
      title: "Programa DIY",
      desc: "Guías y herramientas para implementar mejoras de forma autónoma.",
      extra: "Resultados desde la semana 3",
    },
    {
      icon: UserCheck,
      title: "Programa Full Service",
      desc: "Nosotros ejecutamos, tú supervisas. Perfecto para quienes no tienen tiempo.",
      extra: "Seguimiento 1:1 y soporte directo",
    },
  ];

  return (
    <main className="bg-gradient-to-br from-[#FFE9D6] to-[#FFFAF4] py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Método + Módulos */}
        <section className="text-center space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#D96C4B]">¿Cómo aplicamos RestaurUP en tu restaurante?</h2>
            <p className="text-gray-700 max-w-xl mx-auto mt-3 text-sm">
              Nuestro método combina 4 fases clave y módulos operativos para resultados sostenibles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {fases.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center bg-white p-3 rounded-lg shadow-sm border border-[#f2d6c7] text-center"
              >
                <item.icon className="text-[#D96C4B]" size={24} />
                <p className="text-xs mt-2 text-gray-800">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-6">
            {modulos.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center bg-white p-3 rounded-lg shadow-sm border border-[#f2d6c7] text-center"
              >
                <item.icon className="text-[#D96C4B]" size={24} />
                <p className="text-xs mt-2 text-gray-800">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <Button variant="outline" size="sm" className="mt-6 text-[#D96C4B] border-[#D96C4B] hover:bg-[#D96C4B] hover:text-white transition-all">
            Explora más detalles
          </Button>
        </section>

        {/* Programas */}
        <section className="text-center space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#D96C4B]">Programas diseñados para tu restaurante</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {programas.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-sm border border-[#f2d6c7] text-left space-y-2"
              >
                <div className="flex items-center gap-2">
                  <item.icon className="text-[#D96C4B]" size={24} />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-700">{item.desc}</p>
                <p className="text-sm text-[#D96C4B] font-semibold">{item.extra}</p>
              </motion.div>
            ))}
          </div>

          <Button variant="default" size="sm" className="bg-[#D96C4B] text-white hover:bg-[#b85738] transition-all mt-4">
            Solicita tu diagnóstico gratuito
          </Button>
        </section>

      </div>
    </main>
  );
};

export default IndexSections;
