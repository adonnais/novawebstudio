type ContactoData = {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  formulario: {
    nombre: string;
    email: string;
    mensaje: string;
    enviar: string;
  };
  informacion_adicional: {
    telefono: string;
    email_contacto: string;
  };
};

export default function Contacto({ data }: { data: ContactoData }) {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 py-20 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-2">
          {data.titulo}
        </h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-6">
          {data.subtitulo}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-center">
          {data.descripcion}
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Formulario */}
          <form className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
                {data.formulario.nombre}
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
                {data.formulario.email}
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
                {data.formulario.mensaje}
              </label>
              <textarea
                rows={5}
                className="w-full border rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white py-3 rounded-lg hover:scale-105 transition transform shadow-lg"
            >
              {data.formulario.enviar}
            </button>
          </form>

          {/* Información adicional */}
          <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 space-y-4 text-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Información adicional
            </h3>
            <p>📞 {data.informacion_adicional.telefono}</p>
            <p>✉️ {data.informacion_adicional.email_contacto}</p>
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Pronto agregaremos integración con WhatsApp, Google Maps y más...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
