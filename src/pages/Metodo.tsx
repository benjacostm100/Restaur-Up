
import { DollarSign, TrendingUp, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Metodo = () => {
  return (
    <Layout>
      {/* La Solución */}
      <section 
        className="py-20 px-4 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Conoce RestaurUP</h1>
          <p className="text-xl mb-16 text-gray-300 max-w-4xl mx-auto">
            El único programa integral que transforma restaurantes en negocios rentables y escalables
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, title: "Control de Costes", desc: "Optimiza cada euro que gastas" },
              { icon: TrendingUp, title: "Revenue Management", desc: "Maximiza tus ingresos estratégicamente" },
              { icon: Users, title: "Gestión de Equipos", desc: "Sistemas que funcionan sin ti" },
              { icon: Clock, title: "Procesos Eficientes", desc: "Operaciones fluidas y escalables" }
            ].map((pilar, index) => (
              <Card key={index} className="p-8 bg-gray-900/90 border-gray-800 text-center hover:border-[#D96C4B] transition-colors backdrop-blur-sm">
                <pilar.icon className="mx-auto mb-4 text-[#D96C4B]" size={48} />
                <h3 className="text-xl font-bold mb-4">{pilar.title}</h3>
                <p className="text-gray-400">{pilar.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* El Método en 4 Fases */}
      <section className="py-20 px-4 bg-[#F8F6F1] text-[#333333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Nuestro Método en 4 Fases</h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { fase: "01", title: "Diagnóstico", desc: "Analizamos tu situación actual y identificamos oportunidades" },
              { fase: "02", title: "Planificación", desc: "Diseñamos una estrategia personalizada para tu restaurante" },
              { fase: "03", title: "Implementación", desc: "Ejecutamos los cambios paso a paso con tu equipo" },
              { fase: "04", title: "Optimización", desc: "Monitoreamos resultados y ajustamos para máximo rendimiento" }
            ].map((fase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#D96C4B] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {fase.fase}
                </div>
                <h3 className="text-2xl font-bold mb-4">{fase.title}</h3>
                <p className="text-gray-600">{fase.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg" 
              className="bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white"
            >
              <Link to="/programa">Ver el programa completo</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Metodo;
