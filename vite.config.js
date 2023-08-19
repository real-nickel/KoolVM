import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    build: {
      cssCodeSplit: false,
      outDir: "build"
    },
    server: {
      host:"0.0.0.0",
      port:3000,
      strictPort: true,
      hmr: {
        clientPort: 443
      }
    }
  };
});
