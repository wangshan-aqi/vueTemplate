<template>
  <el-form
    ref="formRef"
    :model="registerForm"
    label-width="0px"
    class="loginForm"
    :rules="rules"
    @submit.prevent="handleSubmit"
  >
    <div class="login-header">
      <div class="login-header-lt">
        阿七
      </div>
      <div class="login-header-rt">
        精选
      </div>
    </div>
    <el-form-item
      prop="username"
    >
      <el-input
        v-model.number="registerForm.username"
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
        v-model.number="registerForm.password"
        placeholder="密码"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item
      prop="checkPassword"
    >
      <el-input
        v-model.number="registerForm.checkPassword"
        placeholder="请再次确认密码"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item
      prop="code"
    >
      <div class="code-warp">
        <el-input
          v-model="registerForm.code"
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
          注册
        </el-button>
      </div>
    </el-form-item>
    <div class="tip-warp">
      <div class="tip">
        未注册账号，请先注册用户
      </div>
      <div
        class="register-check"
        @click="handleRegisterChild"
      >
        注册
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
const registerForm = reactive({
  username: '',
  password: '',
  checkPassword: '',
  code: ''
})
const props = defineProps<{isLogin: boolean}>()
const emit = defineEmits<{(e: 'handle-register', val: boolean): void}>()

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (registerForm.checkPassword !== '') {
      if (!formRef.value) return
      formRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== registerForm.password) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const rules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'change' }
  ],
  password: [
    { validator: validatePass, trigger: 'change' }
  ],
  checkPassword: [
    { vaildator: validatePass2 }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})
const handleSubmit = async () => {
  const valid = formRef.value?.validate()
  if (!valid) {
    return false
  }
  loading.value = true
  console.log(registerForm)
}
// const loginForm = (formEl: FormInstance | undefined) => {
//   console.log(formEl)
// }
onMounted(() => {
  getRandomCodeFun()
})
const handleGetCode = () => {
  getRandomCodeFun()
}
const getRandomCodeFun = () => {
  getRandomCode().then(res => {
    codes.value = URL.createObjectURL(res)
    // console.log(codes.value)
  })
}
const handleRegisterChild = () => {
  console.log('11')

  emit('handle-register', !props.isLogin)
}
</script>
<style src="./index.scss" scoped>

</style>
