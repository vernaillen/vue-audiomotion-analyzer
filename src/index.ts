import { App } from 'vue'
import VueAudiomotionAnalyzerComponent from './VueAudiomotionAnalyzer.vue'
import audioMotion from './audioMotion'

export declare interface VueAudiomotionAnalyzerPlugin {
  install(app: App): void
}

const vueAudiomotionAnalyzer: VueAudiomotionAnalyzerPlugin = {
  install(app) {
    app.component('vue-audiomotion-analyzer', VueAudiomotionAnalyzerComponent)
    app.config.globalProperties.$hello = this
  },
}

export { vueAudiomotionAnalyzer, audioMotion }
