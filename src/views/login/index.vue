<template>
  <h1>登陆</h1>
  <p class="a">
    {{ counter }}
  </p>
  <h1 class="b">
    {{ doubleCount }}
  </h1>
</template>

<script lang="ts" setup>
// defineStore返回一个必须调用才能访问存储的函数：
import { useMainStore } from '@/store/main'
import { storeToRefs } from 'pinia'
const main = useMainStore()

// extract specific store properties
// 提取特定的存储属性
const { counter, doubleCount } = storeToRefs(main)

</script>
<style src="./index.scss" scoped></style>
