"use client";

import Slider from "react-slick";
import Image from "next/image";

interface Servicio {
  nombre: string;
  descripcion: string;
  icono: string;
}

interface ServiciosProps {
  servicios: Servicio[];
}

export default function Servicios({ servicios }: ServiciosProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-dark dark:text-gray-100 w-full" id="servicios">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 font-poppins text-blue-700 dark:text-blue-400">
          Nuestros <span className="text-fuchsia-500 dark:text-fuchsia-400">Servicios</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12 font-inter">
          Soluciones digitales adaptadas a tus necesidades
        </p>

        <Slider {...settings}>
          {servicios.map((servicio, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-fuchsia-400/30 dark:hover:shadow-blue-400/30 transition-all text-left h-full border border-blue-100 dark:border-gray-700">
                <div className="w-12 h-12 mb-4">
                  <Image
                    src={`/icons/${servicio.icono}`}
                    alt={servicio.nombre}
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-xl font-semibold font-poppins text-blue-700 dark:text-blue-300 mb-2">
                  {servicio.nombre}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-inter">
                  {servicio.descripcion}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
