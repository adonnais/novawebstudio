"use client";
import { useState, useEffect } from "react";
import Contenido from "../../../public/contenido.json";

interface Producto {
  Clasificación: string;
  Producto: string;
  DescripciónFuncional: string;
  ClienteIdeal: string;
  ObjetivoPrincipal: string;
  RequerimientosTécnicos: string;
  PrecioTrimestral: string;
  PrecioSemestral: string;
  PrecioAnual: string;
  PrecioVentaUnico: string;
}

const productos: Producto[] = Contenido.productos.map((p: any) => ({
  Clasificación: p.Clasificación,
  Producto: p.Producto,
  DescripciónFuncional: p["Descripción Funcional"],
  ClienteIdeal: p["Cliente Ideal"],
  ObjetivoPrincipal: p["Objetivo Principal"],
  RequerimientosTécnicos: p["Requerimientos Técnicos"],
  PrecioTrimestral: p["Precio Trimestral (COP)"],
  PrecioSemestral: p["Precio Semestral (COP)"],
  PrecioAnual: p["Precio Anual (COP)"],
  PrecioVentaUnico: p["Precio de Venta Único (COP)"],
}));

export default function Producto() {
  const [filtro, setFiltro] = useState<string>("Todos");
  const [modalOpen, setModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  useEffect(() => {
    const styleId = "pulse-shadow-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        @keyframes pulse-shadow {
          0% { box-shadow: 0 0 12px #3B82F6; }
          50% { box-shadow: 0 0 12px #F0ABFC; }
          100% { box-shadow: 0 0 12px #3B82F6; }
        }
        .hover\\:animate-pulse-shadow:hover {
          animation: pulse-shadow 2s infinite;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const clasificaciones = [
    "Todos",
    ...Array.from(new Set(productos.map((p) => p.Clasificación))),
  ];

  const filtrados =
    filtro === "Todos" ? productos : productos.filter((p) => p.Clasificación === filtro);

  const abrirModal = (producto: Producto) => {
    setProductoSeleccionado(producto);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setProductoSeleccionado(null);
  };

  return (
    <section className="py-20 lg:py-24 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen" id="productos">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-blue-400 font-poppins">
        Nuestros Productos
      </h2>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {clasificaciones.map((c, i) => (
          <button
            key={i}
            onClick={() => setFiltro(c)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200
              ${
                filtro === c
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-300 border-blue-300 hover:bg-fuchsia-500 hover:text-white"
              }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Productos */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filtrados.map((p, index) => (
          <div
            key={index}
            onClick={() => abrirModal(p)}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-blue-100 dark:border-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer hover:animate-pulse-shadow"
          >
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2 font-poppins">
              {p.Producto}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Clasificación:</strong> {p.Clasificación}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{p.DescripciónFuncional}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Cliente Ideal:</strong> {p.ClienteIdeal}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Objetivo:</strong> {p.ObjetivoPrincipal}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && productoSeleccionado && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex justify-center items-center px-4">
          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-w-xl w-full p-6 rounded-2xl shadow-2xl relative animate-fade-in">
            <button
              className="absolute top-4 right-4 text-xl text-gray-600 dark:text-gray-300 hover:text-red-500"
              onClick={cerrarModal}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              {productoSeleccionado.Producto}
            </h3>
            <p className="text-sm mb-1"><strong>Clasificación:</strong> {productoSeleccionado.Clasificación}</p>
            <p className="mb-2">{productoSeleccionado.DescripciónFuncional}</p>
            <p className="text-sm mb-1"><strong>Cliente Ideal:</strong> {productoSeleccionado.ClienteIdeal}</p>
            <p className="text-sm mb-1"><strong>Objetivo:</strong> {productoSeleccionado.ObjetivoPrincipal}</p>
            <p className="text-sm mb-3"><strong>Requisitos Técnicos:</strong> {productoSeleccionado.RequerimientosTécnicos}</p>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl text-sm font-mono space-y-1">
              <p><strong>Trimestral:</strong> {productoSeleccionado.PrecioTrimestral}</p>
              <p><strong>Semestral:</strong> {productoSeleccionado.PrecioSemestral}</p>
              <p><strong>Anual:</strong> {productoSeleccionado.PrecioAnual}</p>
              <p><strong>Venta Única:</strong> {productoSeleccionado.PrecioVentaUnico}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
