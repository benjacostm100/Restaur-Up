import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaFinal = () => {
  const estoEsParaTi = [
    "Luchas por mantener tus márgenes de ganancia estables",
    "El personal no sigue procedimientos de forma consistente",
    "El food cost es un dolor constante",
    "Te sientes atrapado trabajando en lugar de dirigir",
    "La rotación de personal es alta",
  ];

  const funcionaraAunque = [
    "No tengas experiencia en optimización de costes",
    "Tu equipo no esté bien capacitado",
    "Ya hayas intentado reducir costes sin éxito",
    "No tengas tiempo para implementar cambios",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] py-16 px-6">
      <div className="absolute inset-0 opacity-10">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#D96C4B]"
            style={{
              width: Math.random() * 20 + 2 + 'px',
              height: Math.random() * 20 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 50],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center space-y-14"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D96C4B] to-[#FF9068]"
            variants={itemVariants}
          >
            ¿Es este tu caso?
          </motion.h2>

          <motion.div 
            className="grid lg:grid-cols-2 gap-10 text-left"
            variants={containerVariants}
          >
            {/* Columna 1 */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-6 rounded-2xl border border-[#2A2A2A] shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#D96C4B] to-[#FF9068]"
                variants={itemVariants}
              >
                Esto es para ti si...
              </motion.h3>
              <ul className="space-y-4">
                {estoEsParaTi.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-4 group"
                    variants={itemVariants}
                  >
                    <div className="p-2 bg-[#7ED957]/10 rounded-full">
                      <CheckCircle className="text-[#7ED957] flex-shrink-0" size={22} />
                    </div>
                    <p className="text-gray-300 text-base group-hover:text-white transition-colors">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Columna 2 */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-6 rounded-2xl border border-[#2A2A2A] shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#D96C4B] to-[#FF9068]"
                variants={itemVariants}
              >
                Funcionará para ti aunque...
              </motion.h3>
              <ul className="space-y-4">
                {funcionaraAunque.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-4 group"
                    variants={itemVariants}
                  >
                    <div className="p-2 bg-[#7ED957]/10 rounded-full">
                      <CheckCircle className="text-[#7ED957] flex-shrink-0" size={22} />
                    </div>
                    <p className="text-gray-300 text-base group-hover:text-white transition-colors">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              className=" border-[#D96C4B] bg-[#D96C4B]/10 text-[#D96C4B] hover:bg-white/10 hover:text-[#D96C4B] border transition-all group text-base"
            >
              Solicita tu diagnóstico gratuito
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaFinal;
