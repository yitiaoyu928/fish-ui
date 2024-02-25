<template>
  <div>
    <!-- 瀑布流组件 -->
    <div class="container">
      <div class="container-item">
        <h3>default Button组件</h3>
        <f-button>默认按钮</f-button>
        <f-button size="medium">medium 默认按钮</f-button>
        <f-button size="large">large 默认按钮</f-button>
      </div>
      <div class="container-item">
        <h3>primary Button组件</h3>
        <f-button type="primary">primary按钮</f-button>
        <f-button type="primary" size="medium">primary按钮</f-button>
        <f-button type="primary" size="large">primary按钮</f-button>
      </div>
      <div class="container-item">
        <h3>danger Button组件</h3>
        <f-button type="danger">danger按钮</f-button>
        <f-button type="danger" size="medium">danger按钮</f-button>
        <f-button type="danger" size="large">danger按钮</f-button>
      </div>
      <div class="container-item">
        <h3>warning Button组件</h3>
        <f-button type="warning">warning按钮</f-button>
        <f-button type="warning" size="medium">warning按钮</f-button>
        <f-button type="warning" size="large">warning按钮</f-button>
      </div>
      <div class="container-item">
        <h3>rounded Button组件</h3>
        <f-button rounded="small">Round 按钮</f-button>
        <f-button type="primary" rounded="middle" size="small">
          Round按钮
        </f-button>
        <f-button type="primary" rounded="large" size="small">
          Round按钮
        </f-button>
        <f-button type="primary" rounded="circle" size="small">
          <i class="iconfont icon-search"></i>
        </f-button>
      </div>
      <div class="container-item">
        <h3>loading Button组件</h3>
        <f-button rounded="small" :loading="true">Round 按钮</f-button>
        <f-button type="primary" rounded="middle" size="small" :loading="true">
          Round按钮
        </f-button>
        <f-button type="primary" rounded="large" size="small" :loading="true">
          Round按钮
        </f-button>
        <f-button
          type="primary"
          rounded="circle"
          size="small"
          :loading="true"
          prefix-icon="icon-search"></f-button>
      </div>
      <div class="container-item">
        <h3>plain Button组件</h3>
        <f-button rounded="small" :plain="true">plain 按钮</f-button>
        <f-button rounded="small" type="primary" :plain="true">
          plain 按钮
        </f-button>
        <f-button rounded="small" type="danger" :plain="true">
          plain 按钮
        </f-button>
        <f-button rounded="small" type="warning" :plain="true">
          plain 按钮
        </f-button>
      </div>
      <div class="container-item">
        <h3>switch组件</h3>
        <f-switch :value="switchValue" @change="handleSwitchChange"></f-switch>
        <f-switch
          :value="switchValue"
          @change="handleSwitchChange"
          rounded></f-switch>
      </div>
      <div class="container-item">
        <h3>switch组件改变颜色</h3>
        <f-switch
          :value="switchValue"
          @change="handleSwitchChange"
          active-color="#333"
          in-active-color="#eee"
          dot-color="#ff2100"></f-switch>
        <f-switch
          :value="switchValue"
          @change="handleSwitchChange"
          rounded
          active-color="#333"
          in-active-color="#eee"
          dot-color="#ff2100"></f-switch>
      </div>
      <div class="container-item">
        <h3>switch组件带文字</h3>
        <f-switch
          :value="switchValue"
          active-text="开"
          in-active-text="关"
          @change="handleSwitchChange"></f-switch>
        <f-switch
          :value="switchValue"
          active-text="开"
          in-active-text="关"
          @change="handleSwitchChange"
          rounded></f-switch>
      </div>
      <div class="container-item">
        <h3>Input组件</h3>
        <f-input></f-input>
        <f-input rounded="small"></f-input>
        <f-input rounded="middle"></f-input>
        <f-input rounded="large"></f-input>
      </div>
      <div class="container-item">
        <h3>Input组件 Type类型</h3>
        <f-input type="primary" rounded="small"></f-input>
        <f-input type="danger"></f-input>
        <f-input type="warning"></f-input>
      </div>
      <div class="container-item">
        <h3>Input组件 左侧icon</h3>
        <f-input
          prefix-icon="icon-search"
          type="primary"
          rounded="small"></f-input>
        <f-input prefix-icon="icon-search" type="danger"></f-input>
        <f-input type="warning" prefix-icon="icon-search"></f-input>
      </div>
      <div class="container-item">
        <h3>Input组件 右侧icon</h3>
        <f-input
          suffix-icon="icon-search"
          type="primary"
          rounded="small"></f-input>
        <f-input suffix-icon="icon-search" type="danger"></f-input>
        <f-input type="warning" suffix-icon="icon-search"></f-input>
      </div>
      <div class="container-item">
        <h3>瀑布流组件</h3>
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
const switchValue = ref(false);
const handleSwitchChange = () => {
  switchValue.value = !switchValue.value;
};
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
