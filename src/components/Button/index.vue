<template>
  <div class="fish_button">
    <div class="fish_button__wrapper flex-base">
      <div class="fish_button_prefix" v-if="prefixIcon"></div>
      <div class="fish_button_content"><slot></slot></div>
      <div class="fish_button_suffix" v-if="suffixIcon"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  prefixIcon: String
  suffixIcon: String
}>()
</script>
<style lang="scss" scoped>
@import "../../assets/style/style.scss";
.fish_button {
  display: inline-block;
  font-size: $middleFontSize;
  border: 1px solid $lightGrey;
  border-radius: $middleBorderRadius;
  @extend .cursor-pointer;
  .fish_button__wrapper {
    padding: 5px 10px;
    .fish_button_prefix {
    }
    .fish_button_content {
    }
    .fish_button_suffix {
    }
  }
}
</style>
