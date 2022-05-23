<template>
  <div
    class="icon-class"
    @click="handlerCool"
  >
    <el-icon><Fold /></el-icon>
    <!-- <svg-icon
      name="dingdan"
      :width="'32px'"
      :height="'32px'"
    /> -->
  </div>
</template>

<script lang='ts' setup>
// import SvgIcon from '@/components/SvgIcon.vue'
import { useAppLayoutStore } from '@/store/applayout'
import { Fold } from '@element-plus/icons-vue'
const appLayoutStore = useAppLayoutStore()
function handlerCool () {
  appLayoutStore.$patch({
    isCollapse: !appLayoutStore.isCollapse
  })
}
</script>

<style scoped lang='scss'>
.icon-class {
    display: flex;
    align-items: center;
    margin-right: 10px;
}
</style>
