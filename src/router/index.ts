import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const Home = () => import('')
const Feedbacks = () => import('')
const Credentials = () => import('')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/Feedbacks',
    name: 'Feedbacks',
    component: Feedbacks
  },

  {
    path: '/Credentials',
    name: 'Credentials',
    component: Credentials
  }

]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
