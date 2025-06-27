"use client";

interface EmpresaData {
  quienes_somos: string;
  mision: string;
  vision: string;
}

interface QuienesSomosProps {
  data: EmpresaData;
}

export default function QuienesSomos({ data }: QuienesSomosProps) {
  return (
    <section
      className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 text-dark w-full transition-colors duration-500"
      id="quienes-somos"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 font-poppins text-blue-700 dark:text-blue-300 drop-shadow">
          ¿Quiénes Somos?
        </h2>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-inter mb-14 leading-relaxed max-w-3xl mx-auto">
          {data.quienes_somos}
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-fuchsia-300 dark:border-fuchsia-600 p-8 shadow-lg hover:shadow-fuchsia-400/50 dark:hover:shadow-fuchsia-600/40 transition hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-fuchsia-500 dark:text-fuchsia-400 mb-3">🎯 Misión</h3>
            <p className="text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
              {data.mision}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-blue-300 dark:border-blue-500 p-8 shadow-lg hover:shadow-blue-400/50 dark:hover:shadow-blue-500/40 transition hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-3">🚀 Visión</h3>
            <p className="text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
              {data.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
