import { VueAudioMotionAnalyzerPlugin } from 'vue-audiomotion-analyzer'

export default defineNuxtPlugin((nuxtApp) =>
  nuxtApp.vueApp.use(VueAudioMotionAnalyzerPlugin)
)