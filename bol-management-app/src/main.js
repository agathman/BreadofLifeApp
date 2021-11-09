import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
//Not sure how to use router yet
app.use(router)
app.mount('#app')
