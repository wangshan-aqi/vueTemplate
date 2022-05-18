import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/media',
  name: 'media',
  component: RouterView,
  children: [
    {
      path: 'media_uploadMedia',
      name: 'media_uploadMedia',
      component: () => import('../../views/media/uploadMedia/index.vue')
    },
    {
      path: 'media_vedioMedia',
      name: 'media_vedioMedia',
      component: () => import('../../views/media/vedioMedia/index.vue')
    }
  ]
}
export default routes
