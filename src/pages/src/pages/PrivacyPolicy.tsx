import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navegación Simple */}
      <nav className="border-b bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-primary font-bold flex items-center gap-2">
            ← Volver a Partners
          </Link>
        </div>
      </nav>

      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Política de Privacidad</h1>
        <p className="text-gray-500 mb-10">Última actualización: Mayo 2026</p>

        <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Introducción</h2>
            <p>En Partners, valoramos la privacidad y protección de los datos personales de nuestros usuarios, clientes, aliados comerciales y visitantes del sitio web. La presente Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos, protegemos y tratamos la información proporcionada a través de nuestros canales digitales, formularios, campañas, plataformas y servicios.</p>
            <p className="mt-2">Al utilizar nuestro sitio web, formularios, automatizaciones, servicios o interactuar con cualquier activo digital administrado por Partners, el usuario acepta los términos establecidos en esta Política de Privacidad.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">2. Información que recopilamos</h2>
            <p>Partners puede recopilar información personal y corporativa de manera directa o automática, incluyendo, pero no limitada a:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Información de contacto:</strong> Nombre, correo corporativo, teléfono, cargo y empresa.</li>
              <li><strong>Información comercial:</strong> Datos de campañas, presupuestos, métricas de CRM y historial de interacción.</li>
              <li><strong>Información automática:</strong> Dirección IP, tipo de dispositivo, cookies y eventos de conversión.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">3. Finalidad del tratamiento de datos</h2>
            <p>La información recopilada podrá utilizarse para contactar prospectos, gestionar propuestas, ejecutar campañas de marketing, mejorar la experiencia del usuario y cumplir obligaciones legales. <strong>Partners no vende información personal a terceros.</strong></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Protección de la información</h2>
            <p>Implementamos medidas técnicas y organizativas para proteger los datos contra acceso no autorizado o pérdida. Sin embargo, no se puede garantizar seguridad absoluta frente a ataques externos o vulneraciones tecnológicas.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Tecnologías de seguimiento</h2>
            <p>Utilizamos herramientas como Google Analytics, Meta Pixel, LinkedIn Insight Tag y CRMs para analítica, remarketing y optimización de campañas.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">7. Confidencialidad y Propiedad Intelectual</h2>
            <p>Toda información estratégica, diseños, automatizaciones y activos digitales compartidos son considerados confidenciales y son propiedad intelectual de Partners.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">8. Limitación de responsabilidad</h2>
            <p>Partners presta servicios de estrategia digital pero no garantiza resultados financieros específicos, ya que estos dependen de variables externas del mercado y plataformas de terceros.</p>
          </section>

          <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Contacto y Aceptación</h2>
            <p className="text-blue-800">El uso de este sitio implica la aceptación de estos términos. Para consultas legales, contáctenos a través de nuestros canales oficiales.</p>
          </section>

        </div>
      </article>

      <footer className="bg-gray-100 py-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Partners. Todos los derechos reservados.
      </footer>
    </div>
  );
}
