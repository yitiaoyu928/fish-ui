<template>
  <div>
    <f-loading></f-loading>
    <!-- 输入框组件库 -->
    <div class="container">
      <div class="container-item">
        <f-tag>hello</f-tag>
      </div>
      <div class="container-item">
        <f-button type="primary" size="medium" plain>hello</f-button>
        <f-button type="default" plain>hello</f-button>
        <f-button type="warning" plain>hello</f-button>
        <f-button type="danger" plain>hello</f-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
let loading = ref(false);
function handleClick() {
  console.log(123);
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 3000);
}
let switchValue = ref(false);
function handleSwitchChange(e: boolean): void {
  console.log(e);
  switchValue.value = e;
}
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
