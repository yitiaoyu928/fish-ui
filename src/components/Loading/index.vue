<script setup lang="ts">
interface LoadingProps {
  element: string | HTMLElement,
  visible: boolean,
  size: number
}
const props = withDefaults(defineProps<LoadingProps>(), {
  element: "body",
  visible: false,
  size: 50
})
</script>
<template>
  <Teleport :to="element" v-if="visible">
    <div class="fish__loading">
      <div class="fish__loading-icon fish__loading_animation">
        <i :class="['iconfont icon-loading']" :style="{fontSize:size+'px'}"></i>
      </div>
    </div>
  </Teleport>
</template>
<style lang="scss" scoped>
.fish__loading {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .8);

  .fish__loading-icon {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>