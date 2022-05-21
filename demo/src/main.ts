import { createApp } from 'vue'
import App from './App.vue'
import VueAudiomotionAnaylzer from 'vue-audiomotion-analyzer'

const app = createApp(App)
app.use(VueAudiomotionAnaylzer)
app.mount('#app')
