import React from 'react';
import Layout from '@/components/Layout';

const PoliticaPrivacidad = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 pt-40 pb-32 px-4 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Encabezado con degradado oscuro */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidad</h1>
                <p className="text-gray-300 mt-2">Última actualización: mayo 2025</p>
              </div>
              <div className="hidden md:block bg-white/10 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="p-8 md:p-10 space-y-8 text-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-gray-500 font-medium">Responsable:</p>
                <p className="text-gray-800 font-semibold">RestaurUP</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-500 font-medium">Contacto:</p>
                <a href="mailto:hola@restaurup.com" className="text-[#D96C4B] hover:underline font-semibold">hola@restaurup.com</a>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl border border-gray-300">
              <p>
                En RestaurUP, nos comprometemos a proteger tu privacidad. Recopilamos únicamente la información necesaria para ofrecerte nuestros servicios de consultoría estratégica para restaurantes y hoteles.
              </p>
            </div>

            {[ 
              { title: "Finalidad del tratamiento", content: "Atender consultas realizadas a través del formulario de contacto o WhatsApp, gestionar solicitudes de diagnóstico gratuito, enviar información comercial relacionada con nuestros servicios y mejorar la experiencia del usuario en la web." },
              { title: "Base legal", content: "El consentimiento expreso del interesado al marcar las casillas correspondientes en los formularios." },
              { title: "Conservación de datos", content: "Conservaremos tus datos durante el tiempo necesario para atender tu consulta y, si nos autorizas, enviarte comunicaciones comerciales. Puedes darte de baja en cualquier momento." },
              { title: "Comunicación de datos", content: "No se cederán datos a terceros salvo obligación legal." },
              { title: "Derechos", content: "Tienes derecho a acceder, rectificar y suprimir los datos, así como otros derechos reconocidos por el RGPD. Puedes ejercerlos escribiéndonos a hola@restaurup.com." },
              { title: "Medidas de seguridad", content: "Aplicamos las medidas técnicas y organizativas necesarias para garantizar la confidencialidad, integridad y disponibilidad de tu información." }
            ].map((item, index) => (
              <div key={index} className="group">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center mb-3">
                  <span className="w-2 h-2 bg-[#D96C4B] rounded-full mr-3"></span>
                  {item.title}
                </h2>
                <p className="text-gray-600 pl-5 border-l-2 border-gray-300 group-hover:border-[#D96C4B] transition-colors">
                  {item.content}
                </p>
              </div>
            ))}

            <div className="pt-6 border-t border-gray-300">
              <p className="text-sm text-gray-500">
                Esta política puede ser actualizada periódicamente. Te recomendamos revisarla regularmente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaPrivacidad;
