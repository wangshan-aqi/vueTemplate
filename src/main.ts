import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import elementPlus from './plugins/element-plugin'
// 加载全局样式 只能加载非变量
import './styles/index.scss'
const app = createApp(App)

app.use(createPinia())
  .use(router)
  .use(elementPlus)
  .mount('#app')
