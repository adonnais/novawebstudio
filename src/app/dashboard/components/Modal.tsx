// dashboard/components/Modal.tsx
"use client";

interface ModalProps {
  modal: { type: "add" | "edit" | "delete"; index?: number };
  tempData: { Nombre: string };
  setTempData: (data: { Nombre: string }) => void;
  handleAdd: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
  onClose: () => void;
}

export default function Modal({
  modal,
  tempData,
  setTempData,
  handleAdd,
  handleEdit,
  handleDelete,
  onClose,
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
        {modal.type === "delete" ? (
          <>
            <h3 className="text-lg font-semibold mb-4">¿Estás seguro de eliminar este elemento?</h3>
            <div className="flex justify-end gap-4">
              <button onClick={onClose} className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded">
                Cancelar
              </button>
              <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded">
                Eliminar
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold mb-4">
              {modal.type === "add" ? "Agregar nuevo" : "Editar"}
            </h3>
            <input
              type="text"
              value={tempData.Nombre}
              onChange={(e) => setTempData({ Nombre: e.target.value })}
              className="w-full border px-4 py-2 rounded mb-4 dark:bg-gray-700 dark:border-gray-500 dark:text-white"
              placeholder="Nombre"
            />
            <div className="flex justify-end gap-4">
              <button onClick={onClose} className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded">
                Cancelar
              </button>
              <button
                onClick={modal.type === "add" ? handleAdd : handleEdit}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Guardar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
