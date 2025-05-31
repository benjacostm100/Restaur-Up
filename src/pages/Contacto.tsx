// pages/Contacto.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ContactForm } from "@/components/ContactForm";

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      content: "hola@restaurup.com.com"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+34 605 623 970"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+34 605 623 970"
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "www.restaurup.com"
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

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Formulario de contacto (primero en móvil) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 order-1 lg:order-2"
            >
              <ContactForm />
            </motion.div>

            {/* Información de contacto (segundo en móvil) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1"
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
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden h-80 shadow-2xl group"
              >
                <img 
                  src="imagenes/equipo.jpg"
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;