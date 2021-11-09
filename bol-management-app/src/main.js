import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App)
//Not sure how to use router yet
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
