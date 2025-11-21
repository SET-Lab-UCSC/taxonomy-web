// import glsl from "vite-plugin-glsl";
// import basicSsl from "@vitejs/plugin-basic-ssl";

import { defineConfig } from 'vite';
import { resolve } from 'path';

const isCodeSandbox =
  "SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env;

export default {
  root: resolve(__dirname, 'src'),
  publicDir: "../static/",
  base: "./",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),   // include your main page
        tasks: resolve(__dirname, 'src/tasks.html'),
        explore: resolve(__dirname, 'src/explore.html'),

      },
    },
  },
  server: {
    host: true,
    open: !isCodeSandbox,
  },
  plugins: [],
};
