import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from './module/product'
import mediaRoutes from './module/media'
import orderRoutes from './module/order'
import permissionRoutes from './module/permission'

import nprogess from 'nprogress'
import 'nprogress/nprogress.css'
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
        meta: {
          title: '首页'
        },
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

router.beforeEach(() => {
  nprogess.start() // 开始加载进度条
})
router.afterEach(() => {
  nprogess.done() // 结束加载进度条
})

export default router
