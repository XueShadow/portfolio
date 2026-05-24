import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: process.env.VITE_BASE ?? "/portfolio/",
    build: {
      sourcemap: true,
    },
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});