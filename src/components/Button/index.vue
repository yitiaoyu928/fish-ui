<template>
  <div
    :class="['fish_button', type, `${rounded}-rounded`, { 'disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="fish_button__wrapper flex-base">
      <div class="fish_button_prefix" v-if="prefixIcon">
        <i>{{ prefixIcon }}</i>
      </div>
      <div class="fish_button_content">
        <slot></slot>
      </div>
      <div class="fish_button_suffix" v-if="suffixIcon">
        <i>{{ suffixIcon }}</i>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Types, Rounded } from "../../interface/types"
interface buttonInterface {
  prefixIcon?: string;
  suffixIcon?: string;
  type?: Types;
  rounded?: Rounded;
  disabled?: boolean;
}
const props = withDefaults(defineProps<buttonInterface>(), {
  type: "default",
  rounded: "none"
})
// 定义点击事件
const emits = defineEmits(["click"])
const handleClick = function (event: Event) {
  if(props.disabled) {
    return
  }
  emits("click", event)
}

</script>
<style lang="scss" scoped>
@import "../../assets/style/style.scss";
.fish_button {
  display: inline-block;
  height: 30px;
  overflow: hidden;
  font-size: $middleFontSize;
  & + & {
    margin-left: 10px;
  }

  &.none-rounded {
    border-radius: getRounded("none");
  }
  &.small-rounded {
    border-radius: getRounded("small");
  }
  &.middle-rounded {
    border-radius: getRounded("middle");
  }
  &.large-rounded {
    border-radius: getRounded("large");
  }
  &.circle-rounded {
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 50px;
    border-radius: getRounded("circle");
  }
  &.default {
    @include setBorder("default");
    @include bgColorMixin("default");
    @include activeBgColor("default");
    @include hoverBoxShadow("default");
    &.disabled {
      @include disabled("default");
    }
  }
  &.primary {
    @include setBorder("primary");
    @include bgColorMixin("primary");
    @include activeBgColor("primary");
    @include hoverBoxShadow("primary");
    &.disabled {
      @include disabled("primary");
    }
  }
  &.danger {
    @include setBorder("danger");
    @include bgColorMixin("danger");
    @include activeBgColor("danger");
    @include hoverBoxShadow("danger");
    &.disabled {
      @include disabled("danger");
    }
  }
  &.warning {
    @include setBorder("warning");
    @include bgColorMixin("warning");
    @include activeBgColor("warning");
    @include hoverBoxShadow("warning");
    &.disabled {
      @include disabled("warning");
    }
  }
  @extend .cursor-pointer;
  .fish_button__wrapper {
    padding: 5px 10px;
    .fish_button_prefix,
    .fish_button_suffix {
      width: 20px;
      text-align: center;
    }
    .fish_button_content {
      flex: 1;
      font-size: $middleFontSize;
      &.default {
        color: $lightBack;
      }
    }
  }
}
</style>
