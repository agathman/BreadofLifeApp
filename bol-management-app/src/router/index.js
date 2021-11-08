import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes // short for `routes: routes`
  })

export default router;