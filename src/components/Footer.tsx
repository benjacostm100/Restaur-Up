import { Facebook, Instagram, MessageCircle, Globe, Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const legalLinks = [
  { name: "Política de Privacidad", href: "#" },
  { name: "Términos y Condiciones", href: "#" },
  { name: "Aviso Legal", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#333333]">
      <div className="container mx-auto px-8 py-12">
        {/* Secciones principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* RestaurUP - Primera columna */}
          <div className="flex flex-col items-center text-center md:border-r md:border-gray-300">
            <h3 className="text-2xl font-bold text-[#D96C4B] mb-4">RestaurUP</h3>
            <p className="mb-4 text-gray-600 text-sm max-w-xs">
              Rentabilidad y estructura para restaurantes que quieren funcionar como un negocio.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D96C4B] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D96C4B] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/34900123456"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D96C4B] transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.restaurup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D96C4B] transition-colors"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Contacto - Segunda columna */}
          <div className="flex flex-col items-center text-center md:border-r md:border-gray-300">
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <div className="space-y-3 max-w-xs">
              <div className="flex items-start gap-2">
                <Mail size={18} className="text-[#D96C4B] mt-1" />
                <a href="mailto:info@restaurup.com" className="text-sm hover:text-[#D96C4B] transition-colors">
                  info@restaurup.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={18} className="text-[#D96C4B] mt-1" />
                <a href="tel:+34900123456" className="text-sm hover:text-[#D96C4B] transition-colors">
                  +34 900 123 456
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-[#D96C4B] mt-1" />
                <a href="https://www.restaurup.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#D96C4B] transition-colors">
                  www.restaurup.com
                </a>
              </div>
            </div>
          </div>

          {/* Legal - Tercera columna */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <nav>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-[#D96C4B] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-[#D96C4B] font-semibold">
          <p>&copy; {currentYear} RestaurUP | Rentabilidad y estructura para restaurantes que quieren funcionar como un negocio</p>
        </div>
      </div>
    </footer>
  );
}
