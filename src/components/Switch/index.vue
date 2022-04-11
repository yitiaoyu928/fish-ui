<template>
  <div class="fish__switch" :style="{ backgroundColor: bgCalc, border: '1px solid ' + bgCalc }" @click="handleChange">
    <div class="fish__switch__content fish__relative"
      :class="{ 'fish__active': activeValue === value, 'fish__inactive': inActiveValue === value }">
      <span class="fish__switch__left__text" :style="{ color: activeTextColor }"
        v-if="activeText && activeValue === value">{{ activeText }}</span>
      <span class="fish__switch__ball" :style="{ backgroundColor: dotColor }"></span>
      <span class="fish__switch__right__text" :style="{ color: inActiveTextColor }"
        v-if="inActiveText && inActiveValue === value">{{ inActiveText }}</span>
    </div>  </div>
</template>
<script setup lang="ts">import { computed } from 'vue';

interface SwitchProps {
  value: number | boolean | string;
  activeValue?: number | boolean | string;
  inActiveValue?: number | boolean | string;
  activeColor?: string;
  inActiveColor?: string;
  activeText?: string;
  activeTextColor?: string;
  inActiveTextColor?: string;
  inActiveText?: string;
  dotColor?: string;
}
const props = withDefaults(defineProps<SwitchProps>(), {
  activeValue: true,
  inActiveValue: false,
  inActiveColor: "#989898",
  activeColor: "#009EFA",
  activeTextColor: "#FFFFFF",
  inActiveTextColor: "#FFFFFF",
  dotColor: "#FFFFFF"
})
let bgCalc = computed(() => {
  if (props.value === props.activeValue) {
    return props.activeColor
  } else {
    return props.inActiveColor;
  }
})
const emits = defineEmits(['update:value', 'change'])
function handleChange(event: Event) {
  if (props.activeValue === props.value) {
    emits("update:value", props.inActiveValue)
    emits("change", props.inActiveValue)
  } else {
    emits("update:value", props.activeValue)
    emits("change", props.activeValue)
  }

}
</script>
<style lang="scss">
@import "../../assets/style/style.scss";
$height:20px;
$width:60px;

.fish__switch {
  display: inline-block;
  overflow: hidden;
  border-radius: $height;
  padding: 2px 0;

  &+& {
    margin-left: 10px;
  }

  .fish__switch__content {
    width: $width;
    height: $height;
    line-height: $height;

    .fish__switch__left__text,
    .fish__switch__right__text {
      font-size: $middleFontSize;
      position: absolute;
      cursor: default;
      user-select: none;
    }

    .fish__switch__left__text {
      left: 5px;
    }

    .fish__switch__right__text {
      right: 5px;
    }

    .fish__switch__ball {
      position: absolute;
      left: 1px;
      width: 20px;
      height: 100%;
      border-radius: $height;
      transition: all 250ms;
    }

    &.fish__inactive {
      &:active {
        .fish__switch__ball {
          width: 40px;
        }

      }
    }

    &.fish__active {
      &:active {
        .fish__switch__ball {
          width: 40px;
          left: calc(100% - 40px - 1px);
        }
      }

      .fish__switch__ball {
        left:calc(100% - #{$height} - 1px);
      }
    }
  }
}
</style>