import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación 100% estática: `npm run build` genera la carpeta `out/`
  // lista para subir a cualquier hosting (Vercel, Netlify, GitHub Pages, etc.)
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
