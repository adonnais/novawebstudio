"use client";

import { useState, useEffect } from "react";

interface EditorProps {
  section: string;
  data: any;
  onSave: (updated: any) => void;
}

export default function Editor({ section, data, onSave }: EditorProps) {
  const [content, setContent] = useState<any>(data);

  useEffect(() => {
    setContent(data);
  }, [data]);

  const handleChange = (key: string, value: any) => {
    setContent((prev: any) => ({ ...prev, [key]: value }));
  };

  const renderField = (key: string, value: any) => {
    if (typeof value === "string") {
      return (
        <div className="mb-4" key={key}>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{key}</label>
          <textarea
            value={content[key]}
            onChange={(e) => handleChange(key, e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={2}
          />
        </div>
      );
    }
    if (Array.isArray(value)) {
      return (
        <div key={key} className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">{key}</label>
          {value.map((item, idx) => (
            <textarea
              key={idx}
              value={content[key][idx]}
              onChange={(e) => {
                const newList = [...content[key]];
                newList[idx] = e.target.value;
                handleChange(key, newList);
              }}
              className="w-full mb-2 p-2 border border-gray-300 rounded-md"
              rows={2}
            />
          ))}
        </div>
      );
    }
    if (typeof value === "object" && value !== null) {
      return (
        <div key={key} className="mb-6">
          <h4 className="text-md font-bold text-blue-600 mb-2">{key}</h4>
          {Object.entries(value).map(([subKey, subVal]) => (
            <div key={subKey} className="mb-3">
              <label className="text-sm font-medium text-gray-600">{subKey}</label>
              <input
                value={subVal as string}
                onChange={(e) => {
                  handleChange(key, { ...content[key], [subKey]: e.target.value });
                }}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-500 mb-6">Editar: {section}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(content);
        }}
        className="space-y-4"
      >
        {Object.entries(content).map(([key, value]) => renderField(key, value))}

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}
