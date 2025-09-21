// Dashboard.tsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import contenidoJson from "../data/contenido.json";

const DynamicEditor = dynamic(() => import("../editor/page"), { ssr: false });
const TabSelector = dynamic(() => import("./components/TabSelector"), { ssr: false });
const ListSection = dynamic(() => import("./components/ListSection"), { ssr: false });
const Modal = dynamic(() => import("./components/Modal"), { ssr: false });

type ListSectionType = "productos" | "servicios";

function getValueFromPath(obj: any, path: string): any {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function setValueAtPath(obj: any, path: string, value: any): any {
  const keys = path.split(".");
  const lastKey = keys.pop();
  const clone = structuredClone(obj);

  let nested = clone;
  for (const key of keys) {
    nested = nested[key] = { ...nested[key] };
  }
  if (lastKey) nested[lastKey] = value;

  return clone;
}

function extractAllPaths(obj: any, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return [path, ...extractAllPaths(value, path)];
    } else {
      return [path];
    }
  });
}

export default function Dashboard() {
  const [contenido, setContenido] = useState(contenidoJson);
  const [tab, setTab] = useState("productos");
  const [modal, setModal] = useState<{ type: "add" | "edit" | "delete"; index?: number } | null>(null);
  const [tempData, setTempData] = useState({ Nombre: "" });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  const handleUpdate = (path: string, data: any) => {
    const updated = setValueAtPath(contenido, path, data);
    setContenido(updated);
    console.log("Guardado", path, data);
  };

  const handleAdd = () => {
    if (tab === "productos" || tab === "servicios") {
      const updated = [...getValueFromPath(contenido, tab), tempData];
      handleUpdate(tab, updated);
    }
    setModal(null);
    setTempData({ Nombre: "" });
  };

  const handleEdit = () => {
    if (modal?.index === undefined) return;
    if (tab === "productos" || tab === "servicios") {
      const updated = [...getValueFromPath(contenido, tab)];
      updated[modal.index] = tempData;
      handleUpdate(tab, updated);
    }
    setModal(null);
    setTempData({ Nombre: "" });
  };

  const handleDelete = () => {
    if (modal?.index === undefined) return;
    if (tab === "productos" || tab === "servicios") {
      const updated = [...getValueFromPath(contenido, tab)];
      updated.splice(modal.index, 1);
      handleUpdate(tab, updated);
    }
    setModal(null);
  };
  
  const isListSection = tab === "productos" || tab === "servicios";

  const allPaths = extractAllPaths(contenido);

  return (
    <main className="p-8 min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Dashboard de Edición</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded"
        >
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </div>

      <TabSelector tab={tab} setTab={setTab} allTabs={allPaths} />

      <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
        {isListSection ? (
          <ListSection
            tab={tab as ListSectionType}
            contenido={contenido}
            setModal={setModal}
          />
        ) : (
          <DynamicEditor
            section={tab}
            data={getValueFromPath(contenido, tab)}
            onSave={(data: any) => handleUpdate(tab, data)}
          />
        )}
      </section>

      {modal && (
        <Modal
          modal={modal}
          tempData={tempData}
          setTempData={setTempData}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          onClose={() => setModal(null)}
        />
      )}
    </main>
  );
}
