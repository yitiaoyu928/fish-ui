<template>
  <div
    class="fish__waterfall_flow_wrapper"
    :style="state.containerStyle"
    ref="waterfall">
    <Item
      ref="flowItem"
      v-for="(item, index) in state.imageList"
      :style="{
        width: columnWidth + 'px',
        left: item._style && item._style.left,
        top: item._style && item._style.top,
        transition: 'all 0.5s',
        position: 'absolute',
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
  column: number;
  gap?: number;
  imageList: Record<any, any>[];
}
interface State {
  wraperWidth: number;
  columnHeight: number[];
  index: number;
  column: number[];
  containerStyle: Record<any, any>;
  imageList: Record<any, any>[];
}
const state = reactive<State>({
  wraperWidth: 0,
  columnHeight: [],
  index: 0,
  column: [],
  containerStyle: {
    height: 0,
  },
  imageList: [],
});
const waterfall = ref();
const flowItem = ref();
const props = withDefaults(defineProps<Props>(), {
  column: 5,
  gap: 10,
});
watch(
  () => props.imageList,
  (newV) => {
    state.imageList = newV;
  },
  {
    deep: true,
    immediate: true,
  }
);
let columnWidth = computed(() => {
  return state.wraperWidth / props.column;
});
const useItemPosition = () => {
  console.log(state.imageList);
  state.imageList.filter((item, index) => {
    if (item.style) {
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
  state.imageList.forEach((item) => {
    delete item._style;
  });
  for (let i = 0; i < props.column; i++) {
    state.column.push(0);
  }
  let parent = imageAllParentElement();
  let allImage = imageAllElement(parent);
  imageOnComplete(allImage).then(() => {
    parent.forEach((item) => {
      state.columnHeight.push(item.clientHeight);
    });
    console.log(state.columnHeight);
    useItemPosition();
  });
}, 500);
onMounted(() => {
  window.addEventListener('resize', () => {
    state.wraperWidth = waterfall.value.clientWidth - props.column * props.gap;
    calcWaterFall();
  });
  state.wraperWidth = waterfall.value.clientWidth - props.column * props.gap;
  calcWaterFall();
});
</script>

<style lang="scss" scoped>
.fish__waterfall_flow_wrapper {
  position: relative;
}
</style>
