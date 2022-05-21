import { createApp } from 'vue'
import App from './App.vue'
import VueAudiomotionAnalyzerPlugin from 'vue-audiomotion-analyzer'

const app = createApp(App)
app.use(VueAudiomotionAnalyzerPlugin)
app.mount('#app')
