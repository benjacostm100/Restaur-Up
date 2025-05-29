import { motion } from "framer-motion";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import res1 from "/imagenes/res1.jpg";
import res2 from "/imagenes/res2.jpg";
import res3 from "/imagenes/res3.jpg";
import res4 from "/imagenes/res4.jpg";

const casos = [
  {
    id: 1,
    color: "#D96C4B",
    caso: "CASO 1: Restaurante La Tradición",
    subtitulo: "Caso de éxito: Restaurante familiar en zona turística",
    logros: [
      { metric: "+15%", text: "de margen de beneficio en carta" },
      { metric: "-20%", text: "en desperdicio de alimentos" },
      { metric: "+25%", text: "en eficiencia operativa" },
      { metric: "✔", text: "Mejora notable en satisfacción del cliente" },
    ],
    transformacionTitulo: "Transformación total",
    transformacionTexto: "De la intuición a un restaurante rentable y sostenible",
    imagen: res1,
  },
  {
    id: 2,
    color: "#FF9068",
    caso: "CASO 2: Restaurante Urbano de Cocina Mediterránea",
    subtitulo: "Caso de éxito: Restaurante de volumen en ciudad",
    logros: [
      { metric: "+18%", text: "de margen en carta media" },
      { metric: "-25%", text: "en desperdicio de materia prima" },
      { metric: "+30%", text: "de velocidad en el pase" },
      { metric: "✔", text: "Mejora directa en la rotación de mesas" },
    ],
    transformacionTitulo: "Transformación operativa",
    transformacionTexto: "De escandallos confusos a una gestión rentable y ágil",
    imagen: res2,
  },
  {
    id: 3,
    color: "#7ED957",
    caso: "CASO 3: Departamento F&B de Hotel 4*",
    subtitulo: "Caso de éxito: Hotel en Costa Brava – F&B",
    logros: [
      { metric: "-20%", text: "en costes operativos sin reducir personal" },
      { metric: "+22%", text: "en ingresos por comensal" },
      { metric: "✔", text: "Optimización de ratios por turno" },
      { metric: "+15%", text: "en satisfacción del equipo de sala y cocina" },
    ],
    transformacionTitulo: "Transformación estratégica",
    transformacionTexto: "De la improvisación a un departamento con procesos y control real",
    imagen: res3,
  },
  {
    id: 4,
    color: "#4D8BFF",
    caso: "CASO 4: Grupo de Restauración con 3 locales",
    subtitulo: "Caso de éxito: Grupo de restaurantes en Barcelona (3 locales)",
    logros: [
      { metric: "✔", text: "Estandarización de escandallos y compras en los 3 locales" },
      { metric: "-28%", text: "en sobrecostes por mala previsión" },
      { metric: "+35%", text: "de rentabilidad acumulada en carta" },
      { metric: "✔", text: "Dirección centralizada y foco estratégico semanal" },
    ],
    transformacionTitulo: "Transformación de grupo",
    transformacionTexto: "De locales independientes a una operativa unificada y rentable",
    imagen: res4,
  },
];

export default function CasosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === casos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? casos.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoPlay, currentIndex]);

  const currentCaso = casos[currentIndex];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-r from-gray-950/90 via-gray-950 to-orange-950 overflow-hidden">
      {/* Efectos de fondo dinámicos */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900 to-transparent"
          animate={{
            background: `linear-gradient(90deg, transparent, ${currentCaso.color}20, transparent)`
          }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block text-[#D96C4B] font-semibold tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            RESULTADOS MEDIBLES
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            De la teoría a la práctica
          </motion.h2>
        </div>

        <div 
          className="relative h-[600px] md:h-[500px] mb-12"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >

          {/* Contenido del carousel */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 grid md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Columna de texto */}
            <div className="flex flex-col justify-center p-4 md:p-8">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-6 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="inline-block w-4 h-4 rounded-full mr-3" style={{ backgroundColor: currentCaso.color }} />
                {currentCaso.caso}
              </motion.h3>
              
              <motion.p 
                className="text-gray-400 mb-8 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {currentCaso.subtitulo}
              </motion.p>
              
              <ul className="space-y-4">
                {currentCaso.logros.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="flex items-start text-white"
                  >
                    <CheckCircle className="text-[#D96C4B] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">
                      <strong className="text-xl">{item.metric}</strong>{" "}
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Columna de imagen */}
            <motion.div
              className="relative h-full rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={currentCaso.imagen}
                alt="Caso de éxito"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <motion.h4 
                  className="text-2xl md:text-3xl font-bold mb-2 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {currentCaso.transformacionTitulo}
                </motion.h4>
                <motion.p 
                  className="text-gray-300 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {currentCaso.transformacionTexto}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-8">
          {casos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-[#D96C4B] w-6' : 'bg-gray-600'}`}
              aria-label={`Ir al caso ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}