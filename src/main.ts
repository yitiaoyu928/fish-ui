import { createApp } from "vue"
import "./assets/style/style.scss"
import App from "./App.vue"
import FishButton from "./components/Button/index.vue"
import i18n from "./plugins/i18n"
const app = createApp(App).use(i18n)
app.component("f-button", FishButton)
app.mount("#app")
