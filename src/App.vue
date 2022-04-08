<template>
  <div>
    <h1>组件库</h1>
    <div class="container">
      <h3>按钮组件</h3>
      <f-button>hello</f-button>
      <f-button type="primary">hello</f-button>
      <f-button type="warning">hello</f-button>
      <f-button type="danger">hello</f-button>
    </div>
    <div class="container">
      <h3>输入框组件</h3>
      <f-input></f-input>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
  .container + .container {
    margin-bottom: 20px;
  }
</style>
