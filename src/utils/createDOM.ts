
interface CreateDomArgs {
  tag: string;
  style?: Record<string, string>,
  className?: string[]
}
function createDOM(type: CreateDomArgs): HTMLElement {
  let element = document.createElement(type.tag)
  if (type.style) {
    element.setAttribute("style", parseStyle(type.style))
  }
  if (type.className) {
    element.setAttribute("class", type.className.join(" "))
  }
  return element
}
function parseStyle(style: Record<string, string>): string {
  let str = ""
  for (let k in style) {
    str += k + ":" + style[k] + ";"
  }
  return str
}
export default {
  createDOM
}