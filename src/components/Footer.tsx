import { Facebook, Instagram, MessageCircle, Globe, Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FooterLink = ({ href, children, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
  href={href}
  className="text-gray-600 hover:text-[#D96C4B] transition-all flex items-center group"
>
  <span className="flex items-center gap-1">
    {children}
    <ArrowRight className="w-4 h-3 text-[#D96C4B] opacity-0 transform translate-x-[-5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
  </span>
</a>

    </motion.li>
  );
};


const ContactItem = ({ icon: Icon, text, href, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex items-start gap-3 group"
    >
      <div className="bg-[#D96C4B]/10 p-2 rounded-lg group-hover:bg-[#D96C4B]/20 transition-colors">
        <Icon className="text-[#D96C4B] w-5 h-5" />
      </div>
      <a href={href} className="text-gray-400 hover:text-white transition-colors">
        {text}
      </a>
    </motion.div>
  );
};

const SocialIcon = ({ icon: Icon, href, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.a
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-[#D96C4B] text-gray-400 hover:text-white p-3 rounded-full transition-all"
    >
      <Icon size={20} />
    </motion.a>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const legalLinks = [
    { name: "Política de Privacidad", href: "/politica-privacidad" },
    { name: "Términos y Condiciones", href: "terminos-condiciones" },
    { name: "Aviso Legal", href: "aviso-legal" },
  ];

  const contactItems = [
    { icon: Mail, text: "hola@restaurup.com", href: "mailto:hola@restaurup.com" },
    { icon: Phone, text: "+34 605 623 970", href: "tel:+34 605 623 970" },
    { icon: Globe, text: "www.restaurup.com", href: "https://www.restaurup.com" },
  ];

  return (
    <footer className="bg-white text-gray-800 pt-20 pb-12 relative overflow-hidden">
  {/* Elementos decorativos */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#D96C4B]/5 to-transparent"></div>
    <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-[#D96C4B]/10 blur-3xl"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Contenido principal */}
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 text-center lg:text-left items-center lg:items-start"

    >
      {/* Logo y descripción */}
      <div className="space-y-6 flex flex-col items-center lg:items-start">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6 items-center lg:items-start"
        >
          <img
            src="/logo1.png"
            alt="RestaurUP logo"
            className="h-auto w-44"
          />
          <p className="text-gray-600">
            Rentabilidad y estructura para restaurantes que quieren funcionar como un negocio.
          </p>
        </motion.div>

      </div>

      {/* Contacto */}
      <div className="space-y-6 flex flex-col items-center lg:items-start">
        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-xl font-bold text-gray-800">
          Contacto
        </motion.h4>
        <ul className="space-y-4">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex items-start gap-3 group"
            >
              <div className="bg-[#D96C4B]/10 p-2 rounded-lg group-hover:bg-[#D96C4B]/20 transition-colors">
                <item.icon className="text-[#D96C4B] w-5 h-5" />
              </div>
              <a href={item.href} className="text-gray-600 hover:text-[#D96C4B] transition-colors">
                {item.text}
              </a>
            </motion.div>
          ))}
        </ul>
      </div>

      {/* Legal */}
      <div className="space-y-6 flex flex-col items-center lg:items-start">
        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-xl font-bold text-gray-800">
          Legal
        </motion.h4>
        <ul className="space-y-3">
          {legalLinks.map((link, index) => (
            <FooterLink key={index} href={link.href} index={index}>
              {link.name}
            </FooterLink>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="space-y-6 flex flex-col items-center lg:items-start">
        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-xl font-bold text-gray-800">
          Suscríbete
        </motion.h4>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} className="text-gray-600">
          Recibe consejos y actualizaciones directamente en tu correo.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="flex">
          <input type="email" placeholder="Tu email" className="bg-gray-100 text-gray-800 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#D96C4B] w-full" />
          <button className="bg-gradient-to-r from-[#D96C4B] to-orange-600 hover:from-[#D96C4B]/90 hover:to-orange-600/90 text-white px-4 py-3 rounded-r-lg transition-all">
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </motion.div>

    {/* Copyright */}
    <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="border-t border-gray-300 pt-8 text-center">
      <p className="text-gray-500">
        &copy; {currentYear} RestaurUP. Todos los derechos reservados.
      </p>
    </motion.div>
  </div>
</footer>

  );
}