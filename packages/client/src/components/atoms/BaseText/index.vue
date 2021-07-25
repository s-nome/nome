<template>
  <span class="text" :class="[sizeClass, colorClass]" :style="style">
    <slot />
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Size, Color } from './types'

export default defineComponent({
  name: 'BaseText',

  props: {
    /**
     * テキストのfont-size
     */
    size: {
      type: String as PropType<Size>,
      default: 'medium' as const,
    },
    /**
     * テキストのcolor
     */
    color: {
      type: String as PropType<Color>,
      default: 'default' as const,
    },
    /**
     * テキストのfont-weight
     */
    bold: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  setup(props) {
    return {
      sizeClass: computed(() => `-${props.size}`),
      colorClass: computed(() => `-${props.color}`),
      style: computed(() => ({
        'font-weight': props.bold ? 'bold' : '',
      })),
    }
  },
})
</script>

<style lang="scss" scoped>
.text {
  // size
  &.-small {
    font-size: 11px;
  }
  &.-medium {
    font-size: 14px;
  }
  &.-large {
    font-size: 16px;
  }

  // color
  &.-default {
    color: rgb(55, 53, 47);
  }
  &.-light {
    color: rgba(55, 53, 47, 0.4);
  }
  &.-alert {
    color: rgb(224, 62, 62);
  }
}
</style>
