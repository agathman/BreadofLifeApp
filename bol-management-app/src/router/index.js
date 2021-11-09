import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
      path: '/createClient',
      name: 'createClient',
      component: () => import('../components/CreateClientComponent')
>>>>>>> 6661face85ce2ec71457c27b76c6f9da8a784f82
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