
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#333333]">Solicita tu Diagnóstico Gratuito</h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Formulario */}
            <Card className="p-8 bg-white border-gray-200 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                    <Label htmlFor="restaurante" className="text-[#333333]">Nombre del Restaurante *</Label>
                    <Input 
                      id="restaurante"
                      value={formData.restaurante}
                      onChange={(e) => setFormData({...formData, restaurante: e.target.value})}
                      required
                      className="mt-2 bg-white border-gray-300 text-[#333333]"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
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
                    <Label htmlFor="telefono" className="text-[#333333]">Teléfono *</Label>
                    <Input 
                      id="telefono"
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      required
                      className="mt-2 bg-white border-gray-300 text-[#333333]"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="ciudad" className="text-[#333333]">Ciudad</Label>
                  <Input 
                    id="ciudad"
                    value={formData.ciudad}
                    onChange={(e) => setFormData({...formData, ciudad: e.target.value})}
                    className="mt-2 bg-white border-gray-300 text-[#333333]"
                  />
                </div>
                <div>
                  <Label htmlFor="mejorar" className="text-[#333333]">¿Qué te gustaría mejorar en tu restaurante?</Label>
                  <Textarea 
                    id="mejorar"
                    value={formData.mejorar}
                    onChange={(e) => setFormData({...formData, mejorar: e.target.value})}
                    className="mt-2 bg-white border-gray-300 text-[#333333]"
                    rows={4}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Al enviar este formulario, aceptas que contactemos contigo para ofrecerte información sobre RestaurUP. 
                  Respetamos tu privacidad y no compartiremos tus datos.
                </p>
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white text-lg py-4"
                >
                  Solicitar Diagnóstico Gratuito
                </Button>
              </form>
            </Card>

            {/* Imagen destacada */}
            <div className="space-y-8">
              <div 
                className="h-96 rounded-lg bg-cover bg-center bg-no-repeat shadow-lg"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
                }}
              ></div>

              <Card className="p-6 bg-[#D96C4B] text-white shadow-lg">
                <h4 className="text-lg font-bold mb-2">Respuesta garantizada en 24h</h4>
                <p>Nuestro equipo de expertos revisará tu caso y te contactará con una propuesta personalizada para tu restaurante.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolicitarDiagnostico;
