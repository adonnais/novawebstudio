"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface NavbarLink {
  nombre: string;
  href: string;
}

interface NavbarProps {
  name: string;
  links: NavbarLink[];
}

export default function Navbar({ name, links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const styleId = "animated-shadow-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        @keyframes pulse-shadow {
          0% { box-shadow: 0 0 15px #3B82F6; }
          50% { box-shadow: 0 0 15px #F0ABFC; }
          100% { box-shadow: 0 0 15px #3B82F6; }
        }
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out forwards;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <>
      <nav
        className="fixed top-4 left-4 right-4 z-50 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-3 px-6 rounded-full 
        flex justify-between items-center shadow-lg"
        style={{ animation: "pulse-shadow 3s ease-in-out infinite" }}
      >
        {/* Logo + Nombre */}
        <div className="flex items-center gap-2">
          <Image src="/icono.png" alt="Logo" width={36} height={36} />
          <h1 className="text-lg text-blue-600 dark:text-blue-400 font-bold">{name}</h1>
        </div>

        {/* Links en pantallas grandes */}
        <ul className="hidden lg:flex gap-6">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="font-bold text-fuchsia-500 dark:text-fuchsia-400 hover:text-blue-500 dark:hover:text-blue-300 transition-all"
              >
                {link.nombre}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="lg:hidden text-3xl text-blue-600 dark:text-blue-400 font-bold"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Modal lateral */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex justify-end">
          <div className="w-64 h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-2xl p-6 animate-slide-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold text-lg">{name}</h2>
              <button
                className="text-xl text-gray-500 dark:text-gray-300 hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-blue-500 dark:hover:text-blue-300 transition"
                  >
                    {link.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
