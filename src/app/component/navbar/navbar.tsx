"use client";

import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import contenido from "../../data/contenido.json";

interface NavbarLink {
  nombre: string;
  href: string;
  habilitado: boolean;
}

interface NavbarProps {
  name: string;
}

export default function Navbar({ name }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [links, setLinks] = useState<NavbarLink[]>([]);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    // Estilos animación una sola vez
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

    const token = Cookies.get("token");
    setHasToken(!!token);
    console.log("Token found:", token);
    console.log("contenido:", contenido);
    

    if (token) {

    const navbarLinks: NavbarLink[] = contenido.navbarAdmin;
      setLinks(navbarLinks.filter(link => link.habilitado === true));
      console.log("Admin links:", navbarLinks);
      
    } else {

    const navbarLinks: NavbarLink[] = contenido.navbarUser;
      setLinks(navbarLinks.filter(link => link.habilitado === true));
    } 
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    location.reload();
  };

  const handleLogin = () => {
    window.location.href = "/login"; // O la ruta que uses
  };

  return (
    <>
      <nav
        className="fixed top-4 left-4 right-4 z-50 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-3 px-6 rounded-full flex justify-between items-center shadow-lg"
        style={{ animation: "pulse-shadow 3s ease-in-out infinite" }}
      >
        {/* Logo + Nombre */}
        <div className="flex items-center gap-2">
          {!imageError ? (
            <Image
              src="/icono.png"
              alt="Logo"
              width={36}
              height={36}
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center text-sm text-gray-600">
              🌀
            </div>
          )}
          <h1 className="text-lg text-blue-600 dark:text-blue-400 font-bold">{name}</h1>
        </div>

        {/* Botón hamburguesa siempre visible */}
        <button
          className="text-3xl text-blue-600 dark:text-blue-400 font-bold"
          onClick={() => setIsOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
          stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </button>
      </nav>

      {/* Modal lateral */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex justify-end">
          <div className="w-64 h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-2xl p-6 animate-slide-in flex flex-col justify-between">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold text-lg">{name}</h2>
              <button
                className="text-xl text-gray-500 dark:text-gray-300 hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Centro: Enlaces */}
            <ul className="space-y-4 flex-grow flex flex-col justify-center">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/${link.href}`}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-blue-500 dark:hover:text-blue-300 transition"
                  >
                    {link.nombre}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Parte inferior: Login o Logout */}
            <div className="border-t border-gray-300 dark:border-gray-700 pt-4 mt-6">
              {hasToken ? (
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition"
                >
                  Cerrar sesión
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
                >
                  Iniciar sesión
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
