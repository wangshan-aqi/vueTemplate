import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
// 加载全局样式 只能加载非变量
import './styles/index.scss'
const app = createApp(App)

app.use(createPinia())
  .use(router)
  .mount('#app')
