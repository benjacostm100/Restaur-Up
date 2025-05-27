
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Programa = () => {
  return (
    <Layout>
      <section 
        className="py-20 px-4 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Elige Tu Modalidad</h1>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-gray-900/90 border-gray-800 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-6 text-[#D96C4B]">DIY (Hazlo Tú Mismo)</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3" size={20} /> Acceso a todos los módulos</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3" size={20} /> Plantillas y herramientas</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3" size={20} /> Comunidad exclusiva</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3" size={20} /> Soporte básico</li>
              </ul>
              <p className="text-gray-400 mb-6">Ideal para: Restauradores con tiempo y ganas de implementar</p>
            </Card>
            <Card className="p-8 bg-gray-900/90 border-[#D96C4B] border-2 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-6 text-[#D96C4B]">Full Service</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3" size={20} /> Todo lo del DIY</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3" size={20} /> Consultoría personalizada</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3" size={20} /> Implementación asistida</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3" size={20} /> Seguimiento mensual</li>
              </ul>
              <p className="text-gray-400 mb-6">Ideal para: Restauradores ocupados que quieren resultados rápidos</p>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg" 
              className="bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white"
            >
              <Link to="/contacto">Solicita tu diagnóstico gratuito</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-[#F8F6F1] text-[#333333]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Esto es para ti si...</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <ul className="space-y-4 text-left">
                <li className="flex items-center"><CheckCircle className="text-green-600 mr-3" size={20} /> Tienes un restaurante funcionando</li>
                <li className="flex items-center"><CheckCircle className="text-green-600 mr-3" size={20} /> Quieres aumentar la rentabilidad</li>
                <li className="flex items-center"><CheckCircle className="text-green-600 mr-3" size={20} /> Estás dispuesto a implementar cambios</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4 text-left">
                <li className="flex items-center"><CheckCircle className="text-green-600 mr-3" size={20} /> Buscas libertad y escalabilidad</li>
                <li className="flex items-center"><CheckCircle className="text-green-600 mr-3" size={20} /> Quieres sistemas profesionales</li>
                <li className="flex items-center"><CheckCircle className="text-green-600 mr-3" size={20} /> Necesitas resultados medibles</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#D96C4B]">Funcionará aunque...</h3>
            <p className="text-lg text-gray-600">
              Seas nuevo en gestión, tengas un equipo pequeño, o creas que "tu restaurante es diferente". 
              Nuestro método se adapta a cualquier tipo de establecimiento y situación.
            </p>
          </div>
          
          <Button 
            asChild
            size="lg" 
            className="bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white text-xl px-12 py-6"
          >
            <Link to="/contacto">Solicita tu diagnóstico gratuito ahora</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Programa;
