<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { getLoginInfo } from '@/api/test'
import { onMounted, ref } from 'vue'
onMounted(() => {
  getLoginInfoFun()
})
const list = ref<Array<any>>([])
function getLoginInfoFun () {
  getLoginInfo().then(res => {
    list.value = res.data
    console.log(list.value)
  })
}
</script>

<template>
  <div
    v-for="item in list"
    :key="
      item.id"
  >
    <img

      :src="item.imgUrl"
      alt=""
    >
  </div>
</template>
