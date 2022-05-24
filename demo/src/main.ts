import { createApp } from 'vue'
import App from './App.vue'
import VueAudioMotionAnalyzerPlugin from 'vue-audiomotion-analyzer'
import 'virtual:windi.css'
import './main.css'

const app = createApp(App)
app.use(VueAudioMotionAnalyzerPlugin)
app.mount('#app')
