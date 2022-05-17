<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import TestNode from '@/components/TestNode.vue'
import { useDark, useToggle } from '@vueuse/core'
import { watch } from 'vue'

const isDark = useDark({
  selector: 'body',
  // attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggleDark = useToggle(isDark)
// let el = null

watch(isDark, el => {

})
</script>

<template>
  <!-- <TestNode /> -->
  <router-view />
  <el-button
    @click="toggleDark()"
    type="warning"
  >
    {{ 'name' }}
  </el-button>
</template>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
