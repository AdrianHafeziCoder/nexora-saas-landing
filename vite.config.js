import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Must match the GitHub repository name, with slashes on both sides.
  base: "/nexora-saas-landing/",
  plugins: [react({ jsxRuntime: "classic" })],
});
