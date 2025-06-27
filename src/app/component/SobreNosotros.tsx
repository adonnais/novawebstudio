type SobreNosotrosData = {
  titulo: string;
  subtitulo: string;
  parrafos: string[];
  valores: string[];
  cta: {
    texto: string;
    boton: string;
  };
};

export default function SobreNosotros({ data }: { data: SobreNosotrosData }) {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 px-4 md:px-16 w-full">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-blue-600 dark:text-blue-400">
          {data.titulo}
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-10">
          {data.subtitulo}
        </p>

        <div className="space-y-6 text-base leading-7 text-gray-800 dark:text-gray-200">
          {data.parrafos.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-fuchsia-600 dark:text-fuchsia-400">
            Nuestros Valores
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
            {data.valores.map((valor, idx) => (
              <li key={idx}>{valor}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-lg font-medium text-gray-800 dark:text-gray-200">
            {data.cta.texto}
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white px-6 py-3 rounded-xl text-lg hover:scale-105 transition-transform shadow-lg">
            {data.cta.boton}
          </button>
        </div>
      </div>
    </section>
  );
}
