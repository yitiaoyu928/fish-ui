import { App } from "@vue/runtime-core"

export default {
  install: (app: App, options: any): void => {
    const hello = function () {
      
    }
    app.provide("hello", hello)
  }
}