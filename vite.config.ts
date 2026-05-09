import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  // Cambiamos a '/' para que funcione en la raíz de Vercel
  base: "/", 
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    // Vercel prefiere simplemente 'dist'
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    strictPort: true,
    host: "0.0.0.0",
  },
});
