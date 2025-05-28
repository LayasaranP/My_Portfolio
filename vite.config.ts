import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';; // If swc works for you
// import react from "@vitejs/plugin-react"; // <- Uncomment this if SWC continues to fail
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
