import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import VueAudioMotionAnalyzerPlugin from 'vue-audiomotion-analyzer'
import 'virtual:windi.css'
import './main.css'

const app = createApp(App)
app.use(createPinia())
app.use(VueAudioMotionAnalyzerPlugin)
app.mount('#app')
