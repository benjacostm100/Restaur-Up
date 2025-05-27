
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Resultados = () => {
  return (
    <Layout>
      <section 
        className="py-20 px-4 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Resultados Reales</h1>
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              { 
                restaurant: "Pizzería Milano", 
                result: "+45% rentabilidad", 
                testimonial: "En 6 meses conseguimos triplicar nuestros beneficios sin trabajar más horas.",
                owner: "Carlos M."
              },
              { 
                restaurant: "Taberna del Puerto", 
                result: "-30% costes operativos", 
                testimonial: "Ahora tengo control total de mis números. Por fin sé exactamente dónde va cada euro.",
                owner: "Ana L."
              },
              { 
                restaurant: "Bistró Gourmet", 
                result: "+60% ticket medio", 
                testimonial: "Implementamos las estrategias de revenue y nuestros ingresos se dispararon.",
                owner: "Miguel R."
              },
              { 
                restaurant: "Casa Rural El Olivo", 
                result: "Libertad total", 
                testimonial: "Ahora puedo tomarme vacaciones sabiendo que el restaurante funciona solo.",
                owner: "Laura S."
              }
            ].map((caso, index) => (
              <Card key={index} className="p-8 bg-gray-900/90 border-gray-800 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-500 mr-2" size={24} />
                  <h3 className="text-xl font-bold">{caso.restaurant}</h3>
                </div>
                <div className="text-3xl font-bold text-[#D96C4B] mb-4">{caso.result}</div>
                <p className="text-gray-300 mb-4 italic">"{caso.testimonial}"</p>
                <p className="text-gray-500">- {caso.owner}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg" 
              className="bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white"
            >
              <Link to="/contacto">Quiero estos resultados para mi restaurante</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resultados;
