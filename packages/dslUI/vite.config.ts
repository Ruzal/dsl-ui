import { fileURLToPath, URL } from "node:url";

import vue from '@vitejs/plugin-vue';
import path from "node:path";
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "../src/styles/variables.scss";'
      }
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "dslUI",
      fileName: (format) => `dsl-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  }
})
