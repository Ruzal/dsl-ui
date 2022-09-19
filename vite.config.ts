import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import path from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@ui": path.resolve(__dirname + "/packages/dslui/src"),
      "@ui-style-vars": path.resolve(__dirname + "/packages/dslui/src/styles/variables.scss"),
    },
  },
});
