import { ViteSSG } from 'vite-ssg'
// import { VueAudioMotionAnalyzerPlugin } from 'vue-audiomotion-analyzer'
import App from './App.vue'
import routes from './router'

export const createApp = ViteSSG(App, { routes }, () => {
//  app.use(VueAudioMotionAnalyzerPlugin)
})
