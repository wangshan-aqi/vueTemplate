import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/order',
  name: 'order',
  component: RouterView,
  children: [
    {
      path: 'order_list',
      name: 'order_list',
      component: () => import('../../views/order/list/index.vue')
    },
    {
      path: 'order_detail',
      name: 'order_detail',
      component: () => import('../../views/order/detail/index.vue')
    }
  ]
}
export default routes
