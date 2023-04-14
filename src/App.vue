<template>
  <div>
    <f-loading></f-loading>
    <!-- 输入框组件库 -->
    <div class="container">
      <div class="container-item">
        <f-waterfall-flow :imageList="PicList"></f-waterfall-flow>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
let PicList = ref([
  {
    url: 'https://picsum.photos/id/1027/2848/4272',
  },
  {
    url: 'https://picsum.photos/id/1031/5000/2812',
  },
  {
    url: 'https://picsum.photos/id/1033/300/300',
  },
  {
    url: 'https://picsum.photos/id/496/4288/2848',
  },
  {
    url: 'https://picsum.photos/id/490/5000/3306',
  },
  {
    url: 'https://picsum.photos/id/491/5000/4061',
  },
  {
    url: 'https://picsum.photos/id/494/5000/3334',
  },
  {
    url: 'https://picsum.photos/id/49/1280/792',
  },
  {
    url: 'https://picsum.photos/id/52/1280/853',
  },
]);
</script>
<style lang="scss" scoped>
.container + .container {
  margin-bottom: 20px;
}

.container:not(:last-child) {
  border-bottom: 1px solid #ccc;
}

.container-item + .container-item {
  margin-bottom: 20px;
}
</style>
