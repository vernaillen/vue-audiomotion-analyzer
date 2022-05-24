import { createApp } from 'vue'
import App from './App.vue'
import VueAudioMotionAnalyzerPlugin from 'vue-audiomotion-analyzer'

const app = createApp(App)
app.use(VueAudioMotionAnalyzerPlugin)
app.mount('#app')
