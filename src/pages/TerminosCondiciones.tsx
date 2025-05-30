import React from 'react';
import Layout from '@/components/Layout';

const TerminosCondiciones = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 pt-40 pb-32 px-4 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white text-gray-800 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Encabezado */}
          <div className="bg-gray-800 text-white py-8 px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Términos y Condiciones</h1>
                <p className="text-gray-300 mt-2">Última actualización: mayo 2025</p>
              </div>
              <div className="hidden md:block bg-white/10 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-8 md:p-10 space-y-8">
            <div className="space-y-6">
              <p>
                El uso del sitio web <a href="https://www.restaurup.com" className="text-[#FF9068] hover:underline font-semibold">www.restaurup.com</a> implica la aceptación de los presentes Términos y Condiciones:
              </p>

              <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div>
                  <h2 className="font-semibold text-lg mb-2">1. Objeto</h2>
                  <p>
                    Ofrecer información sobre los servicios profesionales de RestaurUP y facilitar el contacto para solicitar diagnósticos personalizados o contratar dichos servicios.
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold text-lg mb-2">2. Condiciones de uso</h2>
                  <p>
                    El usuario se compromete a hacer un uso adecuado de los contenidos, a no emplearlos para actividades ilícitas o contrarias a la buena fe y al orden público.
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold text-lg mb-2">3. Propiedad intelectual</h2>
                  <p>
                    Todos los textos, imágenes, logos y elementos gráficos del sitio son propiedad de RestaurUP o tienen derechos de uso. Se prohíbe su reproducción total o parcial sin autorización previa.
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold text-lg mb-2">4. Modificaciones</h2>
                  <p>
                    RestaurUP se reserva el derecho a modificar o eliminar contenidos de este sitio web sin previo aviso.
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold text-lg mb-2">5. Legislación aplicable</h2>
                  <p>
                    Estas condiciones se rigen por la legislación española y cualquier controversia será resuelta por los tribunales de Barcelona, salvo disposición legal en contra.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-300">
              <p className="text-sm text-gray-500">
                Esta información puede actualizarse en cualquier momento. Te recomendamos revisarla periódicamente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TerminosCondiciones;
