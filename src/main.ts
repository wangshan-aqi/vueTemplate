import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import elementPlus from './plugins/element-plugin'
import 'virtual:svg-icons-register' // svg使用

import 'animate.css/animate.min.css' // 引入
// 加载全局样式 只能加载非变量
import './styles/index.scss'
const app = createApp(App)

app.use(createPinia())
  .use(router)
  .use(elementPlus)
  .mount('#app')
