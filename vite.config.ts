import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: ".",
  server: {
    host: true,
    port: 928,
    open: true,
    hmr: true
  },
  clearScreen: false,
  resolve: {
    alias: {
      "@": "/src",
    },
    extensions: [".js", ".json", ".css", ".ts", ".vue", "..."],
  },
})
