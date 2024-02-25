<template>
  <div
    :class="[
      'fish__inline-flex',
      'fish__flex-align-center',
      'fish__button',
      `size__${size}`,
      `fish__${type}`,
      `fish__${rounded}-rounded`,
      { fish__plain: plain },
      { fish__disabled: isDisabled },
      { fish__relative: isCircle },
    ]"
    :disabled="isDisabled"
    @click="handleClick">
    <div
      :class="[
        'fish__button__wrapper',
        {
          'fish__flex-base': rounded !== 'circle',
        },
      ]">
      <div
        :class="[
          'fish__button_prefix',
          { fish__loading_animation: loading && loadingPosition === 'left' },
        ]"
        v-if="prefixIcon || (loading && loadingPosition === 'left')">
        <i :class="['iconfont', prefix]"></i>
      </div>
      <div
        :class="[
          'fish__button_content',
          { 'fish__absolute-center': isCircle },
        ]">
        <slot></slot>
      </div>
      <div
        :class="[
          'fish__button_suffix',
          { fish__loading_animation: loading && loadingPosition === 'right' },
        ]"
        v-if="suffixIcon || (loading && loadingPosition === 'right')">
        <i :class="['iconfont', suffix]"></i>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { Types, Rounded, LoadingPosition, Size } from '../../interface/types';
interface ButtonProps {
  prefixIcon?: string;
  suffixIcon?: string;
  type?: Types;
  size?: Size;
  rounded?: Rounded;
  disabled?: boolean;
  loading?: boolean;
  closeDisabled?: boolean;
  plain?: boolean;
  loadingPosition?: LoadingPosition;
}
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  rounded: 'none',
  loading: false,
  size: 'small',
  closeDisabled: false,
  plain: false,
  loadingPosition: 'left',
});
// 定义点击事件
const emits = defineEmits(['click']);
const handleClick = function (event: Event) {
  if (props.disabled) {
    return true;
  }
  if (props.loading) {
    return true;
  }
  emits('click', event);
};
// 计算是否开启了loading并且loading位置为left,如果是，则返回.icon-loading
let prefix = computed(() => {
  if (props.loading && props.loadingPosition === 'left') {
    return 'icon-loading';
  } else {
    return props.prefixIcon;
  }
});
// 计算是否开启了loading并且loading位置为right,如果是，则返回.icon-loading
let suffix = computed(() => {
  if (props.loading && props.loadingPosition === 'right') {
    return 'icon-loading';
  } else {
    return props.suffixIcon;
  }
});
// 按照传入的props来决定是否开启disabled
let isDisabled = computed(() => {
  // 如果开启了disabled，则以disabled的状态来决定
  if (props.disabled) {
    return props.disabled;
  } else {
    // 如果开启了closeDisabled，则看是否传入了loading，以loading的状态来决定是否禁止
    if (!props.closeDisabled) {
      return props.loading;
    } else {
      return false;
    }
  }
});
// // 如果是环形，则将文字隐藏并显示loading
let isCircle = computed(() => {
  return props.rounded === 'circle';
});
</script>
<style lang="scss">
@import '../../assets/style/style.scss';

.fish__button {
  display: inline-block;
  overflow: hidden;
  transition: all 0.2s ease;
  &.size__small {
    height: $smallHeight;

    // .fish__button__wrapper {
    //   padding: 5px 10px;

    //   .fish__button_prefix,
    //   .fish__button_suffix {
    //     .iconfont {
    //       font-size: $smallFontSize;
    //     }

    //     text-align: center;
    //   }

    //   .fish__button_content {
    //     flex: 1;
    //     font-size: $smallFontSize;
    //     padding: 0 5px;

    //     &.fish__default {
    //       color: $lightBack;
    //     }
    //   }
    // }
  }

  &.size__medium {
    font-size: $middleFontSize;
    height: $mediumHeight;
  }

  &.size__large {
    font-size: $largeFontSize;
    height: $largeHeight;
  }

  & + & {
    margin-left: 10px;
  }

  &.fish__none-rounded {
    border-radius: getRounded('none');
  }

  &.fish__small-rounded {
    border-radius: getRounded('small');
  }

  &.fish__middle-rounded {
    border-radius: getRounded('middle');
  }

  &.fish__large-rounded {
    border-radius: getRounded('large');
  }

  &.fish__circle-rounded {
    width: 32px;
    height: 32px;
    text-align: center;
    border-radius: getRounded('circle');
  }

  &.fish__default {
    @include setBorder('default');
    @include bgColorMixin('default');
    @include activeBgColor('default');
    @include hoverBoxShadow('default');

    &.fish__plain {
      background-color: transparent;
      color: $lightBack;

      &:hover {
        @include bgColorMixin('default');
        color: $lightBack;
      }

      &:active {
        color: $lightBack;
        background-color: transparent;
      }
    }

    &.fish__disabled {
      @include disabled('default');
    }
  }

  &.fish__primary {
    @include setBorder('primary');
    @include bgColorMixin('primary');
    @include activeBgColor('primary');
    @include hoverBoxShadow('primary');

    &.fish__plain {
      background-color: transparent;
      color: $primaryColor;

      &:hover {
        @include bgColorMixin('primary');
        color: $lightWhite;
      }

      &:active {
        color: $primaryColor;
        background-color: transparent;
      }
    }

    &.fish__disabled {
      @include disabled('primary');
    }
  }

  &.fish__danger {
    @include setBorder('danger');
    @include bgColorMixin('danger');
    @include activeBgColor('danger');
    @include hoverBoxShadow('danger');

    &.fish__plain {
      background-color: transparent;
      color: $dangerColor;

      &:hover {
        @include bgColorMixin('danger');
        color: $lightWhite;
      }

      &:active {
        color: $dangerColor;
        background-color: transparent;
      }
    }

    &.fish__disabled {
      @include disabled('danger');
    }
  }

  &.fish__warning {
    @include setBorder('warning');
    @include bgColorMixin('warning');
    @include activeBgColor('warning');
    @include hoverBoxShadow('warning');

    &.fish__plain {
      background-color: transparent;
      color: $warningColor;

      &:hover {
        @include bgColorMixin('warning');
        color: $lightWhite;
      }

      &:active {
        color: $warningColor;
        background-color: transparent;
      }
    }

    &.fish__disabled {
      @include disabled('warning');
    }
  }

  @extend .cursor-pointer;

  .fish__button__wrapper {
    padding: 5px 10px;

    .fish__button_prefix,
    .fish__button_suffix {
      .iconfont {
        font-size: $middleFontSize;
      }

      text-align: center;
    }

    .fish__button_content {
      flex: 1;
      font-size: $middleFontSize;
      padding: 0 5px;
      &.fish__default {
        color: $lightBack;
      }
    }
  }
}
</style>
