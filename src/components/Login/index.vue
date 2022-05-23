<template>
  <el-form
    ref="formRef"
    :model="loginForm"
    label-width="0px"
    class="loginForm"
    :rules="rules"
    @submit.prevent="handleSubmit"
  >
    <el-form-item
      prop="username"
    >
      <el-input
        v-model="loginForm.username"
        type="text"
        autocomplete="off"
        placeholder="用户名"
        :prefix-icon="User"
      />
    </el-form-item>
    <el-form-item
      prop="password"
    >
      <el-input
        v-model.number="loginForm.password"
        placeholder="密码"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item
      prop="code"
    >
      <div class="code-warp">
        <el-input
          v-model="loginForm.code"
          placeholder="请输入验证码"
        />
        <img
          :src="codes"
          alt=""
          @click="handleGetCode"
        >
      </div>
    </el-form-item>
    <el-form-item>
      <div class="sub-warp">
        <el-button
          type="primary"
          class="login-btn"
          native-type="submit"
          :loading="loading"
        >
          登录
        </el-button>
      </div>
    </el-form-item>
    <div class="tip-warp">
      <div class="tip-lbtn">
        忘记帐号名
      </div>
      <div class="tip-rbtn">
        忘记密码
      </div>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
// defineStore返回一个必须调用才能访问存储的函数：
// import { useMainStore } from '@/store/main'
// import { storeToRefs } from 'pinia'
// const main = useMainStore()

// // extract specific store properties
// // 提取特定的存储属性
// const { counter, doubleCount } = storeToRefs(main)
import { onMounted, reactive, ref } from 'vue'
import { User } from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'
import { getRandomCode } from '@/api/login'

const formRef = ref<FormInstance>()
const codes = ref<any>(null)
const loading = ref<boolean>(false)
// const props = defineProps<{isLogin: boolean}>()
// const emit = defineEmits<{(e: 'handle-register', val: boolean): void}>()

const loginForm = reactive({
  username: '',
  password: '',
  code: ''
})

const rules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'change' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  userPhone: [
    { required: true, message: '请输入手机号', trigger: 'change' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})

onMounted(() => {
  getRandomCodeFun()
})
const handleGetCode = () => {
  getRandomCodeFun()
}
/** 获取验证码 */
const getRandomCodeFun = () => {
  getRandomCode().then(res => {
    codes.value = URL.createObjectURL(res)
  })
}
const handleSubmit = async () => {
  const valid = formRef.value?.validate()
  if (!valid) {
    return false
  }
  loading.value = true
  console.log(loginForm)
}

// const handleRegisterChild = () => {
//   emit('handle-register', !props.isLogin)
// }
</script>
<style src="./index.scss" scoped>

</style>
