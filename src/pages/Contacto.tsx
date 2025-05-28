import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactItem = ({ icon: Icon, title, content, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex items-start p-4 bg-gradient-to-r from-[#1E1E1E] to-[#2A2A2A] rounded-lg group hover:from-[#D96C4B]/10 hover:to-[#D96C4B]/5 transition-all duration-300"
    >
      <div className="bg-[#D96C4B]/10 p-3 rounded-lg mr-4 group-hover:bg-[#D96C4B]/20 transition-colors">
        <Icon className="text-[#D96C4B] w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-gray-400">{content}</p>
      </div>
    </motion.div>
  );
};

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderemos pronto a tu consulta.",
    });
    setFormData({
      nombre: "",
      email: "",
      mensaje: ""
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      content: "info@restaurup.com"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+34 900 123 456"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+34 600 123 456"
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "Calle Restauración, 123\n28001 Madrid, España"
    }
  ];

  return (
    <Layout>
      <section className="relative py-40 px-4 bg-gradient-to-b from-gray-950 to-[#1A1A1A] overflow-hidden">
        {/* Elementos decorativos */}
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
            className="text-center mb-20"
          >
            <span className="inline-block bg-[#D96C4B]/10 text-[#D96C4B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Estamos aquí para ayudarte
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-orange-500">
              Contacta con nuestro equipo
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              ¿Tienes preguntas sobre nuestros servicios? Completa el formulario o usa nuestros canales directos.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <Card className="p-8 bg-gradient-to-br from-[#1A1A1A] to-[#222222] border border-[#333] shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-orange-500">
                  Información de Contacto
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contactMethods.map((method, index) => (
                    <ContactItem 
                      key={index}
                      icon={method.icon}
                      title={method.title}
                      content={method.content}
                      delay={index}
                    />
                  ))}
                </div>
              </Card>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden h-80 shadow-2xl group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Equipo de RestaurUP"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <h4 className="text-white text-xl font-bold mb-2">Nuestro equipo</h4>
                    <p className="text-gray-300">Expertos en transformación de restaurantes</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Formulario de consultas generales */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-gradient-to-br from-[#1A1A1A] to-[#222222] border border-[#333] shadow-2xl h-full">
                <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-orange-500">
                  Envíanos un mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nombre" className="text-gray-300 mb-2 block">Nombre *</Label>
                    <Input 
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      required
                      className="bg-[#2A2A2A] border-[#444] text-white placeholder:text-gray-500 hover:border-[#D96C4B]/50 focus:border-[#D96C4B] focus:ring-[#D96C4B]/20 transition-all"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300 mb-2 block">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="bg-[#2A2A2A] border-[#444] text-white placeholder:text-gray-500 hover:border-[#D96C4B]/50 focus:border-[#D96C4B] focus:ring-[#D96C4B]/20 transition-all"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mensaje" className="text-gray-300 mb-2 block">Mensaje *</Label>
                    <Textarea 
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                      required
                      className="bg-[#2A2A2A] border-[#444] text-white placeholder:text-gray-500 hover:border-[#D96C4B]/50 focus:border-[#D96C4B] focus:ring-[#D96C4B]/20 transition-all min-h-[150px]"
                      placeholder="Escribe tu consulta aquí..."
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-gradient-to-r from-[#D96C4B] to-orange-600 hover:from-[#D96C4B]/90 hover:to-orange-600/90 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;