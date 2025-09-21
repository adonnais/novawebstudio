"use client";

import { Suspense, lazy } from "react";
import contenido from "./data/contenido.json";

// ✅ Componentes cargados normalmente (necesarios de inmediato)

import Hero from "./component/hero";

// ✅ Componentes lazy
const QuienesSomos = lazy(() => import("./component/QuienesSomos"));
const PorQueElegirnos = lazy(() => import("./component/PorQueElegirnos"));
const Servicios = lazy(() => import("./component/Servicios"));
const SobreNosotros = lazy(() => import("./component/SobreNosotros"));
const Contacto = lazy(() => import("./component/Contacto"));
const Footer = lazy(() => import("./component/Footer"));

export default function Home() {
  const empresa = contenido?.empresa?.nombre ?? "Nova Web Studio";

  return (
    <>
      
      <Hero name={empresa} />

      <Suspense fallback={<div className="text-center py-10">Cargando sección...</div>}>
        <QuienesSomos data={contenido.empresa} />
        <PorQueElegirnos />
        <Servicios servicios={contenido.servicios} />
        <SobreNosotros data={contenido.empresa.sobreNosotros} />
        <Contacto data={contenido.contacto} />
        <Footer data={contenido.footer} />
      </Suspense>
    </>
  );
}
