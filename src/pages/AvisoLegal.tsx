import React from 'react';
import Layout from '@/components/Layout';

const AvisoLegal = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 pt-40 pb-32 px-4 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white text-gray-800 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Encabezado */}
          <div className="bg-gray-800 text-white py-8 px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Aviso Legal</h1>
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
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-gray-500 font-medium">Titular del sitio:</p>
                <p className="font-semibold">RestaurUP</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-500 font-medium">Contacto:</p>
                <a href="mailto:hola@restaurup.com" className="text-[#FF9068] hover:underline font-semibold">hola@restaurup.com</a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
              <p>
                Este sitio web tiene como finalidad ofrecer información sobre los servicios de consultoría estratégica RestaurUP, orientados a la mejora de la rentabilidad y operativa de restaurantes y negocios de hostelería.
              </p>
              <p>
                El acceso a esta web es gratuito y no requiere suscripción previa. El usuario se compromete a utilizar el sitio conforme a la ley, la buena fe y el orden público. Está prohibido el uso del contenido de esta web con fines ilícitos o comerciales sin el consentimiento de RestaurUP.
              </p>
              <p>
                Queda prohibida la reproducción total o parcial de los contenidos de este sitio sin autorización expresa.
              </p>
              <p>
                RestaurUP no se hace responsable del mal uso que se haga de la web ni de los daños derivados del uso de la información contenida en ella.
              </p>
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

export default AvisoLegal;
