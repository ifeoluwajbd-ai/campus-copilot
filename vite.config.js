import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite reads this file when starting or building the app.
export default defineConfig({
  plugins: [react()],
});
