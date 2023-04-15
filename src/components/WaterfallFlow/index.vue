<template>
  <div
    class="fish__waterfall_flow_wrapper"
    :style="state.containerStyle"
    ref="waterfall">
    <Item
      ref="flowItem"
      v-for="(item, index) in props.imageList"
      :style="{
        width: columnWidth + 'px',
        left: item._style && item._style.left,
        top: item._style && item._style.top,
        transition: 'all 0.5s',
        position: 'absolute',
        visibility: state.imageShow ? 'visible' : 'hidden',
      }"
      :key="index"
      :image="item.url"></Item>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, watch, nextTick } from 'vue';
import {
  imageAllElement,
  imageOnComplete,
  imageAllParentElement,
} from './image';
import { Debounce } from '@/utils/debounce';
import Item from './Item/index.vue';
interface Props {
  column?: number;
  gap?: number;
  imageList: Record<any, any>[];
}
interface State {
  wraperWidth: number;
  columnHeight: number[];
  index: number;
  column: number[];
  containerStyle: Record<any, any>;
  imageShow: boolean;
}
const state = reactive<State>({
  wraperWidth: 0,
  columnHeight: [],
  index: 0,
  column: [],
  containerStyle: {
    height: 0,
  },
  imageShow: false,
});
const waterfall = ref();
const flowItem = ref();
const parentList = ref<Element[]>([]);
const props = withDefaults(defineProps<Props>(), {
  column: 5,
  gap: 10,
});
let columnWidth = computed(() => {
  console.log(state.wraperWidth);
  return state.wraperWidth / props.column;
});
const useItemPosition = () => {
  props.imageList.filter((item, index) => {
    if (item._style) {
      return;
    }
    item._style = {};
    let minColumn = Math.min(...state.column);
    let idx = state.column.indexOf(minColumn);
    let left = idx * (columnWidth.value + props.gap);
    let top = state.column[idx];
    item._style.left = left + 'px';
    item._style.top = top + 'px';
    state.column[idx] += state.columnHeight[index] + props.gap;
    state.containerStyle.height = Math.max(...state.column) + 'px';
  });
};
const calcWaterFall = Debounce(() => {
  state.containerStyle.height = 0;
  state.columnHeight = [];
  state.column = [];
  for (let i = 0; i < props.column; i++) {
    state.column.push(0);
  }
  props.imageList.forEach((item) => {
    delete item._style;
  });
  readyRender();
}, 500);
const readyRender = () => {
  state.wraperWidth = waterfall.value.clientWidth - props.column * props.gap;
  parentList.value = imageAllParentElement();
  let allImage = imageAllElement(parentList.value);
  imageOnComplete(allImage).then(() => {
    parentList.value.forEach((item) => {
      state.columnHeight.push(item.clientHeight);
    });
    state.imageShow = true;
    useItemPosition();
  });
};
onMounted(() => {
  for (let i = 0; i < props.column; i++) {
    state.column.push(0);
  }
  window.addEventListener('resize', () => {
    state.wraperWidth = waterfall.value.clientWidth - props.column * props.gap;
    calcWaterFall();
  });
  readyRender();
});
watch(
  () => props.imageList,
  () => {
    if (waterfall.value) {
      readyRender();
    }
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
.fish__waterfall_flow_wrapper {
  position: relative;
}
</style>
