<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
    :collapse="isCollapse"
  >
    <el-sub-menu
      index="/product"
    >
      <template #title>
        <el-icon><Shop /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        商品列表
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        商品信息
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>权限规则</span>
      </template>
      <el-menu-item index="/permission/permission_buttonRule">
        按钮规则
      </el-menu-item>
      <el-menu-item index="/permission/permission_userRule">
        用户规则
      </el-menu-item>
      <el-menu-item index="/permission/permission_roleRule">
        角色规则
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/media">
      <template #title>
        <el-icon><Tickets /></el-icon>
        <span>媒体</span>
      </template>
      <el-menu-item index="/media/media_uploadMedia">
        上传
      </el-menu-item>
      <el-menu-item index="/media/media_vedioMedia">
        视频
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang='ts' setup>
// import { ref } from 'vue'

import { Setting, Shop, Tickets } from '@element-plus/icons-vue'
import { useAppLayoutStore } from '@/store/applayout'
import { storeToRefs } from 'pinia'
const appLayoutStore = useAppLayoutStore()
const { isCollapse } = storeToRefs(appLayoutStore)

</script>
<style scoped lang='scss'>
.el-menu {
    border-right: none;
    height: 100vh;
}
.el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 500px;
}
</style>
