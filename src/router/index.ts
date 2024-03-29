import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/Logout',
      name: 'Logout',
      component: () => import('../views/LogoutView.vue')
    },
    {
      path: '/DataView',
      name: 'DataView',
      component: () => import('../views/DataView.vue')
    }
  ]
})

export default router
