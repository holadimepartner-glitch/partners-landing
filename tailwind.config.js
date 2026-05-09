/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#your-color", // Asegúrate de definir tus colores si usas personalizados
        accent: "#your-accent",
      },
    },
  },
  plugins: [],
}
