import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 🔥 Esto desactiva la optimización de imágenes para export estático
  },
};

export default nextConfig;
