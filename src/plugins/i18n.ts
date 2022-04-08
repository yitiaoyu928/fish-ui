import { App } from "@vue/runtime-core"

export default {
  install: (app: App, options: any): void => {
    const hello = function () {
      console.log(123)
    }
    app.provide("hello", hello)
  }
}