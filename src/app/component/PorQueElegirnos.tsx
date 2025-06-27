"use client";
import { motion } from "framer-motion";

const razones = [
  {
    titulo: "Diseño Personalizado",
    descripcion: "Cada proyecto es único. Creamos soluciones adaptadas a tus objetivos.",
    icono: "🎨",
  },
  {
    titulo: "Optimización SEO",
    descripcion: "Aparece en Google y gana visibilidad real con nuestro enfoque técnico.",
    icono: "🚀",
  },
  {
    titulo: "Soporte Cercano",
    descripcion: "Estamos contigo antes, durante y después del desarrollo.",
    icono: "🤝",
  },
  {
    titulo: "Velocidad & Rendimiento",
    descripcion: "Webs rápidas, ligeras y que encantan a tus visitantes.",
    icono: "⚡",
  },
];

export default function PorQueElegirnos() {
  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-900 text-dark dark:text-gray-100 w-full" id="ventajas">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 font-poppins text-blue-700 dark:text-blue-400">
          ¿Por qué elegir <span className="text-fuchsia-500 dark:text-fuchsia-400">Nova Web Studio</span>?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12 font-inter">
          Tu crecimiento digital empieza con nosotros
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {razones.map((razon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 text-left border border-blue-100 dark:border-gray-700"
            >
              <div className="text-4xl mb-3">{razon.icono}</div>
              <h3 className="text-xl font-semibold mb-2 font-poppins text-blue-700 dark:text-blue-300">
                {razon.titulo}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-inter">{razon.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
