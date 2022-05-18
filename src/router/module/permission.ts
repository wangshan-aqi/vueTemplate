import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/permission',
  name: '',
  component: RouterView,
  children: [
    {
      path: 'permission_buttonRule',
      name: 'permission_buttonRule',
      component: () => import('../../views/permission/buttonRule/index.vue')
    },
    {
      path: 'permission_roleRule',
      name: 'permission_roleRule',
      component: () => import('../../views/permission/roleRule/index.vue')
    },
    {
      path: 'permission_userRule',
      name: 'permission_userRule',
      component: () => import('../../views/permission/userRule/index.vue')
    }
  ]
}
export default routes
