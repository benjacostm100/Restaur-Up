import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha"; // <-- Importa el componente

const SolicitarDiagnostico = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    restaurante: "",
    email: "",
    telefono: "",
    ciudad: "",
    mejorar: ""
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      setCaptchaError(true);
      toast({
        title: "Verificación requerida",
        description: "Por favor, completa el captcha para continuar.",
      });
      return;
    }

    toast({
      title: "¡Solicitud enviada!",
      description: "Te contactaremos pronto para tu diagnóstico gratuito.",
    });

    setFormData({
      nombre: "",
      restaurante: "",
      email: "",
      telefono: "",
      ciudad: "",
      mejorar: ""
    });
    setCaptchaToken(null);
  };

  return (
    <Layout>
      <section className="relative pt-40 pb-36 px-4 bg-gradient-to-b from-[#0F0F0F] via-black/80 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-[#D96C4B]/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-20 w-40 h-40 rounded-full bg-[#D96C4B]/05 blur-3xl"></div>
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
              Diagnóstico sin coste
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-orange-500 dark:from-[#D96C4B] dark:to-orange-400">
              Optimiza tu restaurante hoy
            </h1>
            <p className="text-xl text-gray-200 dark:text-gray-300 max-w-3xl mx-auto">
              Completa este formulario y recibe un análisis personalizado de tu negocio
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl">
                <h2 className="text-3xl font-bold text-orange-600 drop-shadow-md py-2 mb-6 text-center">
                  Solicitar Diagnóstico Gratuito
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Campos de formulario */}
                  {/* ... Los campos que ya tenías, sin cambios ... */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nombre" className="text-gray-700 dark:text-gray-300">Nombre *</Label>
                      <Input 
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="restaurante" className="text-gray-700 dark:text-gray-300">Restaurante *</Label>
                      <Input 
                        id="restaurante"
                        value={formData.restaurante}
                        onChange={(e) => setFormData({...formData, restaurante: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono" className="text-gray-700 dark:text-gray-300">Teléfono *</Label>
                      <Input 
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="ciudad" className="text-gray-700 dark:text-gray-300">Ciudad</Label>
                    <Input 
                      id="ciudad"
                      value={formData.ciudad}
                      onChange={(e) => setFormData({...formData, ciudad: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="mejorar" className="text-gray-700 dark:text-gray-300">¿Qué te gustaría mejorar?</Label>
                    <Textarea 
                      id="mejorar"
                      value={formData.mejorar}
                      onChange={(e) => setFormData({...formData, mejorar: e.target.value})}
                      placeholder="Ej: Reducir costes, mejorar procesos, aumentar ventas..."
                    />
                  </div>

                  {/* hCaptcha */}
                  <div>
                    <HCaptcha
                      sitekey="f0def1c4-ea12-4f32-8b7c-4b4eee4ad2fe"
                      onVerify={(token) => {
                        setCaptchaToken(token);
                        setCaptchaError(false);
                      }}
                      onExpire={() => setCaptchaToken(null)}
                      theme="light"
                    />
                    {captchaError && (
                      <p className="text-sm text-red-500 mt-2">
                        Por favor, completa el captcha.
                      </p>
                    )}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#D96C4B] to-orange-600 hover:from-[#D96C4B]/90 hover:to-orange-600/90 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all"
                    >
                      Enviar
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            {/* Contenido derecho... */}
            {/* Contenido derecho */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative rounded-2xl overflow-hidden h-96 shadow-2xl group"
              >
                <img 
                  src="imagenes/analisis.jpg"
                  alt="Equipo de RestaurUP analizando datos"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <h4 className="text-white text-xl font-bold mb-2">Análisis personalizado</h4>
                    <p className="text-gray-300">Identificamos oportunidades específicas para tu negocio</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Card className="p-6 bg-gradient-to-r from-[#D96C4B] to-orange-600 text-white shadow-xl">
                  <div className="flex items-start">
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      <Clock className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Respuesta en 24 horas</h4>
                      <p>Nuestro equipo te contactará con un análisis inicial y recomendaciones.</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  "Sin compromiso",
                  "Totalmente gratuito",
                  "Personalizado",
                  "Confidencial"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <CheckCircle className="text-[#D96C4B] mr-2 w-5 h-5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolicitarDiagnostico;














