import { describe, it, assert, expect } from "vitest"
import Button from "../index.vue"
import { mount } from "@vue/test-utils"
describe("button.vue", function () {
  it("create", () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain("fish__default")
  })
  it("primaryButton", () => {
    const Primary = mount(Button, {
      props: {
        type: "primary"
      }
    })
    expect(Primary.classes()).toContain("fish__primary")
  })
})