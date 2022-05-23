<template>
  <div class="header-wrap">
    <div class="header-left">
      <ToggleSidebar />
      <Breadcrumb />
    </div>
    <div>
      <FullScreen />
    </div>
  </div>
</template>

<script lang='ts' setup>
import ToggleSidebar from './ToggleSidebar.vue'
import Breadcrumb from './Breadcrumb.vue'
import FullScreen from './FullScreen.vue'
</script>

<style scoped lang='scss'>
.header-wrap {
  height: inherit;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  display: flex;
}
</style>
