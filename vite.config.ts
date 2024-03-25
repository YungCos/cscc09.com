/// <reference types="vitest" />

import { defineConfig } from "vite";
import analog from "@analogjs/platform";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: "src/assets",
  build: {
    target: ["es2020"],
  },
  resolve: {
    mainFields: ["module"],
  },
  plugins: [
    analog({
      prerender: {
        routes: async () => [
          "/",
          "/lectures",
          "/lectures/1",
          "/lectures/2",
          "/lectures/3",
          "/lectures/4",
          "/lectures/5",
          "/lectures/6",
          "/lectures/7",
          "/lectures/8",
          "/lectures/9",
          "/lectures/10",
          "/lectures/11",
          "/lectures/12",
          "/work",
          "/team",
          "/extra-resources",
        ],
        sitemap: {
          host: "https://cscc09.com",
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/test.ts"],
    include: ["**/*.spec.ts"],
  },
  define: {
    "import.meta.vitest": mode !== "production",
  },
}));
