<template>
  <el-container>
    <el-aside width="200px">
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header> <AppHeader /></el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
// import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue'
import AppMenu from '@/components/AppMenu.vue'
import AppHeader from '@/components/AppHeader/index.vue'

</script>

<style scoped lang='scss'>
.el-container {
   height: 100vh;
}
.el-header {
    background-color: #B3C0D1;
    height: 40px;
}
.el-main {
    background-color: #E9EEF3;
}
.el-aside {
    background-color: #304156;
    width: auto;
}
</style>
