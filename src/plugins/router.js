import {createRouter, createWebHistory} from 'vue-router'
import Home from "../pages/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/subsidy',
      component: () => import('../pages/Subsidy.vue')
    },
    {
      path: '/faq',
      component: () => import('../pages/Faq.vue')
    }
  ]
})

export default router;
