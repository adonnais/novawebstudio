import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar/navbar";
import contenido from "./data/contenido.json";

// Fuentes personalizadas con variables CSS
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Metadata SEO
const empresa = contenido?.empresa?.nombre ?? "Nova Web Studio";

export const metadata: Metadata = {
  title: empresa,
  description:
    "Diseño web personalizado, SEO, optimización y desarrollo digital para negocios modernos.",
  authors: [{ name: "Nova Web Studio", url: "https://novawebstudio-b7489.web.app" }],
  keywords: ["desarrollo web", "diseño web", "seo", "cartagena", "nova", "web studio"],
  themeColor: "#ffffff",
  openGraph: {
    title: empresa,
    description: "Tu socio en el desarrollo web personalizado y SEO técnico.",
    url: "https://novawebstudio-b7489.web.app",
    siteName: empresa,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: `${empresa} logo`,
      },
    ],
    type: "website",
  },
};

// RootLayout principal
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable}
          bg-white dark:bg-black text-gray-800 dark:text-gray-100
          antialiased font-sans transition-colors duration-300
        `}
      >
        {/* ✅ Se pasa el nombre de la empresa al Navbar */}
        <Navbar name={empresa} />
        
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
