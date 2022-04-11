<template>
  <div class="fish__switch" :style="{ backgroundColor: bgCalc, border: '1px solid ' + bgCalc }">
    <div class="fish__switch__content fish__relative">
      <span class="fish__switch__ball" :style="{ backgroundColor: dotColor }"></span>
    </div>  </div>
</template>
<script setup lang="ts">import { computed } from 'vue';

interface SwitchProps {
  value?: boolean;
  activeValue?: number | boolean | string;
  inActiveValue?: number | boolean | string;
  activeColor?: string;
  inActiveColor?: string;
  dotColor?: string;
}
const props = withDefaults(defineProps<SwitchProps>(), {
  inActiveColor: "#989898",
  activeColor: "#009EFA",
  dotColor: "#FFFFFF"
})
let bgCalc = computed(() => {
  if (props.value === props.activeValue) {
    return props.activeColor
  } else {
    return props.inActiveColor;
  }
})
</script>
<style lang="scss">
@import "../../assets/style/style.scss";
$height:20px;
$width:60px;

.fish__switch {
  display: inline-block;
  overflow: hidden;
  border-radius: $height;

  &+& {
    margin-left: 10px;
  }

  .fish__switch__content {
    width: $width;
    height: $height;
    line-height: $height;

    .fish__switch__ball {
      position: absolute;
      left: 1px;
      width: 20px;
      height: 100%;
      border-radius: $height;
    }

    &:hover {
      .fish__switch__ball {
        left:calc(100% - #{$height} - 1px);
      }
    }
  }
}
</style>