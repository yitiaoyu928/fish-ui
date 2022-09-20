<template>
  <div :class="['fish__button', `fish__${type}`, `fish__${rounded}-rounded`, { 'fish__disabled': isDisabled }]">
    <slot></slot>
  </div>

</template>
<script setup lang="ts">
import { Types, Rounded } from "../../interface/types"
interface TagInterface {
  type?: Types,
  rounded?: Rounded,
  isDisabled?: boolean
}
const props = withDefaults(defineProps<TagInterface>(), {
  type: 'default',
  rounded: 'none',
  isDisabled: false
})
</script>
<style lang="scss" scoped>
</style>