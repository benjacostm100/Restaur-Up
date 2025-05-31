import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

interface DiagnosticoFormProps {
  className?: string;
}

export const DiagnosticoForm = ({ className }: DiagnosticoFormProps) => {
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

    // EmailJS Config
    const serviceID = "service_pxqbdh7";
    const templateID = "template_a8ppzqt";  
    const publicKey = "5LU4B4p8JEgxzEvVn";

    const templateParams = {
      nombre: formData.nombre,
      restaurante: formData.restaurante,
      email: formData.email,
      telefono: formData.telefono,
      ciudad: formData.ciudad,
      mejorar: formData.mejorar,
      time: new Date().toLocaleString(),
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
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
      })
      .catch((error) => {
        toast({
          title: "Error al enviar",
          description: "Por favor, inténtalo de nuevo.",
        });
        console.error("Error:", error);
      });
  };

  return (
    <Card className={`p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl ${className}`}>
      <h2 className="text-3xl font-bold text-orange-600 drop-shadow-md py-2 mb-6 text-center">
        Solicitar Diagnóstico Gratuito
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
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
  );
};
