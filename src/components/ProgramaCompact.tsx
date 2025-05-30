import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const ProgramsCompact = () => {
  return (
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
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={item}
          >
            Elige tu <span className="text-[#D96C4B]">formato</span>
          </motion.h2>
          <motion.p className="text-gray-400 text-lg" variants={item}>
            ¿Prefieres autonomía o resultados sin complicarte?
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* RestaurUP Guiado */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial="hidden"
            whileInView="visible"
            variants={item}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8 rounded-2xl border border-gray-800 hover:border-[#D96C4B]/30 transition-all relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D96C4B]/5 rounded-full blur-xl"></div>
            <h3 className="text-2xl font-bold text-white mb-2">RestaurUP Guiado</h3>
            <p className="text-[#D96C4B] mb-12">Tú lo aplicas. Nosotros te acompañamos paso a paso.</p>

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

          {/* RestaurUP Premium */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial="hidden"
            whileInView="visible"
            variants={item}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8 rounded-2xl border-2 border-[#D96C4B]/50 hover:border-[#D96C4B] transition-all relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D96C4B]/10 rounded-full blur-xl"></div>
            <h3 className="text-2xl font-bold text-white mb-2">RestaurUP Premium</h3>
            <p className="text-[#D96C4B] mb-6">
              Nosotros lo implementamos por ti. Tú solo supervisas y ves los resultados
            </p>

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
              <Link to="/solicitar-diagnostico" className="flex items-center justify-center">
                Más detalles <ChevronRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsCompact;
