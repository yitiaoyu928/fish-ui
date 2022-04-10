<template>
  <div :class="['fish_button', type, `${rounded}-rounded`, { 'disabled': isDisabled }]" :disabled="isDisabled"
    @click="handleClick">
    <div :class="['fish_button__wrapper', 'flex-base', isCircle]">
      <div :class="['fish_button_prefix', { 'fish__loading': loading && loadingPosition === 'left' }]"
        v-if="(prefixIcon || loading)">
        <i :class="['iconfont', prefix]"></i>
      </div>
      <div class="fish_button_content">
        <slot></slot>
      </div>
      <div :class="['fish_button_prefix', { 'fish__loading': loading && loadingPosition === 'right' }]"
        v-if="(suffixIcon || loading)">
        <i :class="['iconfont', suffix]"></i>
      </div>
    </div>  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { Types, Rounded, LoadingPosition } from "../../interface/types"
interface buttonInterface {
  prefixIcon?: string;
  suffixIcon?: string;
  type?: Types;
  rounded?: Rounded;
  disabled?: boolean;
  loading?: boolean;
  closeDisabled?: boolean;
  loadingPosition?: LoadingPosition;
}
const props = withDefaults(defineProps<buttonInterface>(), {
  type: "default",
  rounded: "none",
  loading: false,
  closeDisabled: false,
  loadingPosition: "left"
})
// 定义点击事件
const emits = defineEmits(["click"])
const handleClick = function (event: Event) {
  if (props.disabled) {
    return
  }
  emits("click", event)
}
// 计算是否开启了loading并且loading位置为left,如果是，则返回.icon-loading
let prefix = computed(() => {
  if (props.loading && props.loadingPosition === 'left') {
    return "icon-loading"
  } else {
    return props.prefixIcon
  }
})
// 计算是否开启了loading并且loading位置为right,如果是，则返回.icon-loading
let suffix = computed(() => {
  if (props.loading && props.loadingPosition === 'right') {
    return "icon-loading"
  } else {
    return props.suffixIcon
  }
})
// 按照传入的props来决定是否开启disabled
let isDisabled = computed(() => {
  // 如果开启了disabled，则以disabled的状态来决定
  if (props.disabled) {
    return props.disabled
  } else {
    // 如果开启了closeDisabled，则看是否传入了loading，以loading的状态来决定是否禁止
    if (!props.closeDisabled) {
      return props.loading
    } else {
      return false;
    }
  }
})
// 如果是环形，则将文字隐藏并显示loading
let isCircle = computed(() => {
  if (props.rounded === "circle" && props.loading) {
    return "flex-direction-column"
  }
})
</script>
<style lang="scss" scoped>@import "../../assets/style/style.scss";

.fish_button {
  display: inline-block;
  height: 30px;
  overflow: hidden;
  font-size: $middleFontSize;

  &+& {
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
      .iconfont {
        font-size: $middleFontSize;
      }

      text-align: center;
    }

    .fish_button_content {
      flex: 1;
      font-size: $middleFontSize;
      padding: 0 5px;

      &.default {
        color: $lightBack;
      }
    }
  }
}</style>
