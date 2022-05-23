import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/product',
  name: '',
  meta: { // 自定义路由数据
    title: '商品'
  },
  component: RouterView,
  children: [
    {
      path: 'product_list',
      name: 'product_list',
      meta: { // 自定义路由数据
        title: '商品列表'
      },
      component: () => import('../../views/product/list/index.vue')
    },
    {
      path: 'product_attr',
      name: 'product_attr',
      meta: { // 自定义路由数据
        title: '商品信息'
      },
      component: () => import('../../views/product/attr/index.vue')
    }
  ]
}
export default routes
