import { createApp } from "vue"
import "./assets/style/style.scss"
import App from "./App.vue"
import FishButton from "./components/Button/index.vue"
const app = createApp(App)
app.component("f-button", FishButton)
app.mount("#app")
