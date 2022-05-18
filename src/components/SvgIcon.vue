<template>
  <svg
    :width="width"
    :height="height"
    class="svgs"
    aria-hidden="true"
  >
    <use
      :x="x"
      :y="y"
      :href="symbolId"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
// https://gitee.com/mingtianyihou/iconfont-svgs2svg 阿里矢量图库iconfont.svg拆分地址
export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon'
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#0f8'
    },
    width: {
      type: String,
      default: '1rem'
    },
    height: {
      type: String,
      default: '1rem'
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: -2
    }
  },
  setup (props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  }
})
</script>

<style>
.svgs {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
