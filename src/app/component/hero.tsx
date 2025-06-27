"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroProps {
  name: string;
}

// ✅ Coloca solo los nombres de las imágenes que están en /public
const images = ["/hero/bg-hero.png"]; // Puedes agregar más: ["/bg-hero.png", "/bg2.png", "/bg3.png"]

export default function Hero({ name }: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Slider de fondo */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={src}
              alt={`slide-${index}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* Contenido encima del slider */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white min-h-screen bg-black/50 backdrop-blur-sm px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold font-poppins"
        >
          Bienvenido a {name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl mt-4 max-w-xl text-gray-200 font-inter"
        >
          Creamos experiencias digitales únicas con desarrollo web, SEO y diseño gráfico.
        </motion.p>
        <motion.a
          href="#contacto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary mt-6"
        >
          Habla con Nosotros
        </motion.a>
      </div>
    </section>
  );
}
