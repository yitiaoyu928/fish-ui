<template>
  <div class="fish_input">
    <input class="fish_real__input" :type="textType" />
  </div>
</template>
<script setup lang="ts">
import { TextType } from "../../interface/types"
interface inputInterface {
  textType?: TextType
};
const props = withDefaults(defineProps<inputInterface>(), {
  textType: "text"
})
</script>
<style lang="scss" scoped>
.fish_input {
  display: inline-block;
  .fish_real__input {
    height: 30px;
    padding: 0 8px;
    margin: 0;
    border: 1px solid #ccc;
    outline: none;
  }
}
</style>
