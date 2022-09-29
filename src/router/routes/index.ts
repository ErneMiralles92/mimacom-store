import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../../pages/HomePage.vue'
import MainLayout from '../../layouts/MainLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../../pages/CartPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../../pages/NotFoundPage.vue'),
  },
]

export default routes
