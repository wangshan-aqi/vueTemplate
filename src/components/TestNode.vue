<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import { getLoginInfo } from '@/api/test'
import { getBannerList } from '@/api/test'
import { onMounted, ref } from 'vue'
onMounted(() => {
  getLoginInfoFun()
})
const list = ref<Array<any>>([])
function getLoginInfoFun () {
  // getLoginInfo().then(res => {
  //   list.value = res.data
  //   console.log(list.value)
  // })
  getBannerList().then(res => {
    list.value = res.data.data
    console.log(list.value)
  })
}
</script>

<template>
  <div
    class="wrap"
  >
    <div
      v-for="item in list"
      :key="item.id"
      class="img-item"
    >
      <img
        :src="item.imgUrl"
      >
    </div>
  </div>
</template>
<styles lang="scss" scoped>
.wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  .img-item {
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</styles>
