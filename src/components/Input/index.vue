<template>
  <div :class="['fish_input', type, `${rounded}-rounded`]">
    <div :class="['fish__input__content', 'flex-base', 'flex-align-center']">
      <div class="prefix-icon" v-if="prefixIcon">{{ prefixIcon }}</div>
      <input
       :disabled="disabled"
        class="fish_real__input"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        :type="textType"
      />
      <div class="suffix-icon" v-if="suffixIcon">{{ suffixIcon }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TextType, Types, Rounded } from "../../interface/types"
interface inputInterface {
  textType?: TextType;
  prefixIcon?: string;
  suffixIcon?: string;
  type?: Types;
  rounded?: Rounded;
  modelValue?: any;
  disabled?: boolean;
};
const props = withDefaults(defineProps<inputInterface>(), {
  textType: "text",
  type: "default",
  rounded: "none"
})
const emits = defineEmits(["update:modelValue"])
type EventTarget = HTMLInputElement | HTMLTextAreaElement;
function handleInput(event: Event) {
  emits("update:modelValue", (event.target as EventTarget).value)
}
function handleChange(event: Event) {
  emits("update:modelValue", (event.target as EventTarget).value)
}
function handleBlur(event: Event) {
  emits("update:modelValue", (event.target as EventTarget).value)
}
function handleFocus(event: Event) {
  emits("update:modelValue", (event.target as EventTarget).value)
}
</script>
<style lang="scss" scoped>
@import "../../assets/style/style.scss";
.fish_input {
  display: inline-block;
  & + & {
    margin-left: 10px;
  }
  .prefix-icon,
  .suffix-icon {
    width: 40px;
    overflow: hidden;
  }
  .fish_real__input {
    height: 30px;
    padding: 0 8px;
    margin: 0;
    outline: none;
  }
  &.default {
    .fish_real__input {
      @include setBorder("default");
      &:focus {
        @include box-shadow($lightGrey, 30%);
      }
    }
  }
  &.primary {
    .fish_real__input {
      @include setBorder("primary");
      &:focus {
        @include box-shadow($primaryColor, 30%);
      }
    }
  }
  &.danger {
    .fish_real__input {
      @include setBorder("danger");
      &:focus {
        @include box-shadow($dangerColor, 30%);
      }
    }
  }
  &.warning {
    .fish_real__input {
      @include setBorder("warning");
      &:focus {
        @include box-shadow($warningColor, 30%);
      }
    }
  }
  &.none-rounded {
    .fish_real__input {
      border-radius: getRounded("none");
    }
  }
  &.small-rounded {
    .fish_real__input {
      border-radius: getRounded("small");
    }
  }
  &.middle-rounded {
    .fish_real__input {
      border-radius: getRounded("middle");
    }
  }
  &.large-rounded {
    .fish_real__input {
      border-radius: getRounded("large");
    }
  }
}
</style>
