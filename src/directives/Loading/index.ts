import { DirectiveBinding, ObjectDirective } from "vue"
import g from "@/utils/getComputedStyle"
import Dom from "@/utils/createDOM"
let resultElement: HTMLElement | null = null
const Loading: ObjectDirective = {
  updated(el: HTMLElement, binding: DirectiveBinding) {
    if (g.getComputedStyle(el, "position") === "static") {
      el.style.position = "relative"
    }
    if (el.classList.contains("loading")) {
      el.classList.remove("loading")
    } else {
      el.classList.add("loading")
    }

    if (binding.value) {
      resultElement = Dom.createDOM({
        tag: "div", style: {
          "position": "absolute",
          "top": "0",
          "left": "0",
          "width": "100%",
          "height": "100%",
          "background-color": "rgba(255,255,255,.8)"
        }
      })
      let rollBox = Dom.createDOM({
        tag: "div",
        className: ["fish__loading_animation"]
      })
      let loadingElement = Dom.createDOM({ tag: "i", style: { color: "#333333" }, className: ["iconfont icon-loading"] })
      rollBox.appendChild(loadingElement)
      resultElement.appendChild(rollBox)
      el.appendChild(resultElement)
    } else {
      el.removeChild(resultElement as HTMLElement)
      resultElement = null
    }

  }
}
export default Loading