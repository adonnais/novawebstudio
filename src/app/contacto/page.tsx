"use client";

import Contenido from "../../../public/contenido.json";
import Image from "next/image";

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

export default function Contacto() {
  const data: ContactoData = Contenido.contacto;

  return (
    <section
      id="contacto"
      className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-16 py-16"
    >
      {/* Fondo de imagen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/bg-hero.png"
          alt="Fondo de contacto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl w-full text-white">
        <h2 className="text-4xl font-bold text-center mb-2">
          {data.titulo}
        </h2>
        <p className="text-center text-lg mb-4">{data.subtitulo}</p>
        <p className="text-center mb-12">{data.descripcion}</p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Formulario */}
          <form className="space-y-6 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md text-gray-800">
            <div>
              <label className="block mb-1 text-sm font-semibold">
                {data.formulario.nombre}
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">
                {data.formulario.email}
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">
                {data.formulario.mensaje}
              </label>
              <textarea
                rows={5}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {data.formulario.enviar}
            </button>
          </form>

          {/* Información de contacto */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md text-gray-800 space-y-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Información adicional
            </h3>
            <p>📞 {data.informacion_adicional.telefono}</p>
            <p>✉️ {data.informacion_adicional.email_contacto}</p>
            <div className="mt-6 text-sm text-gray-600">
              Pronto agregaremos integración con WhatsApp, Google Maps y más...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
