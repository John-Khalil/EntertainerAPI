import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  server: {
    hmr: true, // Enable HMR
  },
  plugins: [
    ...VitePluginNode({
      adapter: "express",
      appPath: "./app.js",
      exportName: "default",
    }),
  ],
});
