"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { auth } from "../../../.firebase/clients";
import { signInWithEmailAndPassword } from "firebase/auth";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Si hay cookie activa, redirigir
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) router.replace("/dashboard");
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();

      Cookies.set("token", token, { expires: 1, secure: true, sameSite: "Lax" });

      router.push("/dashboard");
    } catch (err: any) {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 space-y-6 transition">
        <div className="flex justify-center">
          <Image src="/icono.png" alt="Logo" width={64} height={64} />
        </div>

        <h2 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400 font-poppins">
          Iniciar Sesión
        </h2>

        {error && <p className="text-center text-red-500 text-sm">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-fuchsia-500 transform transition duration-300 hover:scale-105 shadow-lg hover:shadow-fuchsia-400/50"
          >
            Ingresar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          ¿No tienes cuenta?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </section>
  );
}
