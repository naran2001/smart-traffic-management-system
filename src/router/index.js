import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'adminhome2',
      component: () => import('../views/adminhome2.vue')
    }
  ]
})

export default router
