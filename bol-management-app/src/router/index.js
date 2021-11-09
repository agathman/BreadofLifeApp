import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
      path: '/createClient',
      name: 'createEvent',
      component: () => import('../components/CreateClientComponent')
    },
    {
      path: '/createEvent',
      name: 'createEvent',
      component: () => import('../components/CreateEventComponent')
    },
    {
      path: '/viewClients',
      name: 'viewClients',
      component: () => import('../components/ListClientsComponent')
    },
    {
      path: '/viewEvents',
      name: 'viewEvents',
      component: () => import('../components/ListEventsComponent')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes // short for `routes: routes`
})

export default router