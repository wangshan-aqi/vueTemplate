import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from './module/product'
import mediaRoutes from './module/media'
import orderRoutes from './module/order'
import permissionRoutes from './module/permission'
/** 路由规则 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: AppLayout,
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      productRoutes,
      mediaRoutes,
      orderRoutes,
      permissionRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})
export default router
