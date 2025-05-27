
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
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

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#333333]">Contacto</h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <Card className="p-8 bg-white border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-[#D96C4B]">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="mr-4 text-[#D96C4B]" size={24} />
                    <div>
                      <p className="font-semibold text-[#333333]">Email</p>
                      <p className="text-gray-600">info@restaurup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-4 text-[#D96C4B]" size={24} />
                    <div>
                      <p className="font-semibold text-[#333333]">Teléfono</p>
                      <p className="text-gray-600">+34 900 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="mr-4 text-[#D96C4B]" size={24} />
                    <div>
                      <p className="font-semibold text-[#333333]">WhatsApp</p>
                      <p className="text-gray-600">+34 900 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-4 text-[#D96C4B]" size={24} />
                    <div>
                      <p className="font-semibold text-[#333333]">Dirección</p>
                      <p className="text-gray-600">Calle Restauración, 123<br />28001 Madrid, España</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div 
                className="h-64 rounded-lg bg-cover bg-center bg-no-repeat shadow-lg"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
                }}
              ></div>
            </div>

            {/* Formulario de consultas generales */}
            <Card className="p-8 bg-white border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#D96C4B]">Consultas Generales</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-[#333333]">Nombre *</Label>
                  <Input 
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    required
                    className="mt-2 bg-white border-gray-300 text-[#333333]"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#333333]">Email *</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="mt-2 bg-white border-gray-300 text-[#333333]"
                  />
                </div>
                <div>
                  <Label htmlFor="mensaje" className="text-[#333333]">Mensaje *</Label>
                  <Textarea 
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    required
                    className="mt-2 bg-white border-gray-300 text-[#333333]"
                    rows={6}
                    placeholder="Escribe tu consulta aquí..."
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white text-lg py-4"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
