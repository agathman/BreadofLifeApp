import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VueChartJS from '@/views/VueChartJS'


const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../components/SignUp')
    },
    {
      path: '/createClient',
      name: 'createClient',
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
    },
    {
      path: '/viewClientEvent',
      name: 'viewClientEvent',
      component: () => import('../components/ListClientsAtEventComponent')
    },
    {
      path: '/chartjs',
      name: 'VueChartJS',
      component: VueChartJS
    },
    {
      path: '/distHistory',
      name: 'distHistory',
      component: () => import('../components/ListDistributionHistoriesComponent')
    },
    {
      path: '/distZip',
      name: 'distZip',
      component: () => import('../components/ListDistByZipComponent')
    },
    {
      path: '/editEvent',
      name: 'editEvent',
      component: () => import('../components/EditEventComponent')
    },
    {
      path: '/editClient',
      name: 'editClient',
      component: () => import('../components/EditClientComponent')
    }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes // short for `routes: routes`
})

export default router