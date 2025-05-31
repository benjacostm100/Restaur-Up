// ContactForm.tsx
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
  const { toast } = useToast();
  const hcaptchaRef = useRef<HCaptcha>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ 
    nombre: "", 
    email: "", 
    mensaje: "" 
  });
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hcaptchaToken) {
      toast({ 
        title: "Verificación requerida", 
        description: "Por favor, completa el captcha antes de enviar el mensaje." 
      });
      return;
    }

    try {
      const result = await emailjs.send(
        "service_pxqbdh7", // Reemplaza por tu Service ID
        "template_a8ppzqt", // Reemplaza por tu Template ID
        {
          nombre: formData.nombre,
          email: formData.email,
          mensaje: formData.mensaje,
          "h-captcha-response": hcaptchaToken, // Para validar el captcha en EmailJS si lo integras (opcional)
        },
        "5LU4B4p8JEgxzEvVn" // Reemplaza por tu Public Key
      );

      toast({ 
        title: "¡Mensaje enviado!", 
        description: "Te responderemos pronto a tu consulta." 
      });
      setFormData({ nombre: "", email: "", mensaje: "" });
      hcaptchaRef.current?.resetCaptcha();
      setHcaptchaToken(null);
    } catch (error) {
      toast({ 
        title: "Error al enviar el mensaje", 
        description: "Intenta nuevamente más tarde." 
      });
    }
  };

  return (
    <Card className={`p-8 bg-gradient-to-br from-[#1A1A1A] to-[#222222] border border-[#333] shadow-2xl h-full ${className}`}>
      <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#D96C4B] to-orange-500">
        Envíanos un mensaje
      </h3>
      <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
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
        <div>
          <HCaptcha
            sitekey="f0def1c4-ea12-4f32-8b7c-4b4eee4ad2fe"
            onVerify={(token) => setHcaptchaToken(token)}
            onExpire={() => setHcaptchaToken(null)}
            ref={hcaptchaRef}
            theme="dark"
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
  );
};
