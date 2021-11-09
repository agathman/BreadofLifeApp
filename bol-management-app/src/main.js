import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import 'bootstrap'
=======
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
>>>>>>> 6661face85ce2ec71457c27b76c6f9da8a784f82

const app = createApp(App)
//Not sure how to use router yet
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
