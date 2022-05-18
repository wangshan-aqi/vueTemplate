import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/product',
  name: '',
  component: RouterView,
  children: [
    {
      path: 'product_list',
      name: 'product_list',
      component: () => import('../../views/product/list/index.vue')
    },
    {
      path: 'product_attr',
      name: 'product_attr',
      component: () => import('../../views/product/attr/index.vue')
    }
  ]
}
export default routes
