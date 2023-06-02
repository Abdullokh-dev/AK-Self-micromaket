import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../pages/Home.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/subsidy',
      component: () => import('../pages/Subsidy.vue')
    },
    {
      path: '/faq',
      component: () => import('../pages/Faq.vue')
    },
    {
      path: '/delivery',
      component: () => import('../pages/Deliver.vue')
    }
  ]
})

export default router;
