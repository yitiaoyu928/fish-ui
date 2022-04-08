import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: "./",
  server: {
    port: 928,
    open: true,
  },
  resolve: {
    alias: {
      "@": "src",
    },
    extensions: [".js", ".json", ".css", ".ts",".vue", "..."],
  },
})
