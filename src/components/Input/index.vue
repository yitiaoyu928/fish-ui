<template>
  <div :class="['fish__input', type, `${rounded}-rounded`]">
    <div
      :class="['fish__input__content', 'fish__flex-base', 'fish__flex-align-center', 'fish__flex-justify-center', { 'fish__has-prefix-icon': prefixIcon }, { 'fish__has-suffix-icon': suffixIcon }]">
      <div class="fish__prefix__icon" v-if="prefixIcon" @click.stop="handleLeftClick">
        <i :class="['iconfont', prefixIcon]"></i>
      </div>
      <input :disabled="disabled" class="fish__real__input" @input="handleInput" @change="handleChange"
        @focus="handleFocus" @blur="handleBlur" :value="modelValue" :type="textType" :maxlength="maxLength" />
      <div class="fish__suffix__icon" v-if="suffixIcon" @click.stop="handleRightClick" v-loading="loading">
        <i :class="['iconfont', suffixIcon]"></i>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TextType, Types, Rounded } from "../../interface/types"
interface InputProps {
  textType?: TextType;
  prefixIcon?: string;
  suffixIcon?: string;
  type?: Types;
  rounded?: Rounded;
  modelValue?: any;
  disabled?: boolean;
  maxLength?: number;
  loading?: boolean
};
const props = withDefaults(defineProps<InputProps>(), {
  textType: "text",
  type: "default",
  rounded: "none",
  loading: false
})
const emits = defineEmits(["update:modelValue", "leftClick", "rightClick"])
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
function handleLeftClick(event: Event) {
  emits("leftClick")
}
function handleRightClick(event: Event) {
  console.log(event)
  emits("rightClick")
}
</script>
<style lang="scss">
@import "../../assets/style/style.scss";

.fish__input {
  display: inline-block;
  vertical-align: top;

  &+& {
    margin-left: 10px;
  }

  .fish__has-prefix-icon {
    &.fish__input__content {
      .fish__prefix__icon {
        border-top-left-radius: $middleBorderRadius;
        border-bottom-left-radius: $middleBorderRadius;
      }

      .fish__real__input {
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

  }

  .fish__has-suffix-icon {
    &.fish__input__content {
      .fish__suffix__icon {
        border-top-right-radius: $middleBorderRadius;
        border-bottom-right-radius: $middleBorderRadius;
      }

      .fish__real__input {
        border-right: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

  }

  .fish__prefix__icon,
  .fish__suffix__icon {
    min-width: 40px;
    line-height: 30px;
    padding: 0 10px;
    overflow: hidden;
    text-align: center;
    height: 30px;
    @extend .cursor-pointer;
    @include bg-color($inputIconBgColor, 50%);
  }

  .fish__real__input {
    height: 30px;
    padding: 0 8px;
    margin: 0;
    outline: none;
  }

  &.default {
    .fish__real__input {
      @include setBorder("default");
    }

    .fish__input__content {
      background: #FFFFFF;

      .fish__prefix__icon,
      .fish__suffix__icon {
        color: $lightBack;
        @include setBorder('default');
        @include bg-color($lightGrey, 60%);
      }

      .fish__prefix__icon {
        border-right: none;
      }

      .fish__suffix__icon {
        border-left: none;
      }
    }
  }

  &.primary {
    .fish__real__input {
      caret-color: $primaryColor;
      @include setBorder("primary");
    }

    .fish__input__content {
      background: #FFFFFF;

      .fish__prefix__icon,
      .fish__suffix__icon {
        color: $lightWhite;
        @include setBorder('primary');
        @include bg-color($primaryColor, 80%);
      }

      .fish__prefix__icon {
        border-right: none;
      }

      .fish__suffix__icon {
        border-left: none;
      }
    }
  }

  &.danger {
    .fish__real__input {
      caret-color: $dangerColor;
      @include setBorder("danger");
    }

    .fish__input__content {
      background: #FFFFFF;

      .fish__prefix__icon,
      .fish__suffix__icon {
        color: $lightWhite;
        @include setBorder('danger');
        @include bg-color($dangerColor, 80%);
      }

      .fish__prefix__icon {
        border-right: none;
      }

      .fish__suffix__icon {
        border-left: none;
      }
    }
  }

  &.warning {
    .fish__real__input {
      caret-color: $warningColor;
      @include setBorder("warning");
    }

    .fish__input__content {
      background: #FFFFFF;

      .fish__prefix__icon,
      .fish__suffix__icon {
        color: $lightWhite;
        @include setBorder('warning');
        @include bg-color($warningColor, 80%);
      }

      .fish__prefix__icon {
        border-right: none;
      }

      .fish__suffix__icon {
        border-left: none;
      }
    }
  }

  &.none-rounded {
    .fish__real__input {
      border-radius: getRounded("none");
    }
  }

  &.small-rounded {
    .fish__real__input {
      border-radius: getRounded("small");
    }
  }

  &.middle-rounded {
    .fish__real__input {
      border-radius: getRounded("middle");
    }
  }

  &.large-rounded {
    .fish__real__input {
      border-radius: getRounded("large");
    }
  }
}
</style>
