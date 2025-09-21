// dashboard/components/TabSelector.tsx
"use client";

interface TabSelectorProps {
  tab: string;
  setTab: (tab: string) => void;
  contenido: Record<string, any>;
}

export default function TabSelector({ tab, setTab, contenido }: TabSelectorProps) {
  console.log("Contenido en TabSelector:", contenido);
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {Object.keys(contenido).map((key) => (
        <button
          key={key}
          onClick={() => setTab(key)}
          className={`px-4 py-2 rounded-lg border font-medium transition-all ${
            tab === key
              ? "bg-blue-600 text-white"
              : "bg-white border-blue-300 text-blue-600 hover:bg-blue-100 dark:bg-gray-800 dark:text-white dark:border-blue-400 dark:hover:bg-gray-700"
          }`}
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </button>
      ))}
    </div>
  );
}
