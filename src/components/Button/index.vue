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
  autoDisabled?: boolean;
  loadingPosition?: LoadingPosition;
}
const props = withDefaults(defineProps<buttonInterface>(), {
  type: "default",
  rounded: "none",
  loading: false,
  autoDisabled: true,
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
let prefix = computed(() => {
  if (props.loading && props.loadingPosition === 'left') {
    return "icon-loading"
  } else {
    return props.prefixIcon
  }
})
let suffix = computed(() => {
  if (props.loading && props.loadingPosition === 'right') {
    return "icon-loading"
  } else {
    return props.suffixIcon
  }
})
let isDisabled = computed(() => {
  if (props.disabled) {
    return props.disabled
  }
  if (props.autoDisabled) {
    if (props.loading) {
      return props.loading
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
