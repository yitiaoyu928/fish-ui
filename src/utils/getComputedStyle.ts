export default {
  getComputedStyle(el: HTMLElement, style: string, pseudo?: string): string {
    return window.getComputedStyle(el, pseudo).getPropertyValue(style)
  }
}