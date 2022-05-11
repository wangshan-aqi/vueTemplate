import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

/** 路由规则 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})
export default router
