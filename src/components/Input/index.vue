<template>
  <div :class="['fish_input', type, `${rounded}-rounded`]">
    <div
      :class="['fish__input__content', 'fish__flex-base', 'fish__flex-align-center', 'fish__flex-justify-center', { 'fish__has-prefix-icon': prefixIcon }, { 'fish__has-suffix-icon': suffixIcon }]">
      <div class="fish__prefix__icon" v-if="prefixIcon">
        <span v-if="iconTextPosition || iconTextPosition === 'left'">{{ prefixIcon }}</span>
        <i :class="['iconfont', prefixIcon]" v-else></i>
      </div>
      <input :disabled="disabled" class="fish_real__input" @input="handleInput" @change="handleChange"
        @focus="handleFocus" @blur="handleBlur" :type="textType" :maxlength="maxLength" />
      <div class="fish__suffix__icon" v-if="suffixIcon">
        <span v-if="iconTextPosition || iconTextPosition === 'right'">{{ suffixIcon }}</span>
        <i :class="['iconfont', suffixIcon]" v-else></i>
      </div>
    </div>  </div>
</template>
<script setup lang="ts">
import { computed } from "vue"
import { TextType, Types, Rounded, TextIconPosition } from "../../interface/types"
interface inputInterface {
  textType?: TextType;
  prefixIcon?: string;
  suffixIcon?: string;
  openIconText?: TextIconPosition;
  type?: Types;
  rounded?: Rounded;
  modelValue?: any;
  disabled?: boolean;
  maxLength?: number;
};
const props = withDefaults(defineProps<inputInterface>(), {
  textType: "text",
  type: "default",
  rounded: "none",
  openIconText: false
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
let iconTextPosition = computed(() => {
  if (!props.openIconText) {
    return false
  } else {
    if (props.openIconText === true) {
      return true;
    }
    if (props.openIconText === 'left') {
      return 'left'
    }
    if (props.openIconText === 'right') {
      return 'right'
    }
  }
})
</script>
<style lang="scss">
@import "../../assets/style/style.scss";

.fish_input {
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

      .fish_real__input {
        border-right: none;
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

      .fish_real__input {
        border-left: none;
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
    @include bg-color($inputIconBgColor, 50%);
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
    .fish_real__input {
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
    .fish_real__input {
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
    .fish_real__input {
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
