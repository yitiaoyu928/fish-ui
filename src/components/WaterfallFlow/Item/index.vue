<template>
  <div class="fish__flow_item" ref="flowItem">
    <img :src="props.image" alt="" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
let flowItem = ref();
const props = defineProps<Props>();
interface Props {
  image: string;
}
defineExpose({
  flowItem,
});
</script>

<style lang="scss" scoped>
.fish__flow_item {
  width: 0;
  top: 0;
  left: 0;
  transition: all ease-in-out 1s;
  img {
    width: 100%;
  }
}
</style>
