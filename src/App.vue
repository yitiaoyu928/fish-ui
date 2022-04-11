<template>
  <div>
    <h1>组件库</h1>
    <!-- 按钮组件库 -->
    <div class="container">
      <h3>按钮组件</h3>
      <div class="container-item">
        <h4>按钮的四种样式</h4>
        <f-button>默认样式</f-button>
        <f-button type="primary">主要样式</f-button>
        <f-button type="warning">警告样式</f-button>
        <f-button type="danger">危险样式</f-button>
      </div>
      <div class="container-item">
        <h4>带有左侧图标按钮</h4>
        <f-button prefix-icon="icon-search">左侧图标</f-button>
        <f-button type="primary" rounded="small" prefix-icon="icon-search">左侧图标
        </f-button>
        <f-button type="warning" rounded="middle" prefix-icon="icon-search">左侧图标
        </f-button>
        <f-button type="danger" rounded="large" prefix-icon="icon-search">左侧图标
        </f-button>
      </div>
      <div class="container-item">
        <h4>带有左侧图标和loading按钮</h4>
        <f-button prefix-icon="icon-search" :loading="loading" @click="handleClick">点一下我</f-button>
        <f-button type="primary" rounded="small" prefix-icon="icon-search" :loading="loading" @click="handleClick">点一下我
        </f-button>
        <f-button type="warning" rounded="middle" prefix-icon="icon-search" :loading="loading" @click="handleClick">点一下我
        </f-button>
        <f-button type="danger" rounded="large" prefix-icon="icon-search" :loading="loading" @click="handleClick">点一下我
        </f-button>
      </div>
      <div class="container-item">
        <h4>带有右侧图标的按钮</h4>
        <f-button suffix-icon="icon-search">右侧图标</f-button>
        <f-button type="primary" rounded="small" suffix-icon="icon-search">右侧图标</f-button>
        <f-button type="warning" rounded="middle" suffix-icon="icon-search">右侧图标</f-button>
        <f-button type="danger" rounded="large" suffix-icon="icon-search">右侧图标</f-button>
      </div>
      <div class="container-item">
        <h4>带有右侧图标和loading的按钮</h4>
        <f-button suffix-icon="icon-search" loading-position="right" :loading="loading" @click="handleClick">点我一下
        </f-button>
        <f-button type="primary" rounded="small" loading-position="right" suffix-icon="icon-search" :loading="loading"
          @click="handleClick">点我一下
        </f-button>
        <f-button type="warning" rounded="middle" loading-position="right" suffix-icon="icon-search" :loading="loading"
          @click="handleClick">点我一下
        </f-button>
        <f-button type="danger" rounded="large" loading-position="right" suffix-icon="icon-search" :loading="loading"
          @click="handleClick">点我一下
        </f-button>
      </div>
      <div class="container-item">
        <h4>带有loading的圆形按钮</h4>
        <f-button rounded="circle" :loading="loading" @click="handleClick">环形按钮</f-button>
        <f-button type="primary" rounded="circle" :loading="loading" @click="handleClick">环形按钮</f-button>
        <f-button type="warning" rounded="circle" :loading="loading" loading-position="right" @click="handleClick">环形按钮
        </f-button>
        <f-button type="danger" rounded="circle" :loading="loading" loading-position="right" @click="handleClick">环形按钮
        </f-button>
      </div>
    </div>
    <!-- 输入框组件库 -->
    <div class="container">
      <h3>输入框组件</h3>
      <div class="container-item">
        <h4>默认输入框</h4>
        <f-input></f-input>
        <f-input type="primary"></f-input>
        <f-input type="warning"></f-input>
        <f-input type="danger"></f-input>
      </div>
      <div class="container-item">
        <h4>小圆角输入框</h4>
        <f-input rounded="small" prefix-icon="icon-search" suffix-icon="123" open-icon-text="right"></f-input>
        <f-input type="primary" rounded="small" prefix-icon="loading" suffix-icon="123" :open-icon-text="true">
        </f-input>
        <f-input type="warning" rounded="small" prefix-icon="icon-search" suffix-icon="123"></f-input>
        <f-input type="danger" rounded="small" prefix-icon="icon-search" open-icon-text="left" suffix-icon="123">
        </f-input>
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
    </div>
    <!-- switch组件 -->
    <div class="container">
      <div class="container-item">
        <f-switch></f-switch>
        <f-switch></f-switch>
      </div>
      <div class="container-item"></div>
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
<style lang="scss" scoped>
.container+.container {
  margin-bottom: 20px;
}

.container:not(:last-child) {
  border-bottom: 1px solid #ccc;
}

.container-item+.container-item {
  margin-bottom: 20px;
}
</style>
