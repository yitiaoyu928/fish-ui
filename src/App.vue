<template>
  <div>
    <h1>组件库</h1>
    <!-- 按钮组件库 -->
    <div class="container">
      <h3>按钮组件</h3>
      <div class="container-item">
        <h4>没有圆角</h4>
        <f-button :disabled="disabled" @click="handleClick">hello</f-button>
        <f-button type="primary" :disabled="disabled" @click="handleClick">hello</f-button>
        <f-button type="warning" :disabled="disabled" @click="handleClick">hello</f-button>
        <f-button type="danger" :disabled="disabled" @click="handleClick">hello</f-button>
      </div>
      <div class="container-item">
        <h4>小圆角</h4>
        <f-button rounded="small" @click="handleClick" :loading="loading" prefix-icon="icon-search"
          suffix-icon="icon-search">hello</f-button>
        <f-button type="primary" rounded="small" @click="handleClick">hello</f-button>
        <f-button type="warning" rounded="small" @click="handleClick">hello</f-button>
        <f-button type="danger" rounded="small" @click="handleClick">hello</f-button>
      </div>
      <div class="container-item">
        <h4>中号圆角</h4>
        <f-button rounded="middle">hello</f-button>
        <f-button type="primary" rounded="middle">hello</f-button>
        <f-button type="warning" rounded="middle">hello</f-button>
        <f-button type="danger" rounded="middle">hello</f-button>
      </div>
      <div class="container-item">
        <h4>大号圆角</h4>
        <f-button rounded="large">hello</f-button>
        <f-button type="primary" rounded="large">hello</f-button>
        <f-button type="warning" rounded="large">hello</f-button>
        <f-button type="danger" rounded="large">hello</f-button>
      </div>
      <div class="container-item">
        <h4>圆形</h4>
        <f-button rounded="circle">hello</f-button>
        <f-button type="primary" rounded="circle" loading>hello</f-button>
        <f-button type="warning" rounded="circle">hello</f-button>
        <f-button type="danger" rounded="circle">hello</f-button>
      </div>
    </div>
    <!-- 输入框组件库 -->
    <div class="container">
      <h3>输入框组件</h3>
      <div class="container-item">
        <h4>默认输入框</h4>
        <f-input :disabled="disabled"></f-input>
        <f-input type="primary" :disabled="disabled"></f-input>
        <f-input type="warning" :disabled="disabled"></f-input>
        <f-input type="danger" :disabled="disabled"></f-input>
      </div>
      <div class="container-item">
        <h4>小圆角输入框</h4>
        <f-input rounded="small"></f-input>
        <f-input type="primary" rounded="small"></f-input>
        <f-input type="warning" rounded="small"></f-input>
        <f-input type="danger" rounded="small"></f-input>
      </div>
      <div class="container-item">
        <h4>中等圆角输入框</h4>
        <f-input rounded="small"></f-input>
        <f-input type="primary" rounded="small"></f-input>
        <f-input type="warning" rounded="small"></f-input>
        <f-input type="danger" rounded="small"></f-input>
      </div>
      <div class="container-item">
        <h4>大圆角输入框</h4>
        <f-input rounded="large"></f-input>
        <f-input type="primary" rounded="large"></f-input>
        <f-input type="warning" rounded="large"></f-input>
        <f-input type="danger" rounded="large"></f-input>
      </div>
    </div>  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
let disabled = ref(true)
let loading = ref(false)
function handleClick() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}
</script>
<style lang="scss" scoped>.container+.container {
  margin-bottom: 20px;
}

.container:not(:last-child) {
  border-bottom: 1px solid #ccc;
}

.container-item+.container-item {
  margin-bottom: 20px;
}</style>
