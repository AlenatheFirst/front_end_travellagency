import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
 return {
  plugins: [react()],
  server: {
   open: true,
   proxy: {
    '/api': {
     target: 'http://localhost:8080',
    },
   },
  },
  build: {
   outDir: 'build',
   sourcemap: true,
  },
  test: {
   globals: true,
   environment: 'jsdom',
   setupFiles: 'src/setupTests',
   mockReset: true,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
 };
});
