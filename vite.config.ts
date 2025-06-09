import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const PORT = 8000;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
    open: true,
    host: true,
  },
});
