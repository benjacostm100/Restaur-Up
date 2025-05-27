
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Modulos = () => {
  return (
    <Layout>
      <section 
        className="py-20 px-4 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">4 Módulos Clave</h1>
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              { title: "Food Cost", desc: "Controla y optimiza el coste de tus ingredientes para maximizar la rentabilidad de cada plato." },
              { title: "Otros Costes", desc: "Gestiona eficientemente personal, alquiler, servicios y todos los gastos operativos." },
              { title: "Revenue Management", desc: "Estrategias avanzadas para aumentar ticket medio y frecuencia de visita." },
              { title: "Procesos", desc: "Sistemas operativos que permiten que tu restaurante funcione sin tu presencia constante." }
            ].map((modulo, index) => (
              <Card key={index} className="p-8 bg-gray-900/90 border-gray-800 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-[#D96C4B]">{modulo.title}</h3>
                <p className="text-gray-300 text-lg">{modulo.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg" 
              className="bg-[#D96C4B] hover:bg-[#D96C4B]/90 text-white"
            >
              <Link to="/resultados">Ver resultados reales</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Modulos;
