
import { defineConfig } from "vitest/config"
import vuePlugin from "@vitejs/plugin-vue"
export default defineConfig({
  plugins:[vuePlugin()],
  test: {
    globals:true,
    clearMocks:true,
    include: ["src/components/**/__test__/*.test.ts"],
    environment: "jsdom"
  }
})