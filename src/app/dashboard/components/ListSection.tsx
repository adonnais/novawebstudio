// dashboard/components/ListSection.tsx
"use client";

interface ListSectionProps {
  tab: "productos" | "servicios";
  contenido: Record<string, any[]>;
  setModal: (modal: { type: "add" | "edit" | "delete"; index?: number }) => void;
}

export default function ListSection({ tab, contenido, setModal }: ListSectionProps) {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold capitalize">{tab}</h2>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => setModal({ type: "add" })}
        >
          Agregar
        </button>
      </div>

      <table className="w-full text-left border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-2 border dark:border-gray-600">Nombre</th>
            <th className="p-2 border dark:border-gray-600">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contenido[tab]?.map((item, index) => (
            <tr key={index} className="border-t dark:border-gray-600">
              <td className="p-2 border dark:border-gray-600">{item.Nombre}</td>
              <td className="p-2 border dark:border-gray-600 space-x-2">
                <button
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                  onClick={() => setModal({ type: "edit", index })}
                >
                  Editar
                </button>
                <button
                  className="px-3 py-1 bg-red-600 text-white rounded"
                  onClick={() => setModal({ type: "delete", index })}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
