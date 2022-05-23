<template>
  <div class="check-confirm-container">
    <el-checkbox
      @change="handleCheck"
      label="我已阅读并同意"
      size="large"
      :value="checked"
    />
    <div class="check-confirm-text">
      <span class="link-text">服务条款</span>
      <span>、</span>
      <span class="link-text">隐私政策</span>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
// interface IProps {
//     checked: boolean
// }
interface IEmit {
    (e: 'check-value', data: boolean): void
}
// const props = withDefaults(defineProps<IProps>(), {
//   checked: false
// })
const checked = ref(false)
const emits = defineEmits<IEmit>()
const handleCheck = (e: boolean) => {
  emits('check-value', e)
}
</script>

<style scoped lang='scss'>
.check-confirm-container {
    display: flex;
    align-items: center;
    .check-confirm-text {
        .link-text {
            color:rgb(255, 123, 0);
            cursor: pointer;
        }
    }
}
</style>
