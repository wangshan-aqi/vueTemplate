<template>
  <div class="header-wrap">
    <ToggleSidebar />
  </div>
</template>

<script lang='ts' setup>
import ToggleSidebar from './ToggleSidebar.vue'
</script>

<style scoped lang='scss'>
.header-wrap {
  height: inherit;
  display: flex;
  align-items: center;
}
</style>
