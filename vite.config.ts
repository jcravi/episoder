import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import deno from "@deno/vite-plugin";

export default defineConfig({
  plugins: [deno(), react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'styled-components', '@reduxjs/toolkit', 'react-redux']
  }
});