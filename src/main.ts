import { createApp } from "vue"
import "./assets/style/style.scss"
import App from "./App.vue"
import FishButton from "./components/Button/index.vue"
import FishInput from "./components/Input/index.vue"
import FishSwitch from "./components/Switch/index.vue"
import "./assets/icon/iconfont.css"
import i18n from "./plugins/i18n"
const app = createApp(App).use(i18n)
app.component("f-button", FishButton)
app.component("f-input", FishInput)
app.component("f-switch", FishSwitch)
app.mount("#app")
